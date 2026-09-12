type MarqueeProps = {
  text: string;
  bg: "gold" | "red" | "blue" | "green";
  reverse?: boolean;
};

const BG_CLASS: Record<MarqueeProps["bg"], string> = {
  gold: "bg-brand-yellow text-deep-navy",
  red: "bg-brand-red text-deep-navy",
  blue: "bg-brand-blue text-deep-navy",
  green: "bg-brand-green text-deep-navy",
};

export default function Marquee({ text, bg, reverse }: MarqueeProps) {
  const repeated = Array.from({ length: 6 }, () => text).join("  ○  ");

  return (
    <div className={`w-full overflow-hidden py-3 md:py-4.5 ${BG_CLASS[bg]} border-b border-black/10 shadow-md`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="text-outline whitespace-nowrap px-4 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight select-none"
            style={{ WebkitTextStroke: "2.5px #15072F" }}
          >
            {repeated}  ○  
          </span>
        ))}
      </div>
    </div>
  );
}

