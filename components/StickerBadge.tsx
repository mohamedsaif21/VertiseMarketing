"use client";

import { useEffect, useState } from "react";

type StickerBadgeProps = {
  label: string;
  shape?: "starburst" | "pill" | "ribbon";
  rotation?: number;
  bg?: string;
  textColor?: string;
  className?: string;
  unverified?: boolean;
};

/**
 * Floating sticker badge for trust/stat callouts with micro-rotation & scroll parallax.
 */
export function StickerBadge({
  label,
  shape = "pill",
  rotation = -4,
  bg = "var(--gold)",
  textColor = "#0B0F2A",
  className = "",
  unverified = false,
}: StickerBadgeProps) {
  const [driftY, setDriftY] = useState(0);
  const [driftRot, setDriftRot] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sy = window.scrollY;
          setDriftY(Math.sin(sy * 0.003) * 8);
          setDriftRot(Math.cos(sy * 0.003) * 2);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shapeClass =
    shape === "starburst"
      ? "rounded-[38%_62%_63%_37%/41%_44%_56%_59%]"
      : shape === "ribbon"
      ? "rounded-md"
      : "rounded-2xl";

  const totalRot = rotation + driftRot;

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center px-4 py-3 text-center text-xs font-bold leading-tight shadow-xl transition-transform duration-300 ease-out will-change-transform ${shapeClass} ${className}`}
      style={{
        backgroundColor: bg,
        color: textColor,
        transform: `rotate(${totalRot}deg) translateY(${driftY}px)`,
      }}
    >
      {label}
      {unverified && (
        <span className="absolute -top-2 -right-2 rounded-full bg-red px-1.5 py-0.5 text-[9px] font-bold text-cream">
          VERIFY
        </span>
      )}
    </div>
  );
}

type ConnectorProps = {
  /** SVG path 'd' attribute for the dotted connector line */
  path: string;
  color?: string;
  className?: string;
};

/** Dotted connector line with circular end-nodes, linking two stickers/headline words. */
export function DottedConnector({ path, color = "var(--gold)", className = "" }: ConnectorProps) {
  return (
    <svg
      viewBox="0 0 300 120"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
    </svg>
  );
}
