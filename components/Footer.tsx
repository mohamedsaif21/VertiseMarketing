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
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-lavender/60">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3.5 py-1.5 font-semibold text-brand-green backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-brand-green animate-pulse" />
                Accepting new client projects
              </span>
            </div>

            {/* Social Connect Icons in Brand Logo Colors */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                aria-label="Instagram"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-brand-red/35 bg-brand-red/10 text-brand-red backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brand-red hover:text-pure-white hover:shadow-lg hover:shadow-brand-red/30"
              >
                <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                aria-label="LinkedIn"
                className="group flex h-9 w-9 items-center justify-center rounded-xl border border-brand-blue/35 bg-brand-blue/10 text-brand-blue backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brand-blue hover:text-pure-white hover:shadow-lg hover:shadow-brand-blue/30"
              >
                <svg className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
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
                  data-cursor="copy"
                  className="font-medium text-pure-white hover:text-brand-red transition-colors"
                >
                  vertice.digitalmanagement@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-[11px] uppercase tracking-wider text-pure-white/40">Phone</span>
                <a
                  href="tel:+919043569743"
                  data-cursor="cta"
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

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {/* Instagram with Brand Red Logo Color */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              aria-label="Instagram"
              className="group flex items-center gap-2 rounded-full border border-brand-red/35 bg-brand-red/10 px-3.5 py-1.5 text-xs font-bold text-brand-red backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-brand-red hover:text-pure-white hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/30"
            >
              <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
              <span>Instagram</span>
            </a>

            {/* LinkedIn with Brand Blue Logo Color */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="view"
              aria-label="LinkedIn"
              className="group flex items-center gap-2 rounded-full border border-brand-blue/35 bg-brand-blue/10 px-3.5 py-1.5 text-xs font-bold text-brand-blue backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-brand-blue hover:text-pure-white hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/30"
            >
              <svg className="h-3.5 w-3.5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              data-cursor="cta"
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

