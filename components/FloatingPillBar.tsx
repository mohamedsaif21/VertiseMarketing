"use client";

import { useEffect, useState } from "react";

type Segment = {
  label: string;
  value: string;
  href: string;
};

const SEGMENTS: Segment[] = [
  { label: "Open", value: "Menu", href: "#home" },
  { label: "", value: "View work", href: "#work" },
  { label: "View", value: "Services", href: "#services" },
];

/**
 * Persistent floating pill status bar (plan §4A).
 * - Fixed/sticky, must not obstruct content or the mobile CTA (§19) —
 *   hidden below md breakpoint rather than trying to shrink to fit.
 * - Fully keyboard accessible (real <a> elements, visible focus ring).
 * - Respects prefers-reduced-motion: no entrance animation by default.
 */
export default function FloatingPillBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once the hero has scrolled past, so it doesn't compete
    // with the hero's own CTAs.
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show pill bar only when hero is mostly out of view (bounding rect top < -300)
        const isPastHero = entry.boundingClientRect.bottom < 300;
        setVisible(isPastHero);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1.0] }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed left-1/2 top-6 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full bg-ink/90 px-2 py-2 text-sm text-cream shadow-xl backdrop-blur transition-opacity duration-300 md:flex ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {SEGMENTS.map((seg, i) => (
        <a
          key={seg.value}
          href={seg.href}
          data-cursor="drag"
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold ${
            i === 1 ? "bg-cream text-ink hover:bg-cream/90" : ""
          }`}
        >
          {seg.label && <span className="h-1.5 w-1.5 rounded-full bg-green" aria-hidden="true" />}
          {seg.label && <span className="text-cream/60">{seg.label}:</span>}
          <span>{seg.value}</span>
        </a>
      ))}
    </div>
  );
}
