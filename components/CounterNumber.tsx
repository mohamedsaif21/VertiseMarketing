"use client";

import { useEffect, useRef, useState } from "react";

interface CounterNumberProps {
  value: string;
  duration?: number; // ms
  className?: string;
}

export default function CounterNumber({
  value,
  duration = 1800,
  className = "",
}: CounterNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated) return;

    // Check reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    // Parse numeric portion and prefix/suffix
    // e.g. "500+" -> num: 500, suffix: "+"
    // e.g. "24/7" -> num: 24, suffix: "/7"
    // e.g. "9+" -> num: 9, suffix: "+"
    const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1];
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();

          const startTime = performance.now();

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * targetNum);

            setDisplayValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(update);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(update);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {hasAnimated ? displayValue : "0"}
    </span>
  );
}
