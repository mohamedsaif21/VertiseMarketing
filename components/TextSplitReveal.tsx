"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface TextSplitRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  delay?: number;
  highlightWord?: string;
  highlightClass?: string;
}

export default function TextSplitReveal({
  text,
  as: Component = "h1",
  className = "",
  delay = 0,
  highlightWord,
  highlightClass = "text-red",
}: TextSplitRevealProps) {
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
          const words = el.querySelectorAll(".split-word-inner");
          gsap.fromTo(
            words,
            { y: "115%", opacity: 0 },
            {
              y: "0%",
              opacity: 1,
              duration: 0.8,
              stagger: 0.045,
              delay: delay / 1000,
              ease: "power3.out",
            }
          );
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, hasAnimated]);

  const words = text.split(" ");

  return (
    // @ts-expect-error dynamic element polymorphism
    <Component ref={containerRef} className={className}>
      {words.map((word, i) => {
        const isHighlight =
          highlightWord &&
          word.toLowerCase().replace(/[^a-z0-9]/g, "") ===
            highlightWord.toLowerCase().replace(/[^a-z0-9]/g, "");

        return (
          <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0">
            <span
              className={`split-word-inner inline-block transition-opacity ${
                isHighlight ? highlightClass : ""
              } ${hasAnimated ? "opacity-100" : "opacity-0"}`}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
