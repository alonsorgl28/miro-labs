/* MIRÓ Labs — index behaviour.
   Progressive: the page reads and works with this file absent.
   Adds a hover/focus preview, single-open index and the paper/black switch. */
(function () {
  "use strict";

  var THEME_KEY = "miroTheme";
  var root = document.documentElement;

  /* ---------- theme ---------- */

  function storedTheme() {
    try {
      return window.localStorage.getItem(THEME_KEY);
    } catch (_) {
      return null;
    }
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  function initTheme() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    applyTheme(root.getAttribute("data-theme") || "light");
    btn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch (_) {}
    });
  }

  /* ---------- index ---------- */

  function text(el, selector) {
    var node = el.querySelector(selector);
    return node ? node.textContent.trim() : "";
  }

  function initIndex() {
    var index = document.getElementById("index");
    var stage = document.getElementById("stage");
    if (!index) return;

    var entries = Array.prototype.slice.call(
      index.querySelectorAll(".entry")
    );
    if (!entries.length) return;

    var intro = stage ? stage.querySelector(".layer--intro") : null;
    var preview = stage ? stage.querySelector(".layer--preview") : null;
    var markBox = preview ? preview.querySelector(".preview__mark") : null;
    var nameBox = preview ? preview.querySelector(".preview__name-text") : null;
    var tagBox = preview ? preview.querySelector(".preview__tag") : null;
    var descBox = preview ? preview.querySelector(".preview__desc") : null;

    var canHover =
      window.matchMedia &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    var pinned = null;

    function fill(entry) {
      if (!preview) return;
      var source = entry.querySelector(".entry__detail-mark");
      if (markBox && source) markBox.innerHTML = source.innerHTML;
      if (nameBox) nameBox.textContent = text(entry, ".entry__name");
      if (tagBox) tagBox.textContent = text(entry, ".entry__tag");
      if (descBox) descBox.textContent = text(entry, ".entry__lead");
    }

    function render(entry) {
      if (!preview || !intro) return;
      /* Narrow layouts hide the preview column: the intro must stay put. */
      if (window.getComputedStyle(preview).display === "none") {
        intro.classList.add("is-visible");
        return;
      }
      if (entry) {
        fill(entry);
        preview.classList.add("is-visible");
        intro.classList.remove("is-visible");
      } else {
        preview.classList.remove("is-visible");
        intro.classList.add("is-visible");
      }
    }

    function highlight(entry) {
      entries.forEach(function (item) {
        item.classList.toggle("is-hot", item === entry);
      });
    }

    function restore() {
      highlight(pinned);
      render(pinned);
    }

    entries.forEach(function (entry) {
      var summary = entry.querySelector(".entry__summary");

      entry.addEventListener("toggle", function () {
        if (entry.open) {
          entries.forEach(function (other) {
            if (other !== entry && other.open) other.open = false;
          });
          pinned = entry;
        } else if (pinned === entry) {
          pinned = null;
        }
        restore();
      });

      if (!summary) return;

      if (canHover) {
        summary.addEventListener("mouseenter", function () {
          highlight(entry);
          render(entry);
        });
        entry.addEventListener("mouseleave", restore);
      }

      summary.addEventListener("focus", function () {
        highlight(entry);
        render(entry);
      });
      summary.addEventListener("blur", restore);
    });

    if (stage) stage.addEventListener("mouseleave", restore);
  }

  /* ---------- grid ---------- */

  function initGrid() {
    document.addEventListener("keydown", function (event) {
      if (event.key !== "g" && event.key !== "G") return;
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      var el = event.target;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (el && el.isContentEditable) return;
      root.classList.toggle("show-grid");
    });
  }

  /* ---------- opening ---------- */

  function initOpening() {
    var opening = document.querySelector(".opening");
    if (!opening) return;

    root.classList.add("opening-on");

    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var hold = reduced ? 600 : 2300;
    var closed = false;

    function close() {
      if (closed) return;
      closed = true;
      root.classList.add("opening-done");
      window.setTimeout(function () {
        root.classList.remove("opening-on", "opening-done");
      }, 520);
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", close);
    }

    /* Any intent to get on with it skips the opening — but only once the
       screen has actually had a moment on screen, so that a stray pointer
       event during load cannot swallow it. */
    window.setTimeout(function () {
      if (closed) return;
      document.addEventListener("keydown", close);
      document.addEventListener("click", close);
    }, 400);
    window.setTimeout(close, hold);
  }

  /* ---------- vertical rhythm ---------- */

  /* A viewport is rarely a whole number of 24px units, and the leftover pushes
     everything below the first screen off the grid. Round it down. */
  function initRhythm() {
    var shell = document.querySelector(".shell");
    if (!shell) return;
    var unit =
      parseInt(window.getComputedStyle(root).getPropertyValue("--u"), 10) || 24;

    function fit() {
      var h = window.innerHeight;
      root.style.setProperty("--shell-min", Math.floor(h / unit) * unit + "px");
    }
    fit();
    window.addEventListener("resize", fit);
  }

  function start() {
    initRhythm();
    initOpening();
    initTheme();
    initIndex();
    initGrid();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
