import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import WaveDivider from "@/components/WaveDivider";
import { StickerBadge, DottedConnector } from "@/components/StickerBadge";
import FloatingPillBar from "@/components/FloatingPillBar";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink">
      <Nav />
      <FloatingPillBar />

      {/* ========== HERO (§7) ========== */}
      <section id="home" className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pt-12 text-center">
        <HeroScene />

        <p className="relative z-10 mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream/60">
          Digital Marketing • Web • Branding
        </p>

        <h1 className="relative z-10 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-cream md:text-7xl">
          We build digital experiences
          <br />
          that help businesses grow.
        </h1>

        <p className="relative z-10 mt-6 max-w-xl text-base text-cream/70 md:text-lg">
          From branding and websites to SEO, advertising and digital strategy,
          Vertise helps businesses build a stronger digital presence and grow online.
        </p>

        {/* CTAs — wording locked per §7/§16/§17: "Start a project" primary everywhere */}
        <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            data-cursor="cta"
            className="rounded-full bg-red px-8 py-4 text-sm font-semibold text-cream transition-transform hover:scale-105"
          >
            Start a project →
          </a>
          <a
            href="#work"
            data-cursor="drag"
            className="rounded-full border border-cream/30 px-8 py-4 text-sm font-semibold text-cream transition-colors hover:border-gold hover:text-gold"
          >
            View our work
          </a>
        </div>
      </section>

      {/* ========== HERO → ABOUT SCROLL-MERGE TRANSITION (§4A) ========== */}
      <div className="relative">
        <WaveDivider fill="#E8ECFB" />

        {/* Sticker badges + dotted connectors sit at the seam, per §4A/§8.
            Marked unverified — these numbers must be confirmed by the client
            before launch (§23). Hidden on mobile per §19. */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-[10%] top-2">
            <StickerBadge label="500+ websites built" shape="starburst" rotation={-6} bg="var(--gold)" unverified />
          </div>
          <DottedConnector
            path="M40,20 C 120,10 180,60 260,40"
            className="left-[16%] top-0 h-24 w-40"
          />
          <div className="absolute right-[10%] -top-2">
            <StickerBadge label="9 years of experience" shape="ribbon" rotation={5} bg="var(--blue)" textColor="#F5F3F0" unverified />
          </div>
        </div>
      </div>

      {/* ========== ABOUT / BIG STATEMENT (light section, §5) ========== */}
      <section id="about" className="relative bg-[#E8ECFB] px-6 pb-24 pt-4 text-center md:px-12">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#12142B]/50">
          About us
        </p>
        <h2 className="mx-auto max-w-5xl font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-[#12142B] md:text-6xl">
          Brands and digital products
          <br />
          that scale.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#12142B]/70">
          Vertise is a digital marketing and web design studio — branding,
          development, content and growth under one team.
        </p>
      </section>

      {/* ========== MARQUEE (used as a section divider, §4) ========== */}
      <div className="flex flex-col">
        <Marquee text="IDENTITY" bg="gold" />
        <Marquee text="STRATEGY" bg="red" reverse />
        <Marquee text="RESULTS" bg="blue" />
      </div>

      {/* Placeholder for remaining sections — What Do You Need?, Services,
          Process, Work, Why Vertise, Testimonials, FAQ, Final CTA, Contact,
          Footer — built next per plan §9 onward. */}
      <section id="services" className="px-6 py-24 text-center md:px-12">
        <p className="text-cream/50">Next up: "What Do You Need?" + Services sections (§9–§10)</p>
      </section>
    </main>
  );
}
