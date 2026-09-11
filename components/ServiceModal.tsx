"use client";

export type ServiceDetail = {
  id: string;
  name: string;
  category: "BRAND" | "DIGITAL" | "GROWTH";
  tagline: string;
  description: string;
  deliverables: string[];
  features: string[];
  accentColor: string;
};

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/20 bg-ink p-8 text-cream shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-red hover:text-white"
          aria-label="Close details modal"
        >
          ✕
        </button>

        <span
          className="inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
          style={{ backgroundColor: service.accentColor, color: "#0A0A0A" }}
        >
          {service.category}
        </span>

        <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-cream md:text-4xl">
          {service.name}
        </h3>

        <p className="mt-2 text-base font-semibold text-gold">
          {service.tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-cream/80">
          {service.description}
        </p>

        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-cream/50">
            Key Deliverables & Capabilities
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {service.deliverables.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-cream/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-cream"
              >
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xs font-bold uppercase tracking-widest text-cream/50">
            What You Get With Vertise
          </h4>
          <ul className="mt-2 grid grid-cols-1 gap-2 text-xs text-cream/70 md:grid-cols-2">
            {service.features.map((feat) => (
              <li key={feat} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {feat}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
          <span className="text-xs text-cream/60">
            Ready to scale with {service.name.toLowerCase()}?
          </span>
          <a
            href="#contact"
            onClick={onClose}
            data-cursor="cta"
            className="rounded-full bg-gold px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
          >
            Start a project for this →
          </a>
        </div>
      </div>
    </div>
  );
}
