"use client";

import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import ThreeTierHeadline from "./ThreeTierHeadline";

export default function ContactForm() {
  return (
    <section id="contact" className="relative bg-deep-navy overflow-hidden px-6 py-24 text-pure-white md:px-12 md:py-32">
      {/* Ambient Cosmic Aurora Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue/15 blur-[160px] animate-aurora-glow" />

      <div className="mx-auto max-w-4xl text-center">
        <ScrollReveal direction="up">
          <div className="mb-10 flex flex-col items-center text-center">
            <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-green shadow-sm backdrop-blur">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-green animate-pulse" />
              We respond within one business day
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up">
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-dark-navy/95 via-dark-navy/85 to-deep-navy p-8 md:p-14 shadow-2xl backdrop-blur-2xl">
            {/* Headline with Three-Tier Typography Treatment & Description */}
            <ThreeTierHeadline
              as="h2"
              tier1="Ready to build,"
              tier2="automate,"
              tier3="and scale?"
              theme="dark"
              className="text-3xl sm:text-5xl"
            />

            <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-lavender/90 sm:text-lg">
              Book a free consultation, request a proposal, or schedule a 1Grow demo. We respond within one business day.
            </p>

            {/* Centered Primary Action Buttons */}
            <div className="mt-8 flex flex-col justify-center items-center gap-4 sm:flex-row">
              <MagneticButton
                as="a"
                href="tel:+919043569743"
                data-cursor="cta"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-brand-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-pure-white shadow-xl shadow-brand-red/30 transition-all duration-300 hover:scale-105 hover:bg-brand-red/90"
              >
                <span>📞</span>
                <span>Book a Consultation</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </MagneticButton>

              <MagneticButton
                as="a"
                href="https://wa.me/919043569743?text=Hello%20Vertise%20Team%2C%20I%20am%20ready%20to%20build%20and%20would%20like%20to%20schedule%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="cta"
                className="group flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-pure-white backdrop-blur-xl transition-all duration-300 hover:border-brand-green hover:bg-white/10 hover:text-brand-green"
              >
                <span>⚡</span>
                <span>Schedule a Demo</span>
                <span className="text-lavender transition-transform group-hover:translate-x-1">↘</span>
              </MagneticButton>
            </div>

            {/* Centered Direct Contact Coordinates */}
            <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 text-left">
              {/* Phone */}
              <a
                href="tel:+919043569743"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-brand-red hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 border border-brand-red/30 text-base text-brand-red group-hover:bg-brand-red group-hover:text-pure-white transition-all">
                    📞
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lavender/60">
                    Direct Phone / Call
                  </span>
                </div>
                <span className="mt-4 font-display text-base font-bold text-pure-white group-hover:text-brand-red transition-colors">
                  +91 9043569743
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919043569743?text=Hello%20Vertise%20Team%2C%20I%20am%20ready%20to%20build%20and%20would%20like%20to%20schedule%20a%20free%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-brand-green hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 border border-brand-green/30 text-base text-brand-green group-hover:bg-brand-green group-hover:text-deep-navy transition-all">
                    💬
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lavender/60">
                    Instant WhatsApp Chat
                  </span>
                </div>
                <span className="mt-4 font-display text-sm font-bold text-pure-white group-hover:text-brand-green transition-colors">
                  +91 9043569743 <span className="text-xs text-brand-green">(Chat Now)</span>
                </span>
              </a>

              {/* Location */}
              <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-base text-brand-blue">
                    📍
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lavender/60">
                    Headquarters
                  </span>
                </div>
                <div className="mt-4">
                  <span className="block text-sm font-bold text-pure-white">
                    Coimbatore, Tamil Nadu
                  </span>
                  <span className="block text-xs text-lavender/70">
                    Cheran Ma Nagar, India
                  </span>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:vertice.digitalmanagement@gmail.com"
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-brand-yellow hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/15 border border-brand-yellow/30 text-base text-brand-yellow group-hover:bg-brand-yellow group-hover:text-deep-navy transition-all">
                    ✉️
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lavender/60">
                    Email Address
                  </span>
                </div>
                <span className="mt-4 text-xs font-bold text-pure-white group-hover:text-brand-yellow transition-colors break-all">
                  vertice.digitalmanagement@gmail.com
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}


