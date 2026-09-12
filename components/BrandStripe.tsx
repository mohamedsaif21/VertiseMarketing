"use client";

const STRIP_ITEMS = [
  { text: "STRATEGY & ROADMAP", dotColor: "bg-brand-red" },
  { text: "HIGH-CONVERTING WEBSITES", dotColor: "bg-brand-yellow" },
  { text: "BRAND IDENTITY & DESIGN", dotColor: "bg-brand-green" },
  { text: "MOBILE & WEB APPLICATIONS", dotColor: "bg-brand-blue" },
  { text: "SEARCH & REVENUE GROWTH", dotColor: "bg-brand-red" },
  { text: "PERFORMANCE OPTIMIZATION", dotColor: "bg-brand-yellow" },
];

export default function BrandStripe() {
  return (
    <div className="relative z-20 w-full overflow-hidden bg-deep-navy shadow-xl">
      {/* 1. Sleek 4-color brand top bar */}
      <div className="grid h-1 w-full grid-cols-4">
        <div className="bg-brand-red" />
        <div className="bg-brand-yellow" />
        <div className="bg-brand-green" />
        <div className="bg-brand-blue" />
      </div>

      {/* 2. Seamless Marquee Ticker */}
      <div className="relative flex items-center overflow-hidden py-3.5 md:py-4.5 bg-deep-navy border-y border-white/5">
        <div className="marquee-track flex shrink-0 items-center gap-8">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-8">
              {STRIP_ITEMS.map((item, idx) => (
                <div key={`${copy}-${idx}`} className="flex items-center gap-3.5 whitespace-nowrap">
                  <span
                    className={`h-2 w-2 rounded-full ${item.dotColor} shadow-sm`}
                    aria-hidden="true"
                  />
                  <span className="font-display text-xs md:text-sm font-black uppercase tracking-[0.25em] text-pure-white/90">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Sleek 4-color brand bottom bar */}
      <div className="grid h-1 w-full grid-cols-4">
        <div className="bg-brand-blue" />
        <div className="bg-brand-green" />
        <div className="bg-brand-yellow" />
        <div className="bg-brand-red" />
      </div>
    </div>
  );
}
