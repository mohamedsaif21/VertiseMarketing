"use client";

import { useRef, useState, useEffect, ReactNode, MouseEvent, TouchEvent } from "react";

interface DragScrollCarouselProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  showArrows?: boolean;
}

export default function DragScrollCarousel({
  children,
  className = "",
  showArrows = true,
}: DragScrollCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const dragDistance = useRef(0);

  const checkScrollBounds = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    checkScrollBounds();
    el.addEventListener("scroll", checkScrollBounds, { passive: true });
    window.addEventListener("resize", checkScrollBounds);

    return () => {
      el.removeEventListener("scroll", checkScrollBounds);
      window.removeEventListener("resize", checkScrollBounds);
    };
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    const el = containerRef.current;
    if (!el) return;
    setIsDragging(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
    dragDistance.current = 0;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const el = containerRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplier for drag sensitivity
    dragDistance.current = Math.abs(x - startX);
    el.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollByAmount = (amount: number) => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Scroll Navigation Controls */}
      {showArrows && (
        <div className="mb-4 flex items-center justify-end gap-2 pr-2">
          <button
            type="button"
            onClick={() => scrollByAmount(-360)}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-white/5 text-cream transition-all hover:border-red hover:bg-red hover:text-white disabled:opacity-30 disabled:hover:border-cream/20 disabled:hover:bg-white/5"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount(360)}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-white/5 text-cream transition-all hover:border-red hover:bg-red hover:text-white disabled:opacity-30 disabled:hover:border-cream/20 disabled:hover:bg-white/5"
          >
            →
          </button>
        </div>
      )}

      {/* Draggable container */}
      <div
        ref={containerRef}
        data-cursor="drag"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`no-scrollbar flex overflow-x-auto select-none gap-6 pb-6 pt-2 transition-all ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        } ${className}`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {children}
      </div>
    </div>
  );
}
