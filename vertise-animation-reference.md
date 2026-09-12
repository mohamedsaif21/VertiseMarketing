# Vertise — Animation Reference

## Approved Animations

| # | Animation | Behavior | Where used |
|---|---|---|---|
| 1 | Cursor morph | Custom cursor changes shape/color depending on what it's hovering | Global |
| 2 | Wave-curve section divider | Static curved SVG seam between dark and light sections | Hero → About, Clients → Contact |
| 3 | Hero → About scroll-merge | Combination effect: cropped oversized headline, wave divider, sticker badges with dotted connectors, floating pill bar — reads as one connected transition | Hero → About section boundary |
| 4 | Marquee ticker loop | Infinite horizontal scrolling outlined text band | Between major sections |
| 5 | Scroll-reveal | Fade + slide up, staggered, as elements enter viewport | Section headings, service cards, portfolio items, client cards |
| 6 | Flip-card rotation | Card flips on click/hover to reveal back content | Services cards |
| 7 | Horizontal drag-scroll | Click-drag or momentum-scroll carousel | Portfolio posters, videos, client logos |
| 8 | Sticker micro-rotation + parallax | Badges sit at a fixed tilt, subtle drift on scroll | Stats/trust badges |
| 9 | Magnetic button | Button subtly pulls toward cursor on hover | Primary CTAs |
| 10 | Text-split reveal | Headline letters/words animate in individually | Hero headline, big statement section |
| 11 | Number counter | Stats count up from 0 when scrolled into view | Trust/results strip stats |
| 12 | Sticky floating pill bar | Rounded capsule stays pinned while scrolling, label updates per section | Persistent mini-nav |
| 13 | Three.js rotating ring graphic | Interlocking rings rotate continuously, echoing the logo mark | Hero background |
| 14 | FAQ accordion | Expand/collapse on click, smooth height transition | FAQ section |
| 15 | Hover state swap | Instant color/outline change on hover, no long transition | Nav links, buttons, tabs |

## Ground rules
- Motion supports usability first — never required to understand content (no "must hover to know what this is").
- Respect `prefers-reduced-motion` — every animation above needs a static/resting fallback.
- Don't stack more than 2–3 of these in a single viewport at once (e.g. avoid cursor + text-split + Three.js + marquee all firing together).
- No heavy autoplay video/animation on mobile.
