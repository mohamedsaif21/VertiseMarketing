"use client";

import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    title: "Strategy First",
    subtitle: "Business Objectives > Decoration",
    desc: "We start by analyzing revenue targets, customer behavior, and conversion funnels before writing a single line of code or designing pixels.",
    badgeBg: "bg-brand-blue/10 text-brand-blue border border-brand-blue/25",
    color: "text-brand-blue",
    iconBg: "bg-brand-blue/10 text-brand-blue",
    border: "border-[#D3C5F6]/60 hover:border-brand-blue/60 hover:shadow-xl hover:shadow-brand-blue/10",
    icon: "🎯",
  },
  {
    title: "One Digital Partner",
    subtitle: "End-to-End Capabilities",
    desc: "Branding, web development, content creation, photography, and paid marketing unified under one cohesive team—eliminating agency friction.",
    badgeBg: "bg-brand-yellow/15 text-[#9E6E00] border border-brand-yellow/30",
    color: "text-[#B88200]",
    iconBg: "bg-brand-yellow/15 text-[#9E6E00]",
    border: "border-[#D3C5F6]/60 hover:border-brand-yellow/60 hover:shadow-xl hover:shadow-brand-yellow/10",
    icon: "⚡",
  },
  {
    title: "Built for Growth",
    subtitle: "Scalable Architecture",
    desc: "Every website, application, and campaign is architected to scale effortlessly as your business grows, with no artificial technical ceilings.",
    badgeBg: "bg-brand-green/10 text-brand-green border border-brand-green/25",
    color: "text-brand-green",
    iconBg: "bg-brand-green/10 text-brand-green",
    border: "border-[#D3C5F6]/60 hover:border-brand-green/60 hover:shadow-xl hover:shadow-brand-green/10",
    icon: "📈",
  },
  {
    title: "Human Support",
    subtitle: "Direct Expert Communication",
    desc: "No account manager gatekeepers or slow ticketing systems. Speak directly with the engineers, strategists, and designers building your project.",
    badgeBg: "bg-brand-red/10 text-brand-red border border-brand-red/25",
    color: "text-brand-red",
    iconBg: "bg-brand-red/10 text-brand-red",
    border: "border-[#D3C5F6]/60 hover:border-brand-red/60 hover:shadow-xl hover:shadow-brand-red/10",
    icon: "🤝",
  },
];

export default function WhyVertiseSection() {
  return (
    <section className="relative bg-light-lavender px-6 py-24 text-deep-navy md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="rounded-full border border-deep-navy/15 bg-deep-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-deep-navy/80 shadow-sm backdrop-blur">
              Agency Differentiation
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-deep-navy">Why Work </span>
              <span className="text-ghost-light hover:text-deep-navy transition-all duration-300">With </span>
              <span className="text-brand-red">Vertise?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-muted-text md:text-lg">
              Four core principles that ensure your project delivers commercial value, seamless execution, and measurable growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100} direction="up">
              <div
                data-cursor="stats"
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-pure-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${pillar.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.iconBg} text-2xl transition-transform duration-300 group-hover:scale-110`}>
                      {pillar.icon}
                    </span>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${pillar.badgeBg}`}>
                      PILLAR 0{i + 1}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight text-deep-navy">
                    {pillar.title}
                  </h3>

                  <p className={`mt-1.5 text-xs font-bold uppercase tracking-wider ${pillar.color}`}>
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-xs font-normal leading-relaxed text-muted-text">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-deep-navy/10 pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-muted-text">
                    Vertise Standard ✓
                  </span>
                  <span className="text-xs text-muted-text group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

