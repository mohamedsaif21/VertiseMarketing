"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Stateful cursor system matching the Crency / Advia interaction specification.
// Tag any element with data-cursor="drag" | "view" | "cta" | "stats" | "flip" | "select" | "copy" | "like"
export type CursorState =
  | "default"
  | "drag"
  | "view"
  | "cta"
  | "stats"
  | "flip"
  | "select"
  | "copy"
  | "like";

const VARIANT_STYLES: Record<CursorState, string> = {
  default:
    "h-4 w-4 rounded-full border border-pure-white/40 bg-brand-red/90 shadow-[0_0_12px_rgba(234,67,53,0.6)] scale-100",
  drag:
    "px-4 py-2 rounded-full bg-brand-blue text-pure-white font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-2xl shadow-brand-blue/50 scale-105 border border-white/25",
  view:
    "px-4 py-2 rounded-full bg-brand-red text-pure-white font-display text-xs font-bold uppercase tracking-wider shadow-2xl shadow-brand-red/50 scale-105 border border-white/20",
  cta:
    "px-4 py-2 rounded-full bg-brand-red text-pure-white font-display text-xs font-extrabold uppercase tracking-wider shadow-2xl shadow-brand-red/50 scale-110 border border-white/30",
  stats:
    "px-3.5 py-1.5 rounded-full bg-brand-green text-deep-navy font-mono text-[11px] font-extrabold tracking-wider shadow-xl shadow-brand-green/40 scale-105 border border-deep-navy/20",
  flip:
    "px-3.5 py-1.5 rounded-full bg-brand-yellow text-deep-navy font-mono text-[11px] font-extrabold tracking-wider shadow-xl shadow-brand-yellow/40 scale-105 border border-deep-navy/20",
  select:
    "px-3.5 py-1.5 rounded-full bg-brand-blue text-pure-white font-mono text-[11px] font-extrabold tracking-wider shadow-xl shadow-brand-blue/40 scale-105 border border-white/25",
  copy:
    "px-3.5 py-1.5 rounded-full bg-soft-lavender text-deep-navy font-mono text-[11px] font-extrabold tracking-wider shadow-xl shadow-soft-lavender/40 scale-105 border border-deep-navy/20",
  like:
    "h-11 w-11 rounded-full bg-brand-red text-pure-white text-base font-bold shadow-xl shadow-brand-red/40 scale-110",
};

const VARIANT_LABEL: Record<CursorState, string> = {
  default: "",
  drag: "YOU → CLICK → DRAG",
  view: "EXPLORE ↗",
  cta: "LET'S BUILD →",
  stats: "METRIC ▤",
  flip: "FLIP ↻",
  select: "SELECT ✓",
  copy: "COPY ⎘",
  like: "♥",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);
  const dotQuickX = useRef<gsap.QuickToFunc | null>(null);
  const dotQuickY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!cursorRef.current || !dotRef.current) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Outer follower pill physics
    quickX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.22,
      ease: "power3.out",
    });
    quickY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.22,
      ease: "power3.out",
    });

    // Inner precision point physics
    dotQuickX.current = gsap.quickTo(dotRef.current, "x", {
      duration: 0.05,
      ease: "none",
    });
    dotQuickY.current = gsap.quickTo(dotRef.current, "y", {
      duration: 0.05,
      ease: "none",
    });

    const move = (e: MouseEvent) => {
      setVisible(true);
      quickX.current?.(e.clientX);
      quickY.current?.(e.clientY);
      dotQuickX.current?.(e.clientX);
      dotQuickY.current?.(e.clientY);

      const target = (e.target as HTMLElement)?.closest("[data-cursor]");
      const next = (target?.getAttribute("data-cursor") as CursorState) || "default";
      setVariant((prev) => (prev !== next ? next : prev));
    };

    const handleMouseDown = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 0.88, duration: 0.12 });
      }
    };

    const handleMouseUp = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.25, ease: "back.out(2)" });
      }
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Precision Center Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[1000] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-150 ${
          visible ? "opacity-100" : "opacity-0"
        } ${variant !== "default" ? "opacity-0" : "opacity-100"}`}
      >
        <div className="h-1.5 w-1.5 rounded-full bg-pure-white shadow-[0_0_6px_#fff]" />
      </div>

      {/* Stateful Follower Pill */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[999] -translate-x-1/2 -translate-y-1/2 hidden md:block transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`flex items-center justify-center backdrop-blur-md transition-all duration-300 ${VARIANT_STYLES[variant]}`}
        >
          {VARIANT_LABEL[variant]}
        </div>
      </div>
    </>
  );
}
