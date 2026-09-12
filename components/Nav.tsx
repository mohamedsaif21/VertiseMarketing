"use client";

import { useState, useEffect } from "react";
import MagneticButton from "./MagneticButton";

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
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for nav underline
      const sections = ["services", "work", "about", "process", "contact"];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            setActiveSection(`#${sec}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-deep-navy/85 py-4 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        <a
          href="#home"
          data-cursor="cta"
          className="group flex items-center transition-opacity hover:opacity-90"
        >
          <img
            src="/logohero.png"
            alt="Vertise Agency Logo"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </a>

        {/* Desktop Links with instant hover state swap (Animation #15) */}
        <div className="hidden items-center gap-8 text-sm font-medium text-pure-white/80 md:flex">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="view"
                className={`relative py-1 transition-colors duration-150 hover:text-brand-red ${
                  isActive ? "text-brand-red font-semibold" : ""
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-brand-red animate-fadeIn" />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          {/* CTA wording standardized to "Start a project" everywhere with Magnetic pull (Animation #9) */}
          <MagneticButton
            as="a"
            href="#contact"
            data-cursor="cta"
            className="group relative overflow-hidden rounded-full bg-brand-red px-6 py-2.5 text-sm font-bold text-pure-white transition-all duration-200 hover:scale-105 hover:bg-brand-red/90 shadow-lg shadow-brand-red/25"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Start a project <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </span>
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-pure-white/20 bg-white/5 text-pure-white transition-colors hover:border-brand-red hover:text-brand-red md:hidden"
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
        <div className="fixed inset-x-0 top-[72px] z-50 flex flex-col bg-dark-navy/95 p-6 backdrop-blur-2xl border-b border-white/10 md:hidden animate-fadeIn shadow-2xl">
          <div className="flex flex-col gap-4 text-lg font-medium text-pure-white">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-white/5 transition-colors duration-150 hover:text-brand-red"
              >
                <span>{link.label}</span>
                <span className="text-xs text-pure-white/40">→</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full rounded-full bg-brand-red py-3.5 text-center text-sm font-bold text-pure-white shadow-lg shadow-brand-red/25"
            >
              Start a project →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


