"use client";

import ScrollReveal from "./ScrollReveal";

const CLIENT_LOGOS = [
  "Apex Retail",
  "Aura Apparel",
  "Pulse Tech",
  "FitFlow",
  "Zenith Group",
  "Nova SaaS",
];

const TESTIMONIALS = [
  {
    quote: "Vertise redesigned our complete web platform and brand identity. Our page load speed dropped under 1 second and online inquiries grew by over 140% in the first quarter.",
    author: "Rohan Sharma",
    role: "Founder & CEO",
    company: "Apex Retail Solutions",
    accent: "border-gold/30",
    rating: 5,
  },
  {
    quote: "Working with Vertise was seamless. Having photography, branding, and web development managed under one team saved us months of effort and produced outstanding results.",
    author: "Priya Nair",
    role: "Head of Marketing",
    company: "Aura Lifestyle Co.",
    accent: "border-red/30",
    rating: 5,
  },
  {
    quote: "Their SEO and performance advertising campaign delivered high-intent B2B inquiries within weeks. Highly strategic and transparent team.",
    author: "Karthik Subramanian",
    role: "Director of Operations",
    company: "Pulse Healthcare Tech",
    accent: "border-blue/30",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative bg-ink px-6 py-24 text-cream md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Client Trust & Proof
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cream md:text-6xl">
              Trusted By Businesses
            </h2>
            <p className="mt-4 max-w-xl text-base text-cream/70">
              Partnering with ambitious companies to build distinctive digital experiences and measurable commercial growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Client Logos Ticker / Grid */}
        <ScrollReveal direction="up">
          <div className="mb-16 rounded-2xl border border-cream/10 bg-white/[0.02] p-6 backdrop-blur">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-cream/40 mb-6">
              Brands & Companies We've Helped Scale
            </p>
            <div className="flex flex-wrap items-center justify-around gap-6 md:gap-12">
              {CLIENT_LOGOS.map((logo) => (
                <div
                  key={logo}
                  className="font-display text-lg font-extrabold uppercase tracking-tight text-cream/60 transition-colors hover:text-gold"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.author} delay={i * 120} direction="up">
              <div
                data-cursor="drag"
                className={`flex h-full flex-col justify-between rounded-2xl border bg-white/[0.03] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] ${t.accent}`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex gap-1 text-gold text-sm mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>

                  <p className="text-sm italic leading-relaxed text-cream/90">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-cream/10 pt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold font-display font-bold text-ink">
                    {t.author[0]}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-cream">
                      {t.author}
                    </h3>
                    <p className="text-xs text-cream/60">
                      {t.role} · <span className="text-gold">{t.company}</span>
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
