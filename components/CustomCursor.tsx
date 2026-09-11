"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Cursor variants mapped to your logo's 4-color set instead of Crency's 6.
// Tag any element with data-cursor="drag" | "like" | "stats" | "cta" to trigger.
type CursorState = "default" | "drag" | "like" | "stats" | "cta";

const VARIANT_STYLES: Record<CursorState, string> = {
  default: "bg-gold text-ink",
  drag: "bg-red text-cream",
  like: "bg-green text-ink",
  stats: "bg-blue text-cream",
  cta: "bg-red text-cream",
};

const VARIANT_LABEL: Record<CursorState, string> = {
  default: "You",
  drag: "Drag",
  like: "♥",
  stats: "▤",
  cta: "→",
};

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<CursorState>("default");
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    quickX.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    quickY.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.35,
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
        className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold shadow-lg transition-colors duration-150 ${VARIANT_STYLES[variant]}`}
      >
        {VARIANT_LABEL[variant]}
      </div>
    </div>
  );
}
