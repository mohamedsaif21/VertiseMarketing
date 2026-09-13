"use client";

import { useState, KeyboardEvent } from "react";
import { ServiceDetail } from "./ServiceModal";

interface ServiceFlipCardProps {
  service: ServiceDetail;
  onOpenModal: (service: ServiceDetail) => void;
}

export default function ServiceFlipCard({ service, onOpenModal }: ServiceFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsFlipped((prev) => !prev);
    }
  };

  const isYellowAccent = service.accentColor === "#FBBC05";

  return (
    <div
      data-cursor="flip"
      className="group relative h-[430px] w-full perspective-1000 select-none cursor-pointer"
      tabIndex={0}
      role="region"
      aria-label={`${service.name} card. Press Enter to flip.`}
      onKeyDown={handleKeyDown}
    >
      {/* Outer Ambient Reactive Glow Aura */}
      <div
        className="pointer-events-none absolute -inset-1 rounded-[30px] opacity-0 blur-xl transition-all duration-500 group-hover:opacity-30"
        style={{ backgroundColor: service.accentColor }}
        aria-hidden="true"
      />

      <div
        className={`relative h-full w-full rounded-[28px] transition-transform duration-700 ease-out transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* ================= FRONT OF CARD ================= */}
        <div className="backface-hidden absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#1F0C45]/95 via-[#180936]/90 to-[#120529]/95 p-7 backdrop-blur-2xl shadow-2xl transition-all duration-500 group-hover:border-white/20 group-hover:-translate-y-1">
          {/* Top Architectural Neon Edge Stripe */}
          <div
            className="pointer-events-none absolute inset-x-8 top-0 h-[3px] rounded-full opacity-80 blur-[0.5px] transition-all duration-500 group-hover:inset-x-4 group-hover:opacity-100"
            style={{
              backgroundColor: service.accentColor,
              boxShadow: `0 0 14px ${service.accentColor}`,
            }}
            aria-hidden="true"
          />

          {/* Top Section */}
          <div>
            {/* Header: Category Badge, Spec Number & Flip Trigger */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: service.accentColor,
                    boxShadow: `0 0 8px ${service.accentColor}`,
                  }}
                />
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-pure-white/90">
                  {service.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold tracking-tight text-white/20 transition-colors group-hover:text-white/35">
                  {service.number || "01"}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(true);
                  }}
                  className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-[11px] font-semibold text-pure-white/80 transition-all hover:border-white/30 hover:bg-white/15 hover:text-pure-white"
                  aria-label={`Flip ${service.name} card for technical specs`}
                >
                  <span>Specs</span>
                  <span className="text-xs">↻</span>
                </button>
              </div>
            </div>

            {/* Icon Pod & Title */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.06] text-2xl shadow-inner backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                {service.icon || "✦"}
              </div>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight text-pure-white transition-colors group-hover:text-white">
              {service.name}
            </h3>

            <p className="mt-2 text-xs font-normal leading-relaxed text-soft-lavender/75 line-clamp-2">
              {service.tagline}
            </p>
          </div>

          {/* Bottom Section: Deliverables & Action Controls */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-pure-white/40">
                Core Deliverables
              </span>
              <span className="text-[10px] font-mono text-pure-white/40">
                {service.deliverables.length} Items
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {service.deliverables.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-pure-white/85 transition-colors hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: service.accentColor }}
                  />
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(true);
                }}
                className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-pure-white/60 transition-colors hover:text-pure-white"
              >
                <span>Tech Specs</span>
                <span className="transition-transform group-hover/btn:rotate-180">↻</span>
              </button>
              <button
                type="button"
                data-cursor="view"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(service);
                }}
                className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: service.accentColor,
                  color: isYellowAccent ? "#15072F" : "#FFFFFF",
                  boxShadow: `0 4px 14px ${service.accentColor}40`,
                }}
              >
                <span>Full View</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= BACK OF CARD (Blueprint Spec Sheet) ================= */}
        <div
          className="backface-hidden rotate-y-180 absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[28px] border bg-gradient-to-b from-[#1C093E] via-[#160833] to-[#100424] p-7 shadow-2xl backdrop-blur-2xl"
          style={{ borderColor: `${service.accentColor}50` }}
        >
          {/* Subtle Grid Matrix Texture on Back */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:18px_18px]"
            aria-hidden="true"
          />

          <div>
            {/* Back Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="font-mono text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: service.accentColor }}
                >
                  SPEC // #{service.number || "01"}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
                className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-pure-white transition-colors hover:bg-white/20"
                aria-label="Flip card back to front"
              >
                <span>Front</span>
                <span>↺</span>
              </button>
            </div>

            <h4 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-pure-white">
              {service.name} Brief
            </h4>

            <p className="mt-2 text-xs font-normal leading-relaxed text-pure-white/80 line-clamp-3">
              {service.description}
            </p>

            {/* What's Included / Technical Features */}
            <div className="mt-4 border-t border-white/10 pt-3">
              <p
                className="text-[10px] font-mono font-bold uppercase tracking-wider mb-2"
                style={{ color: service.accentColor }}
              >
                What Is Included:
              </p>
              <ul className="space-y-1.5 text-xs text-pure-white/80">
                {service.features.slice(0, 3).map((feat) => (
                  <li key={feat} className="flex items-center gap-2">
                    <span
                      className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full text-[9px] font-black"
                      style={{
                        backgroundColor: service.accentColor,
                        color: isYellowAccent ? "#15072F" : "#FFFFFF",
                      }}
                    >
                      ✓
                    </span>
                    <span className="line-clamp-1">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Back Footer */}
          <div className="border-t border-white/10 pt-4 flex items-center justify-between">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="text-xs font-medium text-pure-white/50 hover:text-pure-white transition-colors"
            >
              ↺ Overview
            </button>
            <button
              type="button"
              data-cursor="view"
              onClick={(e) => {
                e.stopPropagation();
                onOpenModal(service);
              }}
              className="rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: service.accentColor,
                color: isYellowAccent ? "#15072F" : "#FFFFFF",
                boxShadow: `0 4px 14px ${service.accentColor}40`,
              }}
            >
              Full Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
