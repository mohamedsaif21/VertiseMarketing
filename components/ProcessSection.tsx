"use client";

import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    name: "Discover",
    title: "Understanding & Analysis",
    desc: "We analyze your business objectives, target audience, competitive landscape, and digital technical requirements.",
    color: "text-brand-blue",
    badgeColor: "bg-brand-blue/10 text-brand-blue border border-brand-blue/25",
    border: "border-[#D3C5F6]/60 hover:border-brand-blue/60 hover:shadow-xl hover:shadow-brand-blue/10",
    lineColor: "from-brand-blue to-brand-yellow",
    icon: "🔍",
  },
  {
    num: "02",
    name: "Design",
    title: "Strategy & Creative Architecture",
    desc: "We craft UX wireframes, visual design systems, interactive prototypes, and conversion paths aligned with your brand.",
    color: "text-[#B88200]",
    badgeColor: "bg-brand-yellow/15 text-[#9E6E00] border border-brand-yellow/30",
    border: "border-[#D3C5F6]/60 hover:border-brand-yellow/60 hover:shadow-xl hover:shadow-brand-yellow/10",
    lineColor: "from-brand-yellow to-brand-green",
    icon: "🎨",
  },
  {
    num: "03",
    name: "Build",
    title: "Engineering & Integration",
    desc: "Our team develops performant, responsive web platforms and applications with robust clean code, APIs, and CMS tooling.",
    color: "text-brand-green",
    badgeColor: "bg-brand-green/10 text-brand-green border border-brand-green/25",
    border: "border-[#D3C5F6]/60 hover:border-brand-green/60 hover:shadow-xl hover:shadow-brand-green/10",
    lineColor: "from-brand-green to-brand-red",
    icon: "⚡",
  },
  {
    num: "04",
    name: "Launch",
    title: "Deployment & Optimization",
    desc: "Rigorous quality assurance, speed optimization, technical SEO verification, and ongoing data-driven growth strategies.",
    color: "text-brand-red",
    badgeColor: "bg-brand-red/10 text-brand-red border border-brand-red/25",
    border: "border-[#D3C5F6]/60 hover:border-brand-red/60 hover:shadow-xl hover:shadow-brand-red/10",
    lineColor: "",
    icon: "🚀",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-light-lavender px-6 py-24 text-deep-navy md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="rounded-full border border-deep-navy/15 bg-deep-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-deep-navy/80 shadow-sm backdrop-blur">
              Structured 4-Step Process
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-deep-navy sm:text-5xl md:text-6xl">
              From Idea To Impact
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-text md:text-lg">
              What happens after you reach out? Here is our deliberate roadmap for taking your project from concept to market scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline Container with Desktop Horizontal Track */}
        <div className="relative">
          {/* Subtle connecting track line on desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 left-[10%] right-[10%] hidden h-0.5 bg-gradient-to-r from-brand-blue via-brand-yellow via-brand-green to-brand-red opacity-25 lg:block -z-0"
          />

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 z-10">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100} direction="up">
                <div
                  data-cursor="drag"
                  className={`group relative flex h-full flex-col justify-between rounded-2xl border bg-pure-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${step.border}`}
                >
                  <div>
                    {/* Header with Step Number Badge & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1 font-display text-sm font-extrabold ${step.badgeColor}`}>
                        <span>{step.num}</span>
                      </span>
                      <span className="text-xl transition-transform duration-300 group-hover:scale-110">
                        {step.icon}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-deep-navy">
                      {step.name}
                    </h3>

                    <p className={`mt-1 text-xs font-bold uppercase tracking-wider ${step.color}`}>
                      {step.title}
                    </p>

                    <p className="mt-3 text-xs font-normal leading-relaxed text-muted-text">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-deep-navy/10 pt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-muted-text group-hover:text-deep-navy">
                      Phase 0{i + 1} of 04
                    </span>
                    <span className="text-xs text-muted-text group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

