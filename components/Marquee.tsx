type MarqueeProps = {
  text: string;
  bg: "gold" | "red" | "blue" | "green";
  reverse?: boolean;
};

const BG_CLASS: Record<MarqueeProps["bg"], string> = {
  gold: "bg-gold",
  red: "bg-red",
  blue: "bg-blue",
  green: "bg-green",
};

export default function Marquee({ text, bg, reverse }: MarqueeProps) {
  const repeated = Array.from({ length: 3 }, () => text).join("  ×  ");

  return (
    <div className={`overflow-hidden py-3 ${BG_CLASS[bg]}`}>
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {[0, 1].map((i) => (
          <span
            key={i}
            className="text-outline whitespace-nowrap px-4 font-display text-5xl font-bold uppercase tracking-tight md:text-7xl"
            style={{ WebkitTextStrokeColor: "#0A0A0A" }}
          >
            {repeated}
          </span>
        ))}
      </div>
    </div>
  );
}
