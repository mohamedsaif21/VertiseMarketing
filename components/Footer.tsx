"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-deep-navy px-6 pb-12 pt-20 text-pure-white border-t border-white/10 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="group flex items-center transition-opacity hover:opacity-90"
            >
              <img
                src="/logofooter.png"
                alt="Vertise Agency Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-lavender/70">
              Vertise is a digital marketing, web design, and solutions agency based in Coimbatore, Tamil Nadu. We build digital experiences that help businesses grow.
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs text-lavender/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3.5 py-1.5 font-semibold text-brand-green backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                Accepting new client projects
              </span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-pure-white/80 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-pure-white/70">
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  Graphic Design & Branding
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  Digital Advertising
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  E-Commerce Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-brand-red">
                  Photography & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-pure-white/80 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-pure-white/70">
              <li>
                <a href="#work" className="transition-colors hover:text-brand-red">
                  Selected Work
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-brand-red">
                  About Us
                </a>
              </li>
              <li>
                <a href="#process" className="transition-colors hover:text-brand-red">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-brand-red">
                  Start A Project
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Verified Contact */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-widest text-pure-white/80 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm text-pure-white/70">
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-pure-white/40">Email</span>
                <a
                  href="mailto:vertice.digitalmanagement@gmail.com"
                  className="font-medium text-pure-white hover:text-brand-red transition-colors"
                >
                  vertice.digitalmanagement@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-pure-white/40">Phone</span>
                <a
                  href="tel:+919043569743"
                  className="font-medium text-pure-white hover:text-brand-red transition-colors"
                >
                  +91 90435 69743
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-pure-white/40">Location</span>
                <p className="text-xs text-pure-white/80">
                  Cheran Ma Nagar, Coimbatore, Tamil Nadu, India
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-lavender/50 md:flex-row">
          <p>© {new Date().getFullYear()} Vertise Digital Agency. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pure-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pure-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pure-white transition-colors"
            >
              LinkedIn
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-1.5 text-pure-white transition-all duration-200 hover:border-brand-red hover:text-brand-red hover:bg-white/5"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Signature 4-Color Bottom Bar */}
        <div className="mt-8 grid h-1 w-full grid-cols-4 rounded-full overflow-hidden opacity-40">
          <div className="bg-brand-red" />
          <div className="bg-brand-yellow" />
          <div className="bg-brand-green" />
          <div className="bg-brand-blue" />
        </div>
      </div>
    </footer>
  );
}

