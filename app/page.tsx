import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import WaveDivider from "@/components/WaveDivider";
import FloatingPillBar from "@/components/FloatingPillBar";
import TrustStrip from "@/components/TrustStrip";
import IntentSection from "@/components/IntentSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyVertiseSection from "@/components/WhyVertiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TextSplitReveal from "@/components/TextSplitReveal";
import HeroFloatingDecorations from "@/components/HeroFloatingDecorations";
import HeroDrawnLine from "@/components/HeroDrawnLine";
import ThreeTierHeadline from "@/components/ThreeTierHeadline";

const HeroScene = dynamic(() => import("@/components/HeroScene"), { ssr: false });

export default function Home() {
  return (
    <main className="relative min-h-screen bg-deep-navy selection:bg-brand-red selection:text-pure-white">
      {/* 1. NAVIGATION & PERSISTENT PILL BAR */}
      <Nav />
      <FloatingPillBar />

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-6 pt-12 pb-20 text-center"
      >
        {/* Ambient Cosmic Aurora Gradient Glows (Crency Atmosphere) */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-red/25 via-[#4C3487]/40 to-blue/25 blur-[140px] animate-aurora-glow" />
        <div className="pointer-events-none absolute right-[5%] top-[10%] -z-20 h-[380px] w-[380px] rounded-full bg-lavender/10 blur-[100px] animate-pulse-glow" />

        {/* 3D Interlocking Rings & Cosmic Stardust Background */}
        <HeroScene />

        {/* Crency-Style Organic Floating & Swaying Badges */}
        <HeroFloatingDecorations />

        {/* Headline with Three-Tier Typography Treatment & Animated Drawn Contour Line */}
        <div className="relative z-10 max-w-5xl">
          <HeroDrawnLine />
          <ThreeTierHeadline
            as="h1"
            tier1="We build"
            tier2="digital experiences"
            tier3="that help businesses grow."
            theme="dark"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl"
          />
        </div>
      </section>

      {/* 3. HERO → ABOUT SCROLL-MERGE TRANSITION (Crency Fluid Wave in Light Lavender #EEE9FC) */}
      <div className="relative z-20">
        <WaveDivider fill="#EEE9FC" />
      </div>

      {/* 4. ABOUT & CREDIBILITY STAGE (Light Lavender Background #EEE9FC) */}
      <section id="about" className="relative bg-light-lavender px-6 pb-12 pt-6 text-center md:px-12 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <br />
          <ThreeTierHeadline
            as="h2"
            tier1="Brands and"
            tier2="digital products"
            tier3="that scale."
            theme="light"
            className="text-4xl sm:text-6xl md:text-7xl"
          />
          <br />
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-deep-navy/80 md:text-xl">
            Vertise is a digital marketing and web design studio — combining brand strategy,
            custom web engineering, content creation, and search growth under one dedicated team.
          </p>
        </div>
      </section>

      {/* 5. TRUST / RESULTS STRIP (10k+ AUDIENCE & RESULTS) */}
      <TrustStrip />

      {/* 6. WHAT DO YOU NEED? INTENT PATHWAYS (Luminous Lavender) */}
      <IntentSection />

      {/* 7. WHY VERTISE? 4 PILLARS (Lavender) */}
      <WhyVertiseSection />

      {/* 8. HOW WE WORK PROCESS (Light Lavender) */}
      <ProcessSection />

      {/* 9. MARQUEE TICKER BANDS (Logo Color Accents: IDENTITY, STRATEGY, RESULTS) */}
      <div className="flex flex-col w-full overflow-hidden z-20">
        <Marquee text="IDENTITY" bg="red" />
        <Marquee text="STRATEGY" bg="blue" reverse />
        <Marquee text="RESULTS" bg="green" />
      </div>

      {/* 10. SERVICES GRID WITH 3D FLIP CARDS (Deep Navy) */}
      <ServicesSection />

      {/* 11. SELECTED WORK PORTFOLIO WITH DRAG-SCROLL (Deep Navy) */}
      <PortfolioSection />

      {/* 12. TRUSTED BY BUSINESSES & TESTIMONIALS (Deep Navy) */}
      <TestimonialsSection />

      {/* TRANSITION: DEEP NAVY → FAQ (LIGHT LAVENDER WAVE) */}
      <div className="relative z-20 bg-deep-navy">
        <WaveDivider fill="#EEE9FC" />
      </div>

      {/* 13. FAQ ACCORDION (Light Lavender) */}
      <FaqSection />

      {/* TRANSITION: FAQ (LIGHT LAVENDER) → FINAL CTA (DEEP NAVY WAVE) */}
      <div className="relative z-20 bg-light-lavender">
        <WaveDivider fill="#15072F" />
      </div>

      {/* 14. FINAL CTA BANNER (Deep Navy) */}
      <FinalCta />

      {/* 15. CONTACT FORM (Deep Navy) */}
      <ContactForm />

      {/* 16. FOOTER (Deep Navy) */}
      <Footer />
    </main>
  );
}

