type StickerBadgeProps = {
  label: string;
  shape?: "starburst" | "pill" | "ribbon";
  rotation?: number;
  bg?: string;
  textColor?: string;
  className?: string;
  /** True if this stat is unverified — renders a dev-only visual flag per §23 */
  unverified?: boolean;
};

/**
 * Floating sticker badge for trust/stat callouts (plan §4A, §8).
 * NOTE: any badge using real numbers must be replaced with verified data
 * before launch (§23 Content & Asset Rules). unverified=true adds a visible
 * dev marker so placeholder stats are never mistaken for production content.
 */
export function StickerBadge({
  label,
  shape = "pill",
  rotation = -4,
  bg = "var(--gold)",
  textColor = "#0A0A0A",
  className = "",
  unverified = false,
}: StickerBadgeProps) {
  const shapeClass =
    shape === "starburst" ? "rounded-[38%_62%_63%_37%/41%_44%_56%_59%]" : shape === "ribbon" ? "rounded-md" : "rounded-2xl";

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center px-4 py-3 text-center text-xs font-semibold leading-tight shadow-lg ${shapeClass} ${className}`}
      style={{ backgroundColor: bg, color: textColor, transform: `rotate(${rotation}deg)` }}
    >
      {label}
      {unverified && (
        <span className="absolute -top-2 -right-2 rounded-full bg-red px-1.5 py-0.5 text-[9px] font-bold text-cream">
          VERIFY
        </span>
      )}
    </div>
  );
}

type ConnectorProps = {
  /** SVG path 'd' attribute for the dotted connector line */
  path: string;
  color?: string;
  className?: string;
};

/** Dotted connector line with circular end-nodes, linking two stickers/headline words. */
export function DottedConnector({ path, color = "var(--gold)", className = "" }: ConnectorProps) {
  return (
    <svg
      viewBox="0 0 300 120"
      className={`pointer-events-none absolute ${className}`}
      aria-hidden="true"
    >
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="1 8"
        strokeLinecap="round"
      />
    </svg>
  );
}
