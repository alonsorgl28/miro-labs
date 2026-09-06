# MIRÓ Labs

A personal lab by Alonso Rivera — the source of <https://miro-labs.vercel.app>.

Static HTML, CSS and JavaScript. No framework, no build step, no runtime
dependency: the page makes no network request for fonts or scripts beyond its
own two files.

## Layout

- `index.html` — the home page: a first-person introduction and a numbered
  index of eight projects that previews on hover and opens in place.
- `about.html` — the CV told as a story.
- `assets/miro-index.css` — the whole visual system.
- `assets/miro-index.js` — the opening screen, the index behaviour, the
  paper/black switch and the grid overlay.
- `assets/i18n.js` — English and Spanish.
- `assets/miro-electronics-logo.png` — the original MIRÓ Electronics
  lettering, unmodified.
- `tools/` — the Python generators that emit the two HTML files and draw the
  LABS lettering.

## The grid

Twelve columns with a constant gutter, and one vertical unit of 24px that every
rhythm is a multiple of: an index row is exactly two units, the footer four.
Three type sizes and nothing else — 11px, 14px, and the band.

Press **G** on any page to see it.

## The lettering

The MIRÓ mark is the original Electronics artwork, used unchanged and rendered
black through a CSS filter. Its construction was measured off the file: three
bands of 10px separated by 7px gaps, a 44px stroke, a 152px cap height, flat
terminals and concentric bands through every curve.

`tools/build_labs_lettering.py` reconstructs LABS in that same system, by
stroking one skeleton three times inside an SVG mask — 44 ink, 24 paper,
10 ink. It is a reconstruction, not the original letters, and it is kept for
large-format use: at navigation sizes the bands fall below two pixels and the
lettering stops working, so only the mark is used small.

## Running it

Any static server will do:

    python3 -m http.server 8765

## Deploying

    vercel --prod

`.vercelignore` keeps working files out of the deploy.
