"use client";

import { useEffect, useState } from "react";

type Segment = {
  label: string;
  value: string;
  href: string;
};

const SEGMENTS: Segment[] = [
  { label: "Open", value: "Menu", href: "#home" },
  { label: "View", value: "Cases", href: "#work" },
  { label: "Explore", value: "Services", href: "#services" },
];

/**
 * Persistent floating pill status bar (§4A & §25).
 * - Fixed position, appears only when scrolled past Hero CTAs.
 * - Nudged threshold (bottom < 100 & scrollY > 450) prevents overlap with hero CTAs.
 * - Active state indicator dots and keyboard accessible links.
 */
export default function FloatingPillBar() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      // Reveal only when scrolled past 450px down so it never overlaps hero buttons
      const isPast = window.scrollY > 450;
      setVisible(isPast);

      // Section position detection
      const sections = ["home", "about", "services", "work", "process", "contact"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(`#${sec}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-label="Floating contextual controls"
      className={`fixed left-1/2 top-6 z-40 hidden -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/20 bg-deep-navy/85 p-1.5 text-xs text-pure-white shadow-2xl backdrop-blur-2xl transition-all duration-300 md:flex ${
        visible ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
      }`}
      style={{
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(211, 197, 246, 0.2)",
      }}
    >
      {SEGMENTS.map((seg) => {
        const isActive = activeSection === seg.href;
        return (
          <a
            key={seg.value}
            href={seg.href}
            data-cursor="view"
            className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red ${
              isActive
                ? "bg-brand-red text-pure-white font-bold shadow-md shadow-brand-red/25"
                : "text-pure-white/80 hover:bg-white/10 hover:text-pure-white"
            }`}
          >
            {seg.label && (
              <span
                className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-pure-white" : "bg-brand-green"}`}
                aria-hidden="true"
              />
            )}
            {seg.label && <span className={isActive ? "opacity-90" : "opacity-50"}>{seg.label}:</span>}
            <span>{seg.value}</span>
          </a>
        );
      })}
    </div>
  );
}

