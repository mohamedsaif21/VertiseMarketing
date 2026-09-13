"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface ThreeTierHeadlineProps {
  as?: "h1" | "h2" | "h3" | "div";
  tier1: string; // Solid headline
  tier2: string; // Outlined / ghost headline
  tier3: string; // Accent headline
  theme?: "dark" | "light";
  className?: string;
  align?: "center" | "left" | "right";
  delay?: number;
}

export default function ThreeTierHeadline({
  as: Component = "h1",
  tier1,
  tier2,
  tier3,
  theme = "dark",
  className = "",
  align = "center",
  delay = 0,
}: ThreeTierHeadlineProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || hasAnimated) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const lines = el.querySelectorAll(".tier-line-inner");
          gsap.fromTo(
            lines,
            { y: "115%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.9,
              stagger: 0.12,
              delay: delay / 1000,
              ease: "power4.out",
            }
          );
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  const isDark = theme === "dark";

  return (
    // @ts-expect-error polymorphic heading ref
    <Component
      ref={containerRef}
      className={`flex flex-col font-display uppercase tracking-tight leading-[0.92] select-none ${alignClass} ${className}`}
    >
      {/* Tier 1: Solid Headline */}
      <span className="block overflow-hidden pb-1">
        <span
          className={`tier-line-inner block font-extrabold transition-opacity duration-500 ${
            isDark ? "text-pure-white" : "text-deep-navy"
          } ${hasAnimated ? "opacity-100" : "opacity-0"}`}
        >
          {tier1}
        </span>
      </span>

      {/* Tier 2: Outlined / Ghost Headline */}
      <span className="block overflow-hidden py-1">
        <span
          className={`tier-line-inner block font-extrabold cursor-default transition-all duration-300 ${
            isDark ? "text-ghost-dark" : "text-ghost-light"
          } ${hasAnimated ? "opacity-100" : "opacity-0"}`}
        >
          {tier2}
        </span>
      </span>

      {/* Tier 3: Accent Headline */}
      <span className="block overflow-hidden pt-1">
        <span
          className={`tier-line-inner block font-extrabold transition-opacity duration-500 ${
            isDark
              ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-yellow via-brand-green to-brand-blue animate-gradient-flow"
              : "text-brand-red"
          } ${hasAnimated ? "opacity-100" : "opacity-0"}`}
        >
          {tier3}
        </span>
      </span>
    </Component>
  );
}
