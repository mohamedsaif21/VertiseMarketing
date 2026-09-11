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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative bg-[#E8ECFB] px-6 py-24 text-[#12142B] md:px-12">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="rounded-full bg-[#12142B]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#12142B]/70">
              Got Questions?
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-[#12142B] md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base text-[#12142B]/70">
              Everything you need to know about working with Vertise and starting your project.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={faq.q} delay={i * 60} direction="up">
                <div className="overflow-hidden rounded-2xl border border-[#12142B]/10 bg-white/90 shadow-sm backdrop-blur">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between p-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold text-[#12142B]">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#12142B]/5 text-sm font-bold text-[#12142B] transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-gold text-ink" : ""
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-[#12142B]/10 p-6 pt-2 text-sm leading-relaxed text-[#12142B]/80 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
