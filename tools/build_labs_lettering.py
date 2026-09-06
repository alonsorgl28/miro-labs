# -*- coding: utf-8 -*-
"""
Draws LABS in the MIRÓ Electronics construction and emits the full lockup SVG.

Measured from assets/miro-electronics-logo.png:
  band 10px, gap 7px, three bands per stroke -> stroke width 44
  cap height 152, letter spacing 13, word space 48
  flat (butt) terminals, concentric bands through every curve

The three bands are produced by stroking one skeleton three times:
  44 ink / 24 paper / 10 ink  ->  10 | 7 | 10 | 7 | 10 = 44
which holds for straight runs, corners and arcs alike.
"""
import io

H       = 152    # cap height
W       = 44     # stroke weight
HALF    = W / 2  # 22
TOP     = HALF          # 22   skeleton top
BOT     = H - HALF      # 130  skeleton bottom
TRACK   = 8      # letter spacing
WORD    = 48     # space between MIRÓ and LABS
MIRO_X  = 70     # first inked column of the MIRÓ lettering
MIRO_W  = 536    # 70 -> 606, the real width; the PNG's own bbox starts at 33
                 # but the 37px before x=70 carry no ink
ACCENT  = 28     # the acute rises this far above the cap line

# ---- skeletons -------------------------------------------------------------
# Every path is the centre line of a 44-wide stroke.

def L(x):
    r = 30
    return (f"M{x+HALF} {TOP} V{BOT-r} "
            f"A{r} {r} 0 0 0 {x+HALF+r} {BOT} "
            f"H{x+110-HALF}")
L_W = 110

def A(x):
    # two diagonals meeting in a rounded apex, plus a crossbar
    bl, br = x + HALF, x + 152 - HALF        # 22 .. 130
    tl, tr = x + 56, x + 96
    y_apex, y_bar = 38, 106
    # crossbar meets the legs where they sit at y_bar
    t = (BOT - y_bar) / (BOT - y_apex)
    xl = bl + (tl - bl) * t
    xr = br + (tr - br) * t
    return (f"M{bl} {BOT} L{tl} {y_apex} "
            f"C{tl+6} {TOP} {tr-6} {TOP} {tr} {y_apex} "
            f"L{br} {BOT} "
            f"M{xl:.1f} {y_bar} H{xr:.1f}")
A_W = 152

def B(x):
    """Stem, then two bowls that spring from the stem's right edge rather than
    its centre line. Sub-paths that cross would erase each other inside the
    mask, because every band is painted for the whole letter in turn."""
    ry_top, ry_bot = 27, 27
    mid = TOP + ry_top * 2            # 76, where the bowls meet
    stem = x + HALF
    edge = x + W                      # the stroke's right edge: bowls start here
    return (f"M{stem} {TOP} V{BOT} "
            f"M{edge} {TOP} A42 {ry_top} 0 0 1 {edge} {mid} "
            f"M{edge} {mid} A44 {ry_bot} 0 0 1 {edge} {BOT}")
B_W = 110

def S(x):
    """Two circles stacked so the bottom of the upper one is the top of the
    lower one; the S is a 240 degree sweep round each, in opposite directions."""
    rx, ry = 36, 27
    cx = x + HALF + rx                # both centres share an x
    cy1, cy2 = TOP + ry, BOT - ry     # 49 and 103, exactly 2*ry apart
    dx, dy = 0.866 * rx, 0.5 * ry     # the 30 degree terminals
    return (f"M{cx+dx:.1f} {cy1-dy:.1f} "
            f"A{rx} {ry} 0 1 0 {cx} {cy1+ry} "
            f"A{rx} {ry} 0 1 1 {cx-dx:.1f} {cy2+dy:.1f}")
S_W = 116

# Optical sidebearings: the L opens to the right and the A closes, so that
# pair tightens; two round letters (B, S) need more air than two flat ones.
LETTERS = [(L, L_W, -6), (A, A_W, 2), (B, B_W, 6), (S, S_W, 0)]

x = 0
paths = []
for i, (fn, w, kern) in enumerate(LETTERS):
    paths.append(fn(x))
    x += w + (TRACK + kern if i < len(LETTERS) - 1 else 0)
LABS_W = x
D = " ".join(paths)

LOCKUP_W = MIRO_W + WORD + LABS_W
LABS_X = MIRO_W + WORD

def lockup(cls, uid, labs=True):
    """The MIRÓ LABS lockup. `uid` keeps the mask ids unique when it appears
    more than once on a page.

    labs=False returns the MIRÓ mark alone. The three-band construction is a
    display lettering: at masthead size the 10px bands fall below two pixels
    and turn to mush, and LABS — being the more open word — suffers first. So
    the full lockup is used large, on the opening, and the mark alone is used
    small."""
    width = LOCKUP_W if labs else MIRO_W
    labs_layer = (f'<rect x="{LABS_X}" y="0" width="{LABS_W}" height="{H}" '
                  f'fill="currentColor" mask="url(#lbm-{uid})"/>') if labs else ''
    mask_def = f'''<mask id="lbm-{uid}" maskUnits="userSpaceOnUse" x="{LABS_X}" y="0" width="{LABS_W}" height="{H}">
<g transform="translate({LABS_X} 0)" fill="none" stroke-linecap="butt" stroke-linejoin="round">
<path d="{D}" stroke="#fff" stroke-width="{W}"/>
<path d="{D}" stroke="#000" stroke-width="24"/>
<path d="{D}" stroke="#fff" stroke-width="10"/>
</g>
</mask>''' if labs else ''
    return f'''<svg class="{cls}" viewBox="0 {-ACCENT} {width} {H + ACCENT}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
<defs>
<clipPath id="mrc-{uid}"><rect x="0" y="{-ACCENT}" width="{MIRO_W}" height="{H + ACCENT}"/></clipPath>
{mask_def}
</defs>
<g clip-path="url(#mrc-{uid})"><image href="assets/miro-electronics-logo.png" x="-70" y="-277" width="2172" height="724"/></g>
{labs_layer}
</svg>'''

LOCKUP_W = MIRO_W + WORD + LABS_W
LABS_X = MIRO_W + WORD

if __name__ == "__main__":
    io.open("lockup.svg.tmpl", "w", encoding="utf-8").write(lockup("{cls}", "t"))
    print("lockup", LOCKUP_W, "x", H + ACCENT, " LABS width", LABS_W)
