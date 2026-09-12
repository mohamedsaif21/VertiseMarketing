"use client";

import { useEffect } from "react";

export type ServiceDetail = {
  id: string;
  name: string;
  category: "BRAND" | "DIGITAL" | "GROWTH";
  tagline: string;
  description: string;
  deliverables: string[];
  features: string[];
  accentColor: string;
  number?: string;
  icon?: string;
};

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-lg transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-dark-navy p-8 text-pure-white shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-pure-white transition-colors hover:bg-brand-red hover:text-pure-white"
          aria-label="Close details modal"
        >
          ✕
        </button>

        <div className="flex items-center gap-3">
          <span
            className="inline-block rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow-sm"
            style={{ backgroundColor: service.accentColor, color: "#15072F" }}
          >
            {service.category}
          </span>
          {service.number && (
            <span className="font-mono text-xs font-semibold tracking-wider text-pure-white/40">
              SPEC #{service.number}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-center gap-3">
          {service.icon && (
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-2xl shadow-inner">
              {service.icon}
            </span>
          )}
          <h3
            id="modal-service-title"
            className="font-display text-3xl font-extrabold uppercase tracking-tight text-pure-white md:text-4xl"
          >
            {service.name}
          </h3>
        </div>

        <p className="mt-2 text-base font-bold text-soft-lavender">
          {service.tagline}
        </p>

        <p className="mt-4 text-sm font-normal leading-relaxed text-pure-white/80">
          {service.description}
        </p>

        <div className="mt-6 border-t border-white/10 pt-5">
          <h4 className="text-xs font-bold uppercase tracking-widest text-pure-white/50">
            Key Deliverables & Capabilities
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {service.deliverables.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-pure-white"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-pure-white/50">
            What You Get With Vertise
          </h4>
          <ul className="mt-3 grid grid-cols-1 gap-2.5 text-xs font-medium text-pure-white/75 md:grid-cols-2">
            {service.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
          <span className="text-xs font-medium text-pure-white/60">
            Ready to get started with {service.name.toLowerCase()}?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            data-cursor="cta"
            className="rounded-full bg-brand-red px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-pure-white transition-transform duration-200 hover:scale-105 shadow-md shadow-brand-red/25"
          >
            Start a project for this →
          </a>
        </div>
      </div>
    </div>
  );
}

