# -*- coding: utf-8 -*-
"""Builds src/about.html — the narrative version of the CV."""
import io, re
from build_labs_lettering import lockup


# Every claim below is taken from Alonso_Rivera_CV_2026.pdf. Nothing invented.
CHAPTERS = [
 ("", "Lima", [
   "I studied Communications. Nobody told me I would spend the next decade explaining machines to people who had no particular interest in machines.",
   "That turned out to be the job. Not the technology. The distance between a tool that works and a person willing to change how they work.",
 ]),
 ("2018 — 2024", "Teqvita", [
   "I founded the first company in Peru dedicated entirely to 3D printing for digital dentistry.",
   "The printers were never the hard part. A dentist who has worked the same way for twenty years has no reason to believe you. So I stopped presenting and started demonstrating: printers in their labs, hands in the resin, training until they could run the workflow without me in the room.",
   "Around 200 dentists and technicians came through. Then 80 clinics and labs. They reported production times about a third shorter and operating costs a fifth lower.",
   "In 2021 I spent four months on a research collaboration with Oqton, testing biocompatible resin workflows and returning structured feedback from real prints. During the pandemic we designed a 3D-printed biocompatible prototype that placed second nationally in an innovation competition run by Fundación Telefónica.",
 ]),
 ("2021 — 2024", "Realigner", [
   "I ran operations and sales for a clinic-lab printing invisible aligners, opening it in Lima across both B2B and B2C.",
   "More than 100 orthodontic treatments, a partner-clinic network 40% larger, and a redesigned Lima–Brazil workflow that cut delivery times by a fifth. Two countries, one process, and a lot of things that only break in production.",
 ]),
 ("2024 — now", "Skaiteks", [
   "High-voltage infrastructure. Eleven utilities, more than fifteen manufacturers, thirteen countries.",
   "I arrived to find tender and certification work spread across inboxes and spreadsheets. Rather than tidy it, I interviewed the people actually doing it and rebuilt the model around what they were really tracking: case IDs, owners, priorities, deadlines, dependencies, next actions, data validation, integrity alerts.",
   "The moment I keep coming back to: after fixing the date quality, 54 overdue cases became visible. They had always been overdue. Nobody could see them. That is what a system is for.",
   "Today it holds 123 live cases across 13 countries, 23 technical-conformity cases, 7 manufacturer registrations and a catalog of 215 certificates, used by 8 to 10 people on the technical and commercial teams.",
   "Alongside it I led more than 15 international tenders with ENEL, ISA REP, EPEC and Luz del Sur under IEC, IRAM and RETIE standards, securing over USD 4M in contracts. I opened the Argentine market with an Indian manufacturer, negotiated a 15% factory-price reduction and closed more than USD 720K in first-year sales.",
 ]),
 ("", "Where AI came in", [
   "Not as a strategy. As a response to the same bottlenecks appearing every quarter.",
   "I mapped the recurring tender and contract-review work into reusable LLM workflows for requirement analysis and technical translation in high-voltage terminology. Then I did the part that actually matters: structured the human review and wrote the operating rules, so the commercial team can reuse the workflows without depending on a single operator.",
 ]),
 ("", "MIRÓ Labs", [
   "This site is the lab. It is where I build products to test how AI, code, design and human judgment hold up against real work, from definition and prototyping through to testing and documentation.",
   "A Mandarin tutor that refuses to trust its own model without checking the transcript. A knowledge system that will not publish without human approval. A granular audio processor running across firmware and three plugin formats. None of them are demos.",
 ]),
 ("", "Now", [
   "Based in Lima, Peruvian and Italian, available for frequent international travel or relocation. Spanish native, English fluent, French intermediate.",
   "If you have a workflow that is breaking down, or an idea that needs someone who can talk to both the users and the engineers, write to me.",
 ]),
]

blocks = []
for i, (period, title, paras) in enumerate(CHAPTERS):
    ps = "\n".join('        <p>%s</p>' % p for p in paras)
    per = '<span class="chapter__period">%s</span>' % period if period else ''
    blocks.append(f'''    <section class="chapter grid rise" style="--i:{2 + i}">
      <div class="chapter__aside">
        <h2 class="chapter__title">{title}</h2>
        {per}
      </div>
      <div class="chapter__body">
{ps}
      </div>
    </section>''')

html = f'''<!DOCTYPE html>
<html lang="en" data-theme="light"><head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b0b0b" media="(prefers-color-scheme: dark)">
<meta name="description" content="How Alonso Rivera got from a Communications degree to high-voltage tender systems and applied AI, told as a story rather than a list.">
<meta name="robots" content="index, follow">
<meta property="og:type" content="profile">
<meta property="og:site_name" content="MIRÓ Labs">
<meta property="og:title" content="Get to know me — Alonso Rivera">
<meta property="og:description" content="How Alonso Rivera got from a Communications degree to high-voltage tender systems and applied AI, told as a story rather than a list.">
<title>Get to know me — Alonso Rivera</title>
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="assets/miro-index.css?v=index-13">
<script>
(function () {{
  try {{
    var t = window.localStorage.getItem("miroTheme");
    document.documentElement.setAttribute("data-theme", t === "dark" ? "dark" : "light");
  }} catch (e) {{}}
}})();
</script>
</head>
<body id="top">

<a class="skip" href="#story">Skip to the story</a>

<div class="grid-overlay" aria-hidden="true">
  <div class="grid-overlay__lines"></div>
  <div class="grid-overlay__cols"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
</div>
<p class="grid-hint" aria-hidden="true">12 columns / 24 px</p>

<div class="page">

  <header class="masthead grid">
    <a class="brand rise" style="--i:0" href="index.html" aria-label="MIRÓ Labs, home">
      {lockup("brand__mark", "h", labs=False)}
    </a>
    <div class="controls rise" style="--i:1">
      <div class="switch" role="group" aria-label="Language">
        <button type="button" class="switch__btn" data-lang-choice="en" aria-pressed="true">EN</button>
        <button type="button" class="switch__btn" data-lang-choice="es" aria-pressed="false">ES</button>
      </div>
      <button type="button" class="theme-btn" id="theme-toggle" aria-pressed="false" aria-label="Switch theme">
        <span class="theme-btn__dot" aria-hidden="true"></span>
        <span class="theme-btn__label theme-btn__label--light">Black</span>
        <span class="theme-btn__label theme-btn__label--dark">Paper</span>
      </button>
    </div>
  </header>

  <main id="story">
    <h1 class="story__head grid rise" style="--i:2">
      <span class="story__head-label">Get to know me</span>
      <span class="story__head-name">Alonso Rivera</span>
    </h1>

{chr(10).join(blocks)}

  </main>

  <footer class="foot grid">
    <hr class="foot__rule">
    <nav class="foot__nav" aria-label="Site links">
      <a href="index.html">Index</a>
      <a href="https://github.com/alonsorgl28" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="mailto:alonsorgl28@gmail.com">Email</a>
    </nav>
    <span class="foot__copy">MIRÓ Labs — 2026 — press G for the grid</span>
  </footer>

</div>

<script src="assets/i18n.js?v=index-13" defer></script>
<script src="assets/miro-index.js?v=index-13" defer></script>

</body></html>
'''

with io.open("src/about.html", "w", encoding="utf-8") as f:
    f.write(html)
print("about.html written")
