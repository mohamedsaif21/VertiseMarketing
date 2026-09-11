"use client";

import ScrollReveal from "./ScrollReveal";

const TRUST_STATS = [
  {
    number: "500+",
    label: "Websites & Products Built",
    subtext: "Delivered across web, e-commerce & mobile",
    accent: "border-gold/30 hover:border-gold",
    badgeBg: "bg-gold text-ink",
  },
  {
    number: "9+",
    label: "Years of Experience",
    subtext: "Deep expertise in digital strategy & growth",
    accent: "border-blue/30 hover:border-blue",
    badgeBg: "bg-blue text-cream",
  },
  {
    number: "100+",
    label: "Happy Business Clients",
    subtext: "Long-term relationships & measurable results",
    accent: "border-red/30 hover:border-red",
    badgeBg: "bg-red text-cream",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
    subtext: "Direct communication with core team",
    accent: "border-green/30 hover:border-green",
    badgeBg: "bg-green text-ink",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#E8ECFB] px-6 py-16 text-[#12142B] md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="mb-12 flex flex-col items-center text-center">
            <span className="rounded-full bg-[#12142B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#12142B]/70">
              Proven Track Record • Verified Results
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
              Numbers that speak for our commitment
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 120} direction="up">
              <div
                data-cursor="stats"
                className={`group relative flex flex-col justify-between rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${stat.accent}`}
              >
                <div>
                  <span className={`inline-block rounded-xl px-3 py-1 text-xs font-bold ${stat.badgeBg}`}>
                    STAT {i + 1}
                  </span>
                  <div className="mt-4 font-display text-4xl font-extrabold tracking-tight text-[#12142B] md:text-5xl">
                    {stat.number}
                  </div>
                  <h4 className="mt-2 font-display text-lg font-bold text-[#12142B]">
                    {stat.label}
                  </h4>
                </div>
                <p className="mt-4 text-xs font-medium leading-relaxed text-[#12142B]/70">
                  {stat.subtext}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
