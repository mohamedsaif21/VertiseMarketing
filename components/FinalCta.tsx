"use client";

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import ThreeTierHeadline from "./ThreeTierHeadline";

export default function FinalCta() {
  return (
    <section className="relative bg-deep-navy overflow-hidden px-6 py-20 text-pure-white md:px-12 md:py-28">
      {/* 4-Color Ambient Cosmic Aurora Glows */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -z-10 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red/15 blur-[120px] animate-aurora-glow" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 -z-10 h-[380px] w-[380px] rounded-full bg-brand-blue/15 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/2 bottom-10 -z-10 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-brand-green/10 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/3 bottom-1/4 -z-10 h-[280px] w-[280px] rounded-full bg-brand-yellow/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-dark-navy/95 via-dark-navy/80 to-deep-navy p-10 text-center shadow-2xl backdrop-blur-2xl md:p-16">
        <ScrollReveal direction="up">
          <span className="inline-block rounded-full bg-brand-red/15 border border-brand-red/30 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-pure-white shadow-md shadow-brand-red/20">
            Ready to Build?
          </span>
          <ThreeTierHeadline
            as="h2"
            tier1="Have A"
            tier2="Project"
            tier3="In Mind?"
            theme="dark"
            className="mt-6 text-4xl sm:text-5xl md:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-lavender/80 md:text-lg">
            Tell us what you're building, what you're trying to achieve, and where you need help. We'll respond within 24 hours with ideas and a clear plan.
          </p>

          <div className="mt-10 flex justify-center">
            <MagneticButton
              as="a"
              href="#contact"
              data-cursor="cta"
              className="group relative overflow-hidden rounded-full bg-brand-red px-10 py-5 text-base font-bold text-pure-white transition-all duration-300 hover:scale-105 hover:bg-brand-red/90 shadow-xl shadow-brand-red/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start a project <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

