"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectModal, { ProjectItem } from "./ProjectModal";

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "apex-commerce",
    title: "Apex E-Commerce Platform",
    client: "Apex Retail Solutions",
    category: "Web",
    summary: "A high-performance custom e-commerce web application featuring instant checkout and mobile-first product browsing.",
    challenge: "Legacy slow storefront with high abandoned cart rates on mobile devices.",
    solution: "Rebuilt with Next.js & headless commerce API for sub-second page loads and seamless 1-click checkout flow.",
    tags: ["Next.js", "Stripe", "UI/UX", "Tailwind"],
    gradient: "bg-gradient-to-tr from-amber-600 via-gold to-yellow-400",
  },
  {
    id: "aura-branding",
    title: "Aura Apparel Brand Identity",
    client: "Aura Lifestyle Co.",
    category: "Branding",
    summary: "Complete visual identity, packaging design, luxury stationery, and brand guidelines for a modern lifestyle label.",
    challenge: "Fragmented visual branding across physical retail products and digital social channels.",
    solution: "Created an elegant, unified design system with custom typography and tactile eco-packaging guidelines.",
    tags: ["Brand Identity", "Packaging", "Typography"],
    gradient: "bg-gradient-to-tr from-rose-700 via-red to-orange-500",
  },
  {
    id: "pulse-growth",
    title: "Pulse SEO & Performance Campaign",
    client: "Pulse Healthcare Tech",
    category: "Marketing",
    summary: "Multi-channel SEO and Google Search Ads campaign driving high-intent B2B inquiries.",
    challenge: "Low organic keyword ranking and unoptimized ad spend on non-converting audience segments.",
    solution: "Executed targeted technical SEO overhaul, landing page optimizations, and laser-focused paid search ad sets.",
    tags: ["Google Ads", "Technical SEO", "Analytics"],
    gradient: "bg-gradient-to-tr from-blue-800 via-blue to-indigo-500",
  },
  {
    id: "fitflow-app",
    title: "FitFlow Native Mobile App",
    client: "FitFlow Wellness",
    category: "Apps",
    summary: "Cross-platform mobile application for personal fitness tracking, class bookings, and community engagement.",
    challenge: "Complex booking flow leading to high user drop-off during class reservations.",
    solution: "Designed a streamlined 2-tap booking UI with real-time push notifications and Apple/Google Wallet integration.",
    tags: ["iOS & Android", "Flutter", "Push Engine"],
    gradient: "bg-gradient-to-tr from-emerald-700 via-green to-teal-400",
  },
  {
    id: "zenith-media",
    title: "Zenith Commercial Photography",
    client: "Zenith Industrial Group",
    category: "Photography",
    summary: "Corporate, facility, and product photography showcase capturing industrial excellence.",
    challenge: "Outdated stock imagery failing to reflect high-tech manufacturing facility capabilities.",
    solution: "Executed on-site drone photo/video coverage and professional studio product shoots for web and print catalogs.",
    tags: ["Drone Media", "Corporate Photography", "Retouching"],
    gradient: "bg-gradient-to-tr from-purple-800 via-pink-600 to-red",
  },
  {
    id: "nova-saas",
    title: "Nova SaaS Web Portal",
    client: "Nova Software Inc.",
    category: "Web",
    summary: "Scalable cloud web portal with dark mode UI, interactive dashboard, and subscription management.",
    challenge: "Cluttered dashboard interface causing high customer churn during onboarding.",
    solution: "Designed a clean, intuitive dashboard navigation with micro-animations and contextual onboarding tours.",
    tags: ["Web App", "Dashboard UI", "TypeScript"],
    gradient: "bg-gradient-to-tr from-cyan-600 via-blue to-blue-800",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Web" | "Branding" | "Marketing" | "Apps" | "Photography"
  >("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative bg-ink px-6 py-24 text-cream md:px-12">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Featured Case Studies & Work
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-cream md:text-6xl">
              Selected Work
            </h2>
            <p className="mt-4 max-w-2xl text-base text-cream/70">
              A showcase of client projects engineered for visual impact, high conversion, and sustained digital growth.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-full bg-white/5 p-1.5 backdrop-blur border border-white/10">
              {(["All", "Web", "Branding", "Marketing", "Apps", "Photography"] as const).map(
                (cat) => (
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
                )
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 90} direction="up">
              <div
                data-cursor="view"
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-cream/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl"
              >
                {/* Visual Thumbnail */}
                <div
                  className={`h-56 w-full ${project.gradient} p-6 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="flex justify-between items-start">
                    <span className="rounded-full bg-ink/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-cream backdrop-blur">
                      {project.category}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-gold backdrop-blur transition-transform group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white drop-shadow">
                    {project.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-gold">{project.client}</p>
                  <p className="mt-2 text-xs leading-relaxed text-cream/70 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-cream/10 pt-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-cream/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-cream transition-colors group-hover:text-gold">
                      View case study →
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
