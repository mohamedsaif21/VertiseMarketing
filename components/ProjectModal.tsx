"use client";

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
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md transition-opacity animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/20 bg-ink p-8 text-cream shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-cream transition-colors hover:bg-red hover:text-white"
          aria-label="Close project modal"
        >
          ✕
        </button>

        {/* Visual Banner Header */}
        <div className={`h-40 w-full rounded-2xl ${project.gradient} p-6 flex flex-col justify-end text-cream shadow-inner`}>
          <span className="inline-block w-fit rounded-full bg-ink/80 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight text-white drop-shadow">
            {project.title}
          </h3>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-b border-cream/10 pb-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-cream/50">Client / Brand</span>
            <p className="font-display text-lg font-bold text-gold">{project.client}</p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span key={t} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-cream/80">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-cream/50">Project Overview</h4>
            <p className="mt-1 text-sm leading-relaxed text-cream/80">{project.summary}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-cream/10 bg-white/5 p-4">
              <h5 className="text-xs font-bold uppercase text-red">The Challenge</h5>
              <p className="mt-1 text-xs leading-relaxed text-cream/70">{project.challenge}</p>
            </div>
            <div className="rounded-xl border border-cream/10 bg-white/5 p-4">
              <h5 className="text-xs font-bold uppercase text-green">Vertise Solution</h5>
              <p className="mt-1 text-xs leading-relaxed text-cream/70">{project.solution}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <span className="text-xs text-cream/60">Want similar results for your business?</span>
          <a
            href="#contact"
            onClick={onClose}
            data-cursor="cta"
            className="rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-wider text-ink transition-transform hover:scale-105"
          >
            Start your project →
          </a>
        </div>
      </div>
    </div>
  );
}
