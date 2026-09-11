"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060606] px-6 pb-12 pt-20 text-cream border-t border-white/10 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-2xl font-bold uppercase tracking-tight text-cream">
              Vertise<span className="text-gold">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              Vertise is a digital marketing, web design, and solutions agency based in Coimbatore, Tamil Nadu. We build digital experiences that help businesses grow.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-cream/60">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green/20 px-3 py-1 text-green">
                <span className="h-2 w-2 rounded-full bg-green" />
                Accepting new client projects
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  Graphic Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  Digital Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  E-Commerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-cream">
                  Photography & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-cream/70">
              <li>
                <a href="#work" className="transition-colors hover:text-cream">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-cream">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-cream">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-cream">
                  Start A Project
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-gold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-cream/40">Email</span>
                <a
                  href="mailto:vertice.digitalmanagement@gmail.com"
                  className="font-medium text-cream hover:text-gold transition-colors"
                >
                  vertice.digitalmanagement@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-cream/40">Phone</span>
                <a
                  href="tel:+918778147182"
                  className="font-medium text-cream hover:text-gold transition-colors"
                >
                  +91 87781 47182
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-cream/40">Location</span>
                <p className="text-xs text-cream/80">
                  Cheran Ma Nagar, Coimbatore, Tamil Nadu, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Vertise Digital Agency. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-cream transition-colors hover:bg-white/10 hover:text-gold"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
