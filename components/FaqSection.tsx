"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const FAQS = [
  {
    q: "How long does a website project take?",
    a: "Standard business website projects typically take 2 to 4 weeks from discovery to final launch. Custom e-commerce platforms or complex web applications usually range from 4 to 8 weeks depending on custom feature scope.",
  },
  {
    q: "How much does a website cost?",
    a: "Our project investments are structured around business objectives and scope. Standard websites start from ₹25,000–₹50,000, while custom e-commerce and full digital transformation platforms range higher based on specific deliverables.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes! We provide ongoing monthly technical maintenance, security updates, server monitoring, content updates, and performance tuning to keep your digital platform running at peak performance.",
  },
  {
    q: "Can you manage SEO after building the website?",
    a: "Absolutely. All our websites are built with a strong technical SEO foundation out of the box. We also offer dedicated monthly SEO strategy, keyword optimization, local search management, and content optimization campaigns.",
  },
  {
    q: "Do you work with businesses outside Coimbatore?",
    a: "Yes. While our headquarters are in Coimbatore, Tamil Nadu, we partner with client businesses across India and internationally through clear remote collaboration tools, regular video check-ins, and milestone updates.",
  },
  {
    q: "Can I hire Vertise for only one service?",
    a: "Yes! Whether you need photography only, brand design, an SEO audit, or custom web development, you can engage Vertise for a standalone service or a complete end-to-end digital partner package.",
  },
  {
    q: "What information do you need to start a project?",
    a: "To kick off a project, we simply need a brief overview of your business goals, target audience, any existing brand assets or content, and your preferred timeline. We guide you through the rest during our Discovery call.",
  },
];

const BRAND_BORDER_CYCLE = [
  { border: "border-l-4 border-l-brand-blue", btn: "bg-brand-blue text-pure-white shadow-brand-blue/20" },
  { border: "border-l-4 border-l-brand-yellow", btn: "bg-brand-yellow text-deep-navy shadow-brand-yellow/20" },
  { border: "border-l-4 border-l-brand-green", btn: "bg-brand-green text-pure-white shadow-brand-green/20" },
  { border: "border-l-4 border-l-brand-red", btn: "bg-brand-red text-pure-white shadow-brand-red/20" },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative bg-light-lavender px-6 py-24 text-deep-navy md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="rounded-full border border-deep-navy/15 bg-deep-navy/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-deep-navy/80 shadow-sm backdrop-blur">
              Got Questions?
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-deep-navy">Frequently </span>
              <span className="text-ghost-light hover:text-deep-navy transition-all duration-300">Asked </span>
              <span className="text-brand-red">Questions</span>
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-muted-text md:text-lg">
              Everything you need to know about working with Vertise and starting your project.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const contentId = `faq-content-${i}`;
            const headerId = `faq-header-${i}`;
            const cycle = BRAND_BORDER_CYCLE[i % BRAND_BORDER_CYCLE.length];

            return (
              <ScrollReveal key={faq.q} delay={i * 50} direction="up">
                <div
                  className={`overflow-hidden rounded-2xl border bg-pure-white shadow-sm transition-all duration-300 hover:shadow-md ${
                    isOpen ? `${cycle.border} border-deep-navy/15` : "border-deep-navy/10 hover:border-deep-navy/20"
                  }`}
                >
                  <button
                    id={headerId}
                    type="button"
                    data-cursor="view"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red md:p-7"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                  >
                    <span className="font-display text-lg font-bold tracking-tight text-deep-navy md:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                        isOpen ? `rotate-180 ${cycle.btn} shadow-md` : "bg-deep-navy/5 text-deep-navy"
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-deep-navy/10 p-6 pt-4 text-sm font-normal leading-relaxed text-muted-text md:p-7 md:pt-4">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

