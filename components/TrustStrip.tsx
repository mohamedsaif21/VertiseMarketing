"use client";

import ScrollReveal from "./ScrollReveal";
import CounterNumber from "./CounterNumber";

const TRUST_STATS = [
  {
    number: "10k+",
    label: "Audience & Traffic Reached",
    subtext: "Delivering measurable impressions & engagement",
    accent: "border-[#D3C5F6]/60 hover:border-brand-red/60 hover:shadow-xl hover:shadow-brand-red/10",
    badgeBg: "bg-brand-red/10 text-brand-red border border-brand-red/25",
    color: "text-brand-red",
    icon: "📈",
  },
  {
    number: "15+",
    label: "Happy Business Clients",
    subtext: "Long-term relationships & measurable results",
    accent: "border-[#D3C5F6]/60 hover:border-brand-green/60 hover:shadow-xl hover:shadow-brand-green/10",
    badgeBg: "bg-brand-green/10 text-brand-green border border-brand-green/25",
    color: "text-brand-green",
    icon: "★",
  },
  {
    number: "4+",
    label: "Websites & Products Built",
    subtext: "Delivered across web, e-commerce & mobile",
    accent: "border-[#D3C5F6]/60 hover:border-brand-blue/60 hover:shadow-xl hover:shadow-brand-blue/10",
    badgeBg: "bg-brand-blue/10 text-brand-blue border border-brand-blue/25",
    color: "text-brand-blue",
    icon: "⚡",
  },
  {
    number: "24/7",
    label: "Dedicated Support",
    subtext: "Direct communication with core team",
    accent: "border-[#D3C5F6]/60 hover:border-brand-yellow/60 hover:shadow-xl hover:shadow-brand-yellow/10",
    badgeBg: "bg-brand-yellow/15 text-[#9E6E00] border border-brand-yellow/30",
    color: "text-[#B88200]",
    icon: "❖",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-light-lavender px-6 py-20 text-deep-navy md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="mb-14 flex flex-col items-center text-center">
        
            <h3 className="mt-4 font-display text-3xl font-extrabold uppercase tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-deep-navy">Numbers that speak </span>
              <span className="text-ghost-light hover:text-deep-navy transition-all duration-300">for our </span>
              <span className="text-brand-red">commitment</span>
            </h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100} direction="up">
              <div
                data-cursor="stats"
                className={`group relative flex flex-col justify-between rounded-2xl border bg-pure-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${stat.accent}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${stat.badgeBg}`}>
                      <span>{stat.icon}</span>
                      <span>METRIC 0{i + 1}</span>
                    </span>
                  </div>

                  <div className={`mt-6 font-display text-5xl font-extrabold tracking-tight ${stat.color} lg:text-6xl`}>
                    <CounterNumber value={stat.number} duration={2000} />
                  </div>

                  <h4 className="mt-3 font-display text-xl font-bold tracking-tight text-deep-navy">
                    {stat.label}
                  </h4>
                </div>

                <p className="mt-6 border-t border-deep-navy/10 pt-4 text-xs font-medium leading-relaxed text-muted-text">
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

