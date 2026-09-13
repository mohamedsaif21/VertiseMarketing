"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ServiceModal, { ServiceDetail } from "./ServiceModal";
import ServiceFlipCard from "./ServiceFlipCard";

const SERVICES_DATA: ServiceDetail[] = [
  // BRAND
  {
    id: "graphic-design",
    number: "01",
    icon: "🎨",
    name: "Graphic Design",
    category: "BRAND",
    tagline: "Visual identity, stationery, and marketing collateral.",
    description: "Distinctive logo design, brand guidelines, stationery, marketing collateral, product packaging, and UI/UX design crafted to capture attention.",
    deliverables: ["Logo & Brand Guidelines", "Business Stationery", "Marketing Collateral", "Packaging Design", "Web UI/UX"],
    features: ["Vector source files included", "Multi-platform brand assets", "Print-ready packaging files", "User-tested UI components"],
    accentColor: "#FBBC05",
  },
  {
    id: "photography",
    number: "02",
    icon: "📷",
    name: "Photography & Media",
    category: "BRAND",
    tagline: "Product, corporate, and event visual storytelling.",
    description: "High-impact product photography, corporate headshots, event coverage, drone photo/video shoots, and post-production storytelling.",
    deliverables: ["Product Photography", "Corporate & Team Shoots", "Drone Photo/Video", "Event Coverage", "Post-Production Edit"],
    features: ["4K high-resolution delivery", "Commercial usage licensing", "Color-graded retouched imagery", "Social-ready media formats"],
    accentColor: "#FBBC05",
  },
  {
    id: "content-writing",
    number: "03",
    icon: "✍️",
    name: "Content Writing",
    category: "BRAND",
    tagline: "Persuasive copywriting and brand storytelling.",
    description: "Engaging website copy, SEO-optimized articles, compelling social media content, email newsletters, and authentic brand messaging.",
    deliverables: ["Website Copywriting", "SEO Blog Posts", "Social Media Copy", "Email Newsletters", "Brand Voice Playbook"],
    features: ["Keyword-optimized writing", "Clear tone-of-voice alignment", "Conversion-focused CTAs", "Plagiarism-free original copy"],
    accentColor: "#FBBC05",
  },

  // DIGITAL
  {
    id: "web-development",
    number: "04",
    icon: "💻",
    name: "Web Development",
    category: "DIGITAL",
    tagline: "Responsive, ultra-fast websites and web applications.",
    description: "Modern websites, web applications, custom CMS integrations, performance optimizations, and cloud database solutions tailored for conversion.",
    deliverables: ["Responsive Websites", "Custom Web Apps", "CMS Integration", "Performance Optimization", "Database Architecture"],
    features: ["Sub-second page load times", "Mobile-first responsive design", "SEO structural foundation", "Accessibility & WCAG compliance"],
    accentColor: "#4285F4",
  },
  {
    id: "ecommerce-solutions",
    number: "05",
    icon: "🛍️",
    name: "E-Commerce Solutions",
    category: "DIGITAL",
    tagline: "High-converting online stores built for growth.",
    description: "Full-scale online stores, seamless payment gateway integrations, inventory management systems, cart optimization, and order tracking.",
    deliverables: ["Online Storefronts", "Payment Gateways", "Inventory Management", "Cart & Checkout UX", "Order Analytics"],
    features: ["Secure payment processing", "Automated invoice generation", "Multi-currency support", "Abandoned cart recovery"],
    accentColor: "#4285F4",
  },
  {
    id: "mobile-apps",
    number: "06",
    icon: "📱",
    name: "Mobile App Development",
    category: "DIGITAL",
    tagline: "iOS and Android mobile applications.",
    description: "Native iOS and Android applications, cross-platform mobile solutions, mobile UI/UX design, push notifications, and App Store Optimization.",
    deliverables: ["iOS & Android Apps", "Cross-Platform Tech", "Mobile UI/UX", "ASO Optimization", "Maintenance & Updates"],
    features: ["App Store & Play Store publishing", "Push notification engine", "Offline data synchronization", "Biometric security support"],
    accentColor: "#34A853",
  },

  // GROWTH
  {
    id: "seo-optimization",
    number: "07",
    icon: "📈",
    name: "SEO Optimization",
    category: "GROWTH",
    tagline: "Organic search visibility and top Google rankings.",
    description: "Comprehensive keyword research, technical SEO audits, on-page optimization, local SEO, content strategy, and high-quality link building.",
    deliverables: ["Keyword Research", "Technical SEO Audits", "On-Page Optimization", "Local SEO & Google Business", "Link Building Strategy"],
    features: ["Monthly ranking reports", "Core Web Vitals tuning", "Competitor gap analysis", "Schema markup implementation"],
    accentColor: "#EA4335",
  },
  {
    id: "digital-advertising",
    number: "08",
    icon: "🎯",
    name: "Digital Advertising",
    category: "GROWTH",
    tagline: "Targeted PPC, Meta Ads, and retargeting campaigns.",
    description: "Data-driven Google Ads, Facebook & Instagram campaigns, display advertising, strategic audience retargeting, and landing page optimization.",
    deliverables: ["Google Search & Shopping Ads", "Meta (FB/IG) Campaigns", "Retargeting Systems", "Landing Page Design", "ROAS Analytics"],
    features: ["Conversion pixel setup", "A/B creative testing", "Transparent ad spend tracking", "Targeted audience segmenting"],
    accentColor: "#EA4335",
  },
  {
    id: "email-marketing",
    number: "09",
    icon: "⚡",
    name: "Email Marketing",
    category: "GROWTH",
    tagline: "Automated drip campaigns and customer retention.",
    description: "Custom newsletter design, automated drip sequences, customer segmentation, performance analytics, and retention marketing workflows.",
    deliverables: ["Drip Automation", "Newsletter Design", "Audience Segmentation", "A/B Subject Testing", "Analytics & Reporting"],
    features: ["High deliverability setup", "Dynamic personalization", "CRM & store integration", "Automated welcome flows"],
    accentColor: "#EA4335",
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
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#100424] via-[#14062E] to-[#0D031F] px-6 py-28 text-pure-white md:px-12"
    >
      {/* Top subtle glow boundary */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* High-Tech Architectural Grid Matrix Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:radial-gradient(rgba(211,197,246,0.6)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_45%,black_50%,transparent_100%)]"
        aria-hidden="true"
      />

      {/* Atmospheric Multi-Color Ambient Aurora Orbs */}
      <div className="pointer-events-none absolute -left-48 top-20 -z-10 h-[550px] w-[550px] rounded-full bg-brand-red/12 blur-[150px] animate-aurora-glow" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -z-10 h-[420px] w-[700px] rounded-full bg-soft-lavender/8 blur-[180px]" />
      <div className="pointer-events-none absolute -right-48 bottom-24 -z-10 h-[550px] w-[550px] rounded-full bg-brand-blue/15 blur-[160px] animate-pulse-glow" />
      <div className="pointer-events-none absolute left-1/4 bottom-10 -z-10 h-[300px] w-[300px] rounded-full bg-brand-green/8 blur-[130px]" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-14">
            {/* 4 Brand Color Eyebrow Dot Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-1.5 backdrop-blur-md shadow-inner mb-4">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-brand-red shadow-[0_0_8px_rgba(234,67,53,0.9)]" />
                <span className="h-2 w-2 rounded-full bg-brand-yellow shadow-[0_0_8px_rgba(251,188,5,0.9)]" />
                <span className="h-2 w-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(52,168,83,0.9)]" />
                <span className="h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_8px_rgba(66,133,244,0.9)]" />
              </div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-soft-lavender">
                Full-Spectrum Agency Capabilities
              </span>
            </div>

            <h2 className="font-display text-4xl font-extrabold uppercase leading-none tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-pure-white">Our </span>
              <span className="text-ghost-dark hover:text-pure-white transition-all duration-300">Capabilities</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base font-normal leading-relaxed text-soft-lavender/85 md:text-lg">
              Nine specialized disciplines engineered to craft memorable brand identities, engineer high-speed digital infrastructure, and accelerate qualified demand.
            </p>

            {/* Filter Bar with Category Count Chips and Brand-Tinted Active States */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-full border border-white/12 bg-[#170933]/90 p-1.5 backdrop-blur-xl shadow-2xl">
              {(
                [
                  { id: "ALL", label: "ALL" },
                  { id: "BRAND", label: "BRAND" },
                  { id: "DIGITAL", label: "DIGITAL" },
                  { id: "GROWTH", label: "GROWTH" },
                ] as const
              ).map((cat) => {
                const count =
                  cat.id === "ALL"
                    ? SERVICES_DATA.length
                    : SERVICES_DATA.filter((s) => s.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                let activeClasses = "";
                let activeStyle = {};

                if (isActive) {
                  if (cat.id === "ALL") {
                    activeClasses = "bg-white/15 text-pure-white border-white/25 shadow-md";
                  } else if (cat.id === "BRAND") {
                    activeClasses = "shadow-lg shadow-brand-yellow/30 border-transparent";
                    activeStyle = { backgroundColor: "#FBBC05", color: "#15072F" };
                  } else if (cat.id === "DIGITAL") {
                    activeClasses = "shadow-lg shadow-brand-blue/30 border-transparent";
                    activeStyle = { backgroundColor: "#4285F4", color: "#FFFFFF" };
                  } else if (cat.id === "GROWTH") {
                    activeClasses = "shadow-lg shadow-brand-red/30 border-transparent";
                    activeStyle = { backgroundColor: "#EA4335", color: "#FFFFFF" };
                  }
                } else {
                  activeClasses = "text-pure-white/70 hover:bg-white/10 hover:text-pure-white border-transparent";
                }

                return (
                  <button
                    key={cat.id}
                    data-cursor="select"
                    onClick={() => setActiveCategory(cat.id)}
                    style={activeStyle}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 ${activeClasses}`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.5 font-mono text-[10px] font-semibold ${
                        isActive && cat.id === "BRAND"
                          ? "bg-black/20 text-deep-navy"
                          : isActive
                          ? "bg-black/30 text-white"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Services Grid with 3D Flip Cards (Animation #6) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((s, i) => (
            <ScrollReveal key={s.id} delay={i * 80} direction="up">
              <ServiceFlipCard
                service={s}
                onOpenModal={setSelectedService}
              />
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
