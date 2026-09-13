# Your Agency — Site Scaffold

Next.js + Three.js(working on) + GSAP, styled with a color system derived from your logo
(gold / red / blue / green on a near-black canvas), structured after the
Crency design-pattern reference doc.

## What's built so far
- Global color tokens (`app/globals.css`, `tailwind.config.ts`) mapped from your logo
- Custom morphing cursor (`components/CustomCursor.tsx`) — tag any element
  `data-cursor="drag" | "like" | "stats" | "cta"` to change its shape/color on hover
- Three.js hero scene (`components/HeroScene.tsx`) — four interlocking rings in
  brand colors, echoing the logo's infinity/diamond mark, rendered with
  @react-three/fiber
- Marquee ticker bands (`components/Marquee.tsx`) — outlined type, infinite loop,
  one band per accent color
- Hero section with scattered trust-badge stickers, icon row, nav bar

## Run it locally
```bash
npm install
npm run dev
```


## Next steps (not yet built)
- Full-screen circular nav overlay (§5.2 of the design doc)
- Case-study card with browser-chrome + segmented control bar (§5.4)
- Split panel + phone mockup showcase (§5.6)
- Scroll-reveal animations via GSAP ScrollTrigger
- Swap Google system fonts for your actual brand typeface if you have one
  licensed (Aeonik, Clash Display, General Sans, etc.) — currently using
  Space Grotesk as a free geometric-rounded stand-in

## Notes
- The custom cursor auto-disables on touch/mobile screens (`cursor: none` only
  applies above 768px) so it won't break mobile UX.
- Replace the four hex values in `tailwind.config.ts` (`gold`, `red`, `blue`,
  `green`) if you want to fine-tune the exact match to your logo — I estimated
  them visually from the PNG you sent.
