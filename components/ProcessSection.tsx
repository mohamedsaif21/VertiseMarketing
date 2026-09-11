"use client";

import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    num: "01",
    name: "Discover",
    title: "Understanding & Analysis",
    desc: "We analyze your business objectives, target audience, competitive landscape, and digital technical requirements.",
    badgeColor: "bg-gold text-ink",
    border: "border-gold/30",
  },
  {
    num: "02",
    name: "Strategy",
    title: "Digital Roadmap & Scope",
    desc: "We define precise user journeys, technology architecture, content wireframes, and project milestones.",
    badgeColor: "bg-red text-cream",
    border: "border-red/30",
  },
  {
    num: "03",
    name: "Create",
    title: "Design & Development",
    desc: "Our team crafts custom UI/UX, writes performant code, produces media assets, and builds your platform.",
    badgeColor: "bg-blue text-cream",
    border: "border-blue/30",
  },
  {
    num: "04",
    name: "Launch",
    title: "Testing & Deployment",
    desc: "Rigorous quality assurance, speed optimization, SEO checks, and seamless production deployment.",
    badgeColor: "bg-green text-ink",
    border: "border-green/30",
  },
  {
    num: "05",
    name: "Grow",
    title: "Optimization & Scale",
    desc: "Post-launch monitoring, analytics tracking, ongoing maintenance, and digital marketing strategy execution.",
    badgeColor: "bg-gold text-ink",
    border: "border-gold/30",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative bg-[#E8ECFB] px-6 py-24 text-[#12142B] md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="rounded-full bg-[#12142B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#12142B]/70">
              Clear 5-Step Process
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-[#12142B] md:text-6xl">
              From Idea To Impact
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#12142B]/70">
              What happens after you contact us? Here is our proven roadmap for taking your project from initial concept to market growth.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100} direction="up">
              <div
                data-cursor="drag"
                className={`group relative flex h-full flex-col justify-between rounded-2xl border bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${step.border}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-xl px-3 py-1 font-display text-sm font-extrabold ${step.badgeColor}`}>
                      {step.num}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#12142B]/40">
                      STEP
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold uppercase text-[#12142B]">
                    {step.name}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-blue">
                    {step.title}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#12142B]/70">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#12142B]/10 pt-3">
                  <span className="text-[11px] font-bold text-[#12142B]/50 group-hover:text-[#12142B]">
                    Phase {i + 1} of 5
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
