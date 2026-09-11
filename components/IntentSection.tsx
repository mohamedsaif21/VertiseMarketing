"use client";

import ScrollReveal from "./ScrollReveal";

const INTENTS = [
  {
    category: "Build",
    title: "Web & E-Commerce",
    desc: "Custom websites, web applications, and high-converting e-commerce platforms.",
    tags: ["Custom Websites", "Web Apps", "E-Commerce Stores"],
    color: "gold",
    border: "border-gold/30 hover:border-gold",
    badgeBg: "bg-gold text-ink",
    targetService: "#services",
  },
  {
    category: "Brand",
    title: "Identity & Media",
    desc: "Brand identity, graphic design, commercial photography, and brand copy.",
    tags: ["Brand Identity", "Photography", "Copywriting"],
    color: "red",
    border: "border-red/30 hover:border-red",
    badgeBg: "bg-red text-cream",
    targetService: "#services",
  },
  {
    category: "Grow",
    title: "SEO & Advertising",
    desc: "SEO optimization, paid advertising campaigns, and strategic digital growth.",
    tags: ["Search Engine Optimization", "Google & Meta Ads", "Email Marketing"],
    color: "blue",
    border: "border-blue/30 hover:border-blue",
    badgeBg: "bg-blue text-cream",
    targetService: "#services",
  },
  {
    category: "Go Mobile",
    title: "Mobile Experiences",
    desc: "Native iOS & Android mobile apps, cross-platform experiences, and App Store Optimization.",
    tags: ["iOS & Android Apps", "ASO Optimization", "Mobile UI/UX"],
    color: "green",
    border: "border-green/30 hover:border-green",
    badgeBg: "bg-green text-ink",
    targetService: "#services",
  },
];

export default function IntentSection() {
  return (
    <section className="relative bg-ink px-6 py-24 text-cream md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              User-Intent Pathways
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight text-cream md:text-5xl">
              What are you looking to build?
            </h2>
            <p className="mt-4 max-w-2xl text-base text-cream/70">
              Select your primary goal to explore tailored digital marketing, design, and technical solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {INTENTS.map((intent, i) => (
            <ScrollReveal key={intent.category} delay={i * 100} direction="up">
              <a
                href={intent.targetService}
                data-cursor="view"
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-white/[0.03] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.06] ${intent.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase ${intent.badgeBg}`}>
                      {intent.category}
                    </span>
                    <span className="text-cream/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cream">
                      →
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-tight text-cream">
                    {intent.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {intent.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-cream/10 pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {intent.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-cream/10 px-2 py-0.5 text-[11px] font-medium text-cream/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold transition-colors group-hover:text-white">
                    Explore solutions →
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
