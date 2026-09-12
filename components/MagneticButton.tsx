"use client";

import { useRef, useEffect, ReactNode, ElementType, ComponentPropsWithoutRef } from "react";
import gsap from "gsap";

type MagneticButtonProps<T extends ElementType = "button"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  strength?: number;
} & ComponentPropsWithoutRef<T>;

export default function MagneticButton<T extends ElementType = "button">({
  as,
  children,
  className = "",
  strength = 0.35,
  ...props
}: MagneticButtonProps<T>) {
  const Component = as || "button";
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      gsap.to(el, {
        x: distanceX * strength,
        y: distanceY * strength,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength]);

  return (
    // @ts-expect-error dynamic element polymorphism ref
    <Component ref={ref} className={`inline-block ${className}`} {...props}>
      {children}
    </Component>
  );
}
