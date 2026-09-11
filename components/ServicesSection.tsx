"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ServiceModal, { ServiceDetail } from "./ServiceModal";

const SERVICES_DATA: ServiceDetail[] = [
  // BRAND
  {
    id: "graphic-design",
    name: "Graphic Design",
    category: "BRAND",
    tagline: "Visual identity, stationery, and marketing collateral.",
    description: "Distinctive logo design, brand guidelines, stationery, marketing collateral, product packaging, and UI/UX design crafted to capture attention.",
    deliverables: ["Logo & Brand Guidelines", "Business Stationery", "Marketing Collateral", "Packaging Design", "Web UI/UX"],
    features: ["Vector source files included", "Multi-platform brand assets", "Print-ready packaging files", "User-tested UI components"],
    accentColor: "#F4B400",
  },
  {
    id: "photography",
    name: "Photography & Media",
    category: "BRAND",
    tagline: "Product, corporate, and event visual storytelling.",
    description: "High-impact product photography, corporate headshots, event coverage, drone photo/video shoots, and post-production storytelling.",
    deliverables: ["Product Photography", "Corporate & Team Shoots", "Drone Photo/Video", "Event Coverage", "Post-Production Edit"],
    features: ["4K high-resolution delivery", "Commercial usage licensing", "Color-graded retouched imagery", "Social-ready media formats"],
    accentColor: "#F4B400",
  },
  {
    id: "content-writing",
    name: "Content Writing",
    category: "BRAND",
    tagline: "Persuasive copywriting and brand storytelling.",
    description: "Engaging website copy, SEO-optimized articles, compelling social media content, email newsletters, and authentic brand messaging.",
    deliverables: ["Website Copywriting", "SEO Blog Posts", "Social Media Copy", "Email Newsletters", "Brand Voice Playbook"],
    features: ["Keyword-optimized writing", "Clear tone-of-voice alignment", "Conversion-focused CTAs", "Plagiarism-free original copy"],
    accentColor: "#F4B400",
  },

  // DIGITAL
  {
    id: "web-development",
    name: "Web Development",
    category: "DIGITAL",
    tagline: "Responsive, ultra-fast websites and web applications.",
    description: "Modern websites, web applications, custom CMS integrations, performance optimizations, and cloud database solutions tailored for conversion.",
    deliverables: ["Responsive Websites", "Custom Web Apps", "CMS Integration", "Performance Optimization", "Database Architecture"],
    features: ["Sub-second page load times", "Mobile-first responsive design", "SEO structural foundation", "Accessibility & WCAG compliance"],
    accentColor: "#E8392B",
  },
  {
    id: "ecommerce-solutions",
    name: "E-Commerce Solutions",
    category: "DIGITAL",
    tagline: "High-converting online stores built for growth.",
    description: "Full-scale online stores, seamless payment gateway integrations, inventory management systems, cart optimization, and order tracking.",
    deliverables: ["Online Storefronts", "Payment Gateways", "Inventory Management", "Cart & Checkout UX", "Order Analytics"],
    features: ["Secure payment processing", "Automated invoice generation", "Multi-currency support", "Abandoned cart recovery"],
    accentColor: "#E8392B",
  },
  {
    id: "mobile-apps",
    name: "Mobile App Development",
    category: "DIGITAL",
    tagline: "iOS and Android mobile applications.",
    description: "Native iOS and Android applications, cross-platform mobile solutions, mobile UI/UX design, push notifications, and App Store Optimization.",
    deliverables: ["iOS & Android Apps", "Cross-Platform Tech", "Mobile UI/UX", "ASO Optimization", "Maintenance & Updates"],
    features: ["App Store & Play Store publishing", "Push notification engine", "Offline data synchronization", "Biometric security support"],
    accentColor: "#E8392B",
  },

  // GROWTH
  {
    id: "seo-optimization",
    name: "SEO Optimization",
    category: "GROWTH",
    tagline: "Organic search visibility and top Google rankings.",
    description: "Comprehensive keyword research, technical SEO audits, on-page optimization, local SEO, content strategy, and high-quality link building.",
    deliverables: ["Keyword Research", "Technical SEO Audits", "On-Page Optimization", "Local SEO & Google Business", "Link Building Strategy"],
    features: ["Monthly ranking reports", "Core Web Vitals tuning", "Competitor gap analysis", "Schema markup implementation"],
    accentColor: "#3457D5",
  },
  {
    id: "digital-advertising",
    name: "Digital Advertising",
    category: "GROWTH",
    tagline: "Targeted PPC, Meta Ads, and retargeting campaigns.",
    description: "Data-driven Google Ads, Facebook & Instagram campaigns, display advertising, strategic audience retargeting, and landing page optimization.",
    deliverables: ["Google Search & Shopping Ads", "Meta (FB/IG) Campaigns", "Retargeting Systems", "Landing Page Design", "ROAS Analytics"],
    features: ["Conversion pixel setup", "A/B creative testing", "Transparent ad spend tracking", "Targeted audience segmenting"],
    accentColor: "#3457D5",
  },
  {
    id: "email-marketing",
    name: "Email Marketing",
    category: "GROWTH",
    tagline: "Automated drip campaigns and customer retention.",
    description: "Custom newsletter design, automated drip sequences, customer segmentation, performance analytics, and retention marketing workflows.",
    deliverables: ["Drip Automation", "Newsletter Design", "Audience Segmentation", "A/B Subject Testing", "Analytics & Reporting"],
    features: ["High deliverability setup", "Dynamic personalization", "CRM & store integration", "Automated welcome flows"],
    accentColor: "#3457D5",
  },
];

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<"ALL" | "BRAND" | "DIGITAL" | "GROWTH">("ALL");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const filteredServices =
    activeCategory === "ALL"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative bg-ink px-6 py-24 text-cream md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Full-Spectrum Agency Services
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cream md:text-6xl">
              Our Capabilities
            </h2>
            <p className="mt-4 max-w-2xl text-base text-cream/70">
              Nine specialized services engineered to build brand equity, launch digital platforms, and drive predictable customer growth.
            </p>

            {/* Category Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-full bg-white/5 p-1.5 backdrop-blur border border-white/10">
              {(["ALL", "BRAND", "DIGITAL", "GROWTH"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gold text-ink shadow-md"
                      : "text-cream/70 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 80} direction="up">
              <div
                data-cursor="view"
                onClick={() => setSelectedService(s)}
                className="group relative flex h-full cursor-pointer flex-col justify-between rounded-2xl border border-cream/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:bg-white/[0.06] hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: s.accentColor, color: "#0A0A0A" }}
                    >
                      {s.category}
                    </span>
                    <span className="text-sm text-cream/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold">
                      →
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-cream">
                    {s.name}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {s.tagline}
                  </p>
                </div>

                <div className="mt-8 border-t border-cream/10 pt-4">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.deliverables.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-white/5 px-2 py-1 text-[11px] font-medium text-cream/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold group-hover:underline">
                    Explore service details →
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Service Interactive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
