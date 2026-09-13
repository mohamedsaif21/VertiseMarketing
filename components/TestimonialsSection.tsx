"use client";

import ScrollReveal from "./ScrollReveal";
import DragScrollCarousel from "./DragScrollCarousel";

const CLIENT_LOGOS = [
  "Apex Retail Solutions",
  "Aura Apparel Co.",
  "Pulse Health Tech",
  "FitFlow Studio",
  "Zenith Industrial",
  "Nova SaaS Cloud",
  "Kovai Textiles",
  "Cheran Agro Mills",
];

const TESTIMONIALS = [
  {
    quote: "Vertise redesigned our complete web platform and brand identity. Our page load speed dropped under 1 second and online inquiries grew by over 140% in the first quarter.",
    author: "Rohan Sharma",
    role: "Founder & CEO",
    company: "Apex Retail Solutions",
    accent: "border-white/10 hover:border-brand-red/60 hover:shadow-brand-red/10",
    avatarBg: "bg-brand-red text-pure-white",
    rating: 5,
  },
  {
    quote: "Working with Vertise was seamless. Having photography, branding, and web development managed under one team saved us months of effort and produced outstanding results.",
    author: "Priya Nair",
    role: "Head of Marketing",
    company: "Aura Lifestyle Co.",
    accent: "border-white/10 hover:border-brand-blue/60 hover:shadow-brand-blue/10",
    avatarBg: "bg-brand-blue text-pure-white",
    rating: 5,
  },
  {
    quote: "Their SEO and performance advertising campaign delivered high-intent B2B inquiries within weeks. Highly strategic and transparent team.",
    author: "Karthik Subramanian",
    role: "Director of Operations",
    company: "Pulse Healthcare Tech",
    accent: "border-white/10 hover:border-brand-green/60 hover:shadow-brand-green/10",
    avatarBg: "bg-brand-green text-deep-navy font-bold",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-deep-navy overflow-hidden px-6 py-24 text-pure-white md:px-12">
      {/* Ambient Cosmic Aurora Glows */}
      <div className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/10 blur-[150px] animate-aurora-glow" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender/60">
              Client Trust & Proof
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-pure-white">Trusted By </span>
              <span className="text-ghost-dark hover:text-pure-white transition-all duration-300">Businesses</span>
            </h2>
            <p className="mt-4 max-w-xl text-base text-lavender/80">
              Partnering with ambitious companies to build distinctive digital experiences and measurable commercial growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Client Logos Drag-Scroll Carousel (Animation #7) */}
        <ScrollReveal direction="up">
          <div
            data-cursor="drag"
            className="mb-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur cursor-grab active:cursor-grabbing"
          >
            <p className="text-center text-xs font-bold uppercase tracking-widest text-lavender/50 mb-4">
              Brands & Companies We've Helped Scale • Drag to explore
            </p>
            <DragScrollCarousel showArrows={false} className="py-2">
              {CLIENT_LOGOS.map((logo) => (
                <div
                  key={logo}
                  className="whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-display text-base font-bold uppercase tracking-tight text-pure-white/80 transition-all hover:border-brand-blue/40 hover:text-pure-white shrink-0"
                >
                  {logo}
                </div>
              ))}
            </DragScrollCarousel>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 120} direction="up">
              <div
                data-cursor="view"
                className={`flex h-full flex-col justify-between rounded-2xl border bg-dark-navy/80 p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-dark-navy ${t.accent}`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 text-brand-yellow text-sm mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>

                  <p className="text-sm italic leading-relaxed text-pure-white/90">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4 flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full font-display font-bold shadow-md ${t.avatarBg}`}>
                    {t.author[0]}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-pure-white">
                      {t.author}
                    </h3>
                    <p className="text-xs text-lavender/70">
                      {t.role} · <span className="text-pure-white/90 font-semibold">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
