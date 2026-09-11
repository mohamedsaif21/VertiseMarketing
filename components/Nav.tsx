"use client";

import { useState } from "react";

// Nav links per master plan §6. Blog intentionally excluded (no maintained blog yet).
const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 w-full">
      <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
        <a href="#home" className="font-display text-xl font-bold uppercase tracking-tight text-cream">
          Vertise<span className="text-gold">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 text-sm font-medium text-cream/80 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="drag"
              className="transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA wording standardized to "Start a project" everywhere per plan §7/§16/§17 */}
          <a
            href="#contact"
            data-cursor="cta"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Start a project
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[80px] z-50 flex flex-col bg-ink/95 p-6 backdrop-blur-xl border-b border-white/10 md:hidden animate-fadeIn">
          <div className="flex flex-col gap-4 text-lg font-medium text-cream">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-white/5 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full rounded-full bg-gold py-3 text-center text-sm font-semibold text-ink"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

