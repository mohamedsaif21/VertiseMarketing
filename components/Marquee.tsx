type MarqueeProps = {
  text: string;
  bg: "gold" | "red" | "blue" | "green";
  reverse?: boolean;
};

const BG_CLASS: Record<MarqueeProps["bg"], string> = {
  gold: "bg-brand-yellow text-deep-navy border-black/10",
  red: "bg-brand-red text-deep-navy border-black/10",
  blue: "bg-brand-blue text-deep-navy border-black/10",
  green: "bg-brand-green text-deep-navy border-black/10",
};

const GLYPHS: Record<MarqueeProps["bg"], string> = {
  red: "✦",
  blue: "★",
  green: "●",
  gold: "❖",
};

export default function Marquee({ text, bg, reverse }: MarqueeProps) {
  const glyph = GLYPHS[bg] || "✦";

  // Alternating solid and outlined typography per Crency specification
  const items = [
    { type: "solid", word: text },
    { type: "glyph", word: glyph },
    { type: "outline", word: text },
    { type: "glyph", word: glyph },
    { type: "solid", word: text },
    { type: "glyph", word: glyph },
    { type: "outline", word: text },
    { type: "glyph", word: glyph },
  ];

  return (
    <div
      data-cursor="drag"
      className={`relative w-full overflow-hidden py-3 md:py-4.5 ${BG_CLASS[bg]} border-y select-none shadow-sm transition-opacity hover:opacity-95`}
    >
      <div className={`marquee-track flex items-center ${reverse ? "reverse" : ""}`}>
        {[0, 1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 items-center gap-6 px-4 md:gap-8 md:px-6">
            {items.map((item, idx) => {
              if (item.type === "glyph") {
                return (
                  <span
                    key={idx}
                    className="text-lg sm:text-xl md:text-2xl font-bold opacity-75"
                    aria-hidden="true"
                  >
                    {item.word}
                  </span>
                );
              }

              if (item.type === "outline") {
                return (
                  <span
                    key={idx}
                    className="whitespace-nowrap font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-transparent transition-all duration-300 hover:text-deep-navy"
                    style={{
                      WebkitTextStroke: "2.2px #15072F",
                    }}
                  >
                    {item.word}
                  </span>
                );
              }

              return (
                <span
                  key={idx}
                  className="whitespace-nowrap font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-deep-navy"
                >
                  {item.word}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

