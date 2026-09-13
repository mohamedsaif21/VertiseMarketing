"use client";

import { useEffect, useState } from "react";

export default function HeroFloatingDecorations() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleScroll = () => {
      setOffsetY(window.scrollY * 0.18);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-10 overflow-hidden hidden lg:block"
      style={{ transform: `translateY(${offsetY}px)` }}
    >
      {/* 1. Spinning Starburst Review Badge (Top Left) */}
      <div
        data-cursor="stats"
        className="pointer-events-auto absolute left-[6%] top-[18%] space-float cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        <div className="relative flex items-center justify-center">
          <div className="rotate-infinite h-28 w-28 text-lavender/40">
            <svg viewBox="0 0 136 134" fill="currentColor" className="h-full w-full drop-shadow-xl">
              <path d="M129.93 50.646L116.232 48.9802C111.751 48.4343 109.428 43.3722 111.948 39.6444L119.654 28.2507C123.099 23.1553 117.565 16.8 112.007 19.4694L99.5786 25.437C95.5135 27.3904 90.808 24.3818 90.9043 19.8894L91.1954 6.158C91.3263 0.0180817 83.219 -2.35089 79.9925 2.88452L72.78 14.5926C70.4202 18.4238 64.8285 18.4238 62.4676 14.5926L55.254 2.88452C52.0286 -2.35089 43.9213 0.0180817 44.0522 6.158L44.3443 19.8894C44.4396 24.3818 39.7351 27.3904 35.669 25.437L23.2402 19.4694C17.6821 16.8 12.1488 23.1553 15.5938 28.2507L23.2987 39.6444C25.8197 43.3722 23.4967 48.4343 19.0151 48.9802L5.31715 50.646C-0.807961 51.3912 -2.01005 59.7149 3.65522 62.1473L16.3263 67.5873C20.4725 69.3662 21.2689 74.8751 17.7946 77.7448L7.176 86.5175C2.42825 90.4403 5.93821 98.0899 12.0265 97.0874L25.6412 94.8455C30.0957 94.1111 33.7582 98.3171 32.3938 102.601L28.2271 115.693C26.3639 121.548 33.4726 126.095 38.0494 121.975L48.2849 112.765C51.6337 109.751 56.9992 111.318 58.1797 115.656L61.7859 128.912C63.3981 134.84 71.8495 134.84 73.4616 128.912L77.0679 115.656C78.2483 111.318 83.6139 109.751 86.9626 112.765L97.1982 121.975C101.776 126.095 108.885 121.548 107.02 115.693L102.854 102.601C101.49 98.3171 105.152 94.1111 109.606 94.8455L123.221 97.0874C129.309 98.0899 132.82 90.4403 128.072 86.5175L117.453 77.7448C113.98 74.8751 114.775 69.3662 118.921 67.5873L131.592 62.1473C137.259 59.7149 136.056 51.3912 129.93 50.646Z" />
            </svg>
          </div>
          <div className="absolute text-center">
            <span className="block font-display text-sm font-extrabold text-brand-yellow">4.9/5</span>
          </div>
        </div>
      </div>

      {/* 2. Swaying Pill Capsule (Top Right) */}
      <div
        data-cursor="view"
        className="pointer-events-auto absolute right-[8%] top-[22%] sway-slow cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <div className="flex items-center gap-2.5 rounded-full border border-lavender/30 bg-midnight/80 px-5 py-2.5 shadow-2xl backdrop-blur-xl">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-midnight shadow-md shadow-brand-green/30">
            ⚡
          </span>
          <span className="text-xs font-extrabold uppercase tracking-wider text-lavender">
            1h response time
          </span>
        </div>
      </div>

      {/* 3. Decatop Audit Badge (Bottom Left) */}
      <div
        data-cursor="cta"
        className="pointer-events-auto absolute left-[8%] bottom-[20%] space-float cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{ animationDelay: "-2.5s" }}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-brand-red/40 bg-brand-red/10 px-4 py-3 shadow-2xl backdrop-blur-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-brand-red text-sm text-pure-white shadow-md shadow-brand-red/40">
            ✦
          </span>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-red">FREE</span>
            <span className="block text-xs font-bold text-pure-white">Website Audit</span>
          </div>
        </div>
      </div>

      {/* 4. Experience & Reach Pill (Bottom Right) */}
      <div
        data-cursor="stats"
        className="pointer-events-auto absolute right-[6%] bottom-[24%] space-float cursor-pointer transition-transform duration-300 hover:scale-105"
        style={{ animationDelay: "-4s" }}
      >
        <div className="flex items-center gap-3 rounded-full border border-brand-blue/40 bg-midnight/80 px-5 py-3 shadow-2xl backdrop-blur-xl">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-pure-white shadow-md shadow-brand-blue/30">
            10k+
          </span>
          <div className="text-left">
            <span className="block text-xs font-extrabold text-pure-white">Audience Reached</span>
            <span className="block text-[9px] font-bold uppercase tracking-wider text-brand-blue">Verified Scale</span>
          </div>
        </div>
      </div>
    </div>
  );
}
