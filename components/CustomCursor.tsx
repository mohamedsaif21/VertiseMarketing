"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Cursor variants mapped to Vertise's exact sampled colors:
// Red #E12021 (primary), Blue #3758FB, Green #6AD049, Gold #FDD80E
// Tag any element with data-cursor="drag" | "view" | "cta" | "stats" | "like" to trigger.
type CursorState = "default" | "drag" | "view" | "like" | "stats" | "cta";

const VARIANT_STYLES: Record<CursorState, string> = {
  default: "bg-brand-red/80 text-pure-white scale-75 rounded-full ring-2 ring-pure-white/40",
  cta: "bg-brand-red text-pure-white scale-110 rounded-2xl shadow-xl shadow-brand-red/40",
  drag: "bg-brand-blue text-pure-white scale-110 rounded-2xl shadow-xl shadow-brand-blue/40",
  view: "bg-brand-blue text-pure-white scale-105 rounded-2xl shadow-xl shadow-brand-blue/40",
  stats: "bg-brand-green text-deep-navy scale-105 rounded-2xl shadow-xl shadow-brand-green/40 font-bold",
  like: "bg-brand-red text-pure-white scale-110 rounded-full shadow-xl shadow-brand-red/40",
};

const VARIANT_LABEL: Record<CursorState, string> = {
  default: "✦",
  cta: "→",
  drag: "↔ Drag",
  view: "View",
  stats: "▤",
  like: "♥",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorState>("default");
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    quickX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });
    quickY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const move = (e: MouseEvent) => {
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      const next = (target?.getAttribute("data-cursor") as CursorState) || "default";
      setVariant((prev) => (prev !== next ? next : prev));
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <div
        className={`flex h-11 min-w-11 items-center justify-center px-2 text-xs font-bold tracking-tight backdrop-blur-sm transition-all duration-200 ${VARIANT_STYLES[variant]}`}
      >
        {VARIANT_LABEL[variant]}
      </div>
    </div>
  );
}
