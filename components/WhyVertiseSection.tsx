"use client";

import ScrollReveal from "./ScrollReveal";

const PILLARS = [
  {
    title: "Strategy First",
    subtitle: "Business Objectives > Decoration",
    desc: "We start by analyzing revenue targets, customer behavior, and conversion funnels before writing a single line of code or designing pixels.",
    badgeBg: "bg-gold text-ink",
    border: "border-gold/30 hover:border-gold",
    icon: "🎯",
  },
  {
    title: "One Digital Partner",
    subtitle: "End-to-End Capabilities",
    desc: "Branding, web development, content creation, photography, and paid marketing unified under one cohesive team—eliminating agency friction.",
    badgeBg: "bg-red text-cream",
    border: "border-red/30 hover:border-red",
    icon: "⚡",
  },
  {
    title: "Built for Growth",
    subtitle: "Scalable Architecture",
    desc: "Every website, application, and campaign is architected to scale effortlessly as your business grows, with no artificial technical ceilings.",
    badgeBg: "bg-blue text-cream",
    border: "border-blue/30 hover:border-blue",
    icon: "📈",
  },
  {
    title: "Human Support",
    subtitle: "Direct Expert Communication",
    desc: "No account manager gatekeepers or slow ticketing systems. Speak directly with the engineers, strategists, and designers building your project.",
    badgeBg: "bg-green text-ink",
    border: "border-green/30 hover:border-green",
    icon: "🤝",
  },
];

export default function WhyVertiseSection() {
  return (
    <section className="relative bg-[#E8ECFB] px-6 py-24 text-[#12142B] md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="rounded-full bg-[#12142B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#12142B]/70">
              Agency Differentiation
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-[#12142B] md:text-6xl">
              Why Work With Vertise?
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#12142B]/70">
              Four core principles that ensure your project delivers commercial value, seamless execution, and measurable growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 100} direction="up">
              <div
                data-cursor="stats"
                className={`group flex h-full flex-col justify-between rounded-2xl border bg-white/90 p-8 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${pillar.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl" aria-hidden="true">
                      {pillar.icon}
                    </span>
                    <span className={`rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${pillar.badgeBg}`}>
                      PILLAR {i + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-[#12142B]">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-blue">
                    {pillar.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-[#12142B]/75">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#12142B]/10 pt-4">
                  <span className="text-[11px] font-bold text-[#12142B]/50 group-hover:text-[#12142B]">
                    Vertise Standard ✓
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
