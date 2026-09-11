"use client";

import ScrollReveal from "./ScrollReveal";

export default function FinalCta() {
  return (
    <section className="relative bg-ink px-6 py-20 text-cream md:px-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-gold/30 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-10 text-center shadow-2xl backdrop-blur md:p-16">
        <ScrollReveal direction="up">
          <span className="rounded-full bg-gold px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-ink">
            Ready to Build?
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cream md:text-6xl">
            Have A Project In Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/75 md:text-lg">
            Tell us what you're building, what you're trying to achieve, and where you need help. We'll respond within 24 hours with ideas and a clear plan.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="#contact"
              data-cursor="cta"
              className="rounded-full bg-red px-10 py-5 text-base font-bold text-cream transition-transform duration-300 hover:scale-105 shadow-xl hover:shadow-red/20"
            >
              Start a project →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
