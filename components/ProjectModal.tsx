"use client";

import { useEffect } from "react";

export type ProjectItem = {
  id: string;
  title: string;
  client: string;
  category: "Web" | "Branding" | "Marketing" | "Apps" | "Photography";
  summary: string;
  challenge: string;
  solution: string;
  tags: string[];
  gradient: string;
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-lg transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-dark-navy p-8 text-pure-white shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-pure-white transition-colors hover:bg-brand-red hover:text-pure-white"
          aria-label="Close project modal"
        >
          ✕
        </button>

        {/* Visual Banner Header */}
        <div className={`h-48 w-full rounded-2xl ${project.gradient} p-6 flex flex-col justify-end text-pure-white shadow-2xl relative overflow-hidden`}>
          <div className="absolute inset-0 bg-deep-navy/30 backdrop-blur-[2px]" />
          <div className="relative z-10">
            <span className="inline-block rounded-full bg-deep-navy/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-pure-white backdrop-blur-md">
              {project.category}
            </span>
            <h3
              id="modal-project-title"
              className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-white drop-shadow-md md:text-4xl"
            >
              {project.title}
            </h3>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pure-white/50">Client / Partner</span>
            <p className="font-display text-lg font-bold text-brand-red">{project.client}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-pure-white/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-pure-white/50">Project Overview</h4>
            <p className="mt-1 text-sm font-normal leading-relaxed text-pure-white/80">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 p-5 backdrop-blur-sm">
              <h5 className="text-xs font-bold uppercase tracking-wider text-brand-red">The Business Challenge</h5>
              <p className="mt-2 text-xs font-medium leading-relaxed text-pure-white/80">{project.challenge}</p>
            </div>
            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-5 backdrop-blur-sm">
              <h5 className="text-xs font-bold uppercase tracking-wider text-brand-green">Vertise Solution & Strategy</h5>
              <p className="mt-2 text-xs font-medium leading-relaxed text-pure-white/80">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-6">
          <span className="text-xs font-medium text-pure-white/60">Want similar outcomes for your business?</span>
          <a
            href="#contact"
            onClick={onClose}
            data-cursor="cta"
            className="rounded-full bg-brand-red px-6 py-3 text-center text-xs font-bold uppercase tracking-wider text-pure-white transition-transform duration-200 hover:scale-105 shadow-md shadow-brand-red/25"
          >
            Start your project →
          </a>
        </div>
      </div>
    </div>
  );
}

