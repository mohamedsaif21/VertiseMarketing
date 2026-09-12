"use client";

import ScrollReveal from "./ScrollReveal";

const INTENTS = [
  {
    category: "Build",
    title: "Web & E-Commerce",
    desc: "Custom websites, web applications, and high-converting e-commerce platforms engineered for conversion.",
    tags: ["Custom Websites", "Web Apps", "E-Commerce Stores"],
    border: "border-[#D3C5F6]/60 hover:border-brand-red/60 hover:shadow-xl hover:shadow-brand-red/10",
    badgeBg: "bg-brand-red/10 text-brand-red border border-brand-red/25",
    accentColor: "text-brand-red",
    targetService: "#services",
    icon: "💻",
  },
  {
    category: "Brand",
    title: "Identity & Media",
    desc: "Brand identity, graphic design, commercial photography, and compelling brand storytelling.",
    tags: ["Brand Identity", "Photography", "Copywriting"],
    border: "border-[#D3C5F6]/60 hover:border-brand-yellow/60 hover:shadow-xl hover:shadow-brand-yellow/10",
    badgeBg: "bg-brand-yellow/15 text-[#9E6E00] border border-brand-yellow/30",
    accentColor: "text-[#B88200]",
    targetService: "#services",
    icon: "🎨",
  },
  {
    category: "Grow",
    title: "SEO & Advertising",
    desc: "Targeted SEO optimization, paid PPC & Meta advertising, and strategic digital marketing funnels.",
    tags: ["Search Engine Optimization", "Google & Meta Ads", "Email Marketing"],
    border: "border-[#D3C5F6]/60 hover:border-brand-blue/60 hover:shadow-xl hover:shadow-brand-blue/10",
    badgeBg: "bg-brand-blue/10 text-brand-blue border border-brand-blue/25",
    accentColor: "text-brand-blue",
    targetService: "#services",
    icon: "🚀",
  },
  {
    category: "Go Mobile",
    title: "Mobile Experiences",
    desc: "Native iOS & Android mobile apps, cross-platform experiences, and App Store Optimization.",
    tags: ["iOS & Android Apps", "ASO Optimization", "Mobile UI/UX"],
    border: "border-[#D3C5F6]/60 hover:border-brand-green/60 hover:shadow-xl hover:shadow-brand-green/10",
    badgeBg: "bg-brand-green/10 text-brand-green border border-brand-green/25",
    accentColor: "text-brand-green",
    targetService: "#services",
    icon: "📱",
  },
];

export default function IntentSection() {
  return (
    <section className="relative bg-light-lavender px-6 py-24 text-deep-navy md:px-12 md:py-32 overflow-hidden">
      {/* Subtle Ambient Bright Glow Orbs */}
      <div className="pointer-events-none absolute left-[5%] top-[15%] -z-10 h-[500px] w-[500px] rounded-full bg-white/40 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="rounded-full border border-deep-navy/15 bg-deep-navy/5 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-deep-navy/80 shadow-sm backdrop-blur">
              User-Intent Pathways
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-deep-navy sm:text-5xl md:text-6xl">
              What are you looking to build?
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-text md:text-lg">
              Select your primary goal to explore tailored digital marketing, design, and technical solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {INTENTS.map((intent, i) => (
            <ScrollReveal key={intent.category} delay={i * 100} direction="up">
              <a
                href={intent.targetService}
                data-cursor="view"
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-pure-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${intent.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold uppercase ${intent.badgeBg}`}>
                      <span>{intent.icon}</span>
                      <span>{intent.category}</span>
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-deep-navy/5 text-deep-navy/70 transition-all duration-300 group-hover:bg-deep-navy group-hover:text-pure-white group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-deep-navy">
                    {intent.title}
                  </h3>
                  <p className="mt-3 text-sm font-normal leading-relaxed text-muted-text">
                    {intent.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-deep-navy/10 pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {intent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg bg-deep-navy/5 px-2.5 py-1 text-[11px] font-semibold text-deep-navy/80 border border-deep-navy/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`mt-5 inline-flex items-center gap-1.5 text-xs font-bold ${intent.accentColor} transition-all group-hover:translate-x-1`}>
                    Explore solutions <span>→</span>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

