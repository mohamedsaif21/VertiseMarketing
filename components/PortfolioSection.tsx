"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ProjectModal, { ProjectItem } from "./ProjectModal";
import DragScrollCarousel from "./DragScrollCarousel";

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
    gradient: "bg-gradient-to-tr from-brand-red/80 via-rose-700 to-brand-red",
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
    gradient: "bg-gradient-to-tr from-brand-blue via-indigo-700 to-dark-navy",
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
    gradient: "bg-gradient-to-tr from-brand-blue via-blue-700 to-cyan-600",
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
    gradient: "bg-gradient-to-tr from-brand-green/90 via-emerald-700 to-teal-800",
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
    gradient: "bg-gradient-to-tr from-amber-600 via-brand-yellow to-orange-600",
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
    gradient: "bg-gradient-to-tr from-dark-navy via-brand-blue/80 to-brand-blue",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Web" | "Branding" | "Marketing" | "Apps" | "Photography"
  >("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative bg-deep-navy overflow-hidden px-6 py-24 text-pure-white md:px-12">
      {/* Ambient Cosmic Aurora Glows */}
      <div className="pointer-events-none absolute left-10 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-blue/10 blur-[140px] animate-aurora-glow" />
      <div className="pointer-events-none absolute right-10 bottom-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-brand-red/10 blur-[130px] animate-pulse-glow" />

      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender/60">
              Featured Case Studies & Work
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-pure-white md:text-6xl">
              Selected Work
            </h2>
            <p className="mt-4 max-w-2xl text-base text-lavender/80">
              A showcase of client projects engineered for visual impact, high conversion, and sustained digital growth. Click and drag horizontally to explore.
            </p>

            {/* Filter Tabs and View Toggle */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <div className="flex flex-wrap justify-center gap-2 rounded-full bg-white/5 p-1.5 backdrop-blur border border-lavender/20">
                {(["All", "Web", "Branding", "Marketing", "Apps", "Photography"] as const).map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                        activeCategory === cat
                          ? "bg-brand-red text-pure-white shadow-md shadow-brand-red/30"
                          : "text-pure-white/70 hover:text-pure-white"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>

              <div className="flex items-center rounded-full border border-lavender/20 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("carousel")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    viewMode === "carousel" ? "bg-brand-red text-pure-white shadow" : "text-pure-white/60 hover:text-pure-white"
                  }`}
                  aria-label="Carousel mode"
                >
                  ↔ Carousel
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                    viewMode === "grid" ? "bg-brand-red text-pure-white shadow" : "text-pure-white/60 hover:text-pure-white"
                  }`}
                  aria-label="Grid mode"
                >
                  ⊞ Grid
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Portfolio Drag-Scroll Carousel (Animation #7) or Grid View */}
        {viewMode === "carousel" ? (
          <DragScrollCarousel showArrows={true}>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                data-cursor="drag"
                onClick={() => setSelectedProject(project)}
                className="group relative w-[320px] sm:w-[380px] md:w-[420px] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-dark-navy/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-dark-navy hover:shadow-2xl"
              >
                {/* Visual Thumbnail */}
                <div
                  className={`h-56 w-full ${project.gradient} p-6 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="flex justify-between items-start">
                    <span className="rounded-full bg-deep-navy/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pure-white backdrop-blur">
                      {project.category}
                    </span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy/70 text-pure-white backdrop-blur transition-transform group-hover:rotate-45 group-hover:bg-brand-red group-hover:text-pure-white">
                      ↗
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-pure-white drop-shadow">
                    {project.title}
                  </h3>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-xs font-bold text-brand-red">{project.client}</p>
                  <p className="mt-2 text-xs leading-relaxed text-lavender/80 line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-pure-white/80">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-pure-white transition-colors group-hover:text-brand-red">
                      View case study →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </DragScrollCarousel>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 90} direction="up">
                <div
                  data-cursor="view"
                  onClick={() => setSelectedProject(project)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-dark-navy/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-dark-navy hover:shadow-2xl"
                >
                  <div
                    className={`h-56 w-full ${project.gradient} p-6 flex flex-col justify-between transition-transform duration-500 group-hover:scale-[1.02]`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="rounded-full bg-deep-navy/85 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pure-white backdrop-blur">
                        {project.category}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep-navy/70 text-pure-white backdrop-blur transition-transform group-hover:rotate-45 group-hover:bg-brand-red group-hover:text-pure-white">
                        ↗
                      </span>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-pure-white drop-shadow">
                      {project.title}
                    </h3>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold text-brand-red">{project.client}</p>
                    <p className="mt-2 text-xs leading-relaxed text-lavender/80 line-clamp-2">
                      {project.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4">
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 2).map((t) => (
                          <span key={t} className="rounded bg-white/10 px-2 py-0.5 text-[10px] text-pure-white/80">
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-pure-white transition-colors group-hover:text-brand-red">
                        View case study →
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Project Modal Preview */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
