// Nav links per master plan §6. Blog intentionally excluded (no maintained blog yet).
const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
      <a href="#home" className="font-display text-xl font-bold uppercase tracking-tight text-cream">
        Vertise
      </a>
      <div className="hidden items-center gap-8 text-sm text-cream/80 md:flex">
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
      {/* CTA wording standardized to "Start a project" everywhere per plan §7/§16/§17 */}
      <a
        href="#contact"
        data-cursor="cta"
        className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink transition-transform hover:scale-105"
      >
        Start a project
      </a>
    </nav>
  );
}
