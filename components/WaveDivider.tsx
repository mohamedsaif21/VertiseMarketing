type WaveDividerProps = {
  /** Color the curve fills toward — should match the section BELOW the divider */
  fill: string;
  /** Flip for a divider going light-to-dark instead of dark-to-light */
  flip?: boolean;
};

/**
 * Static SVG wave divider between sections (plan §4A).
 * Deliberately NOT scroll-animated — the "merge" effect comes from
 * layout/scroll-past positioning, not continuous recalculation (§21 perf).
 */
export default function WaveDivider({ fill = "#D3C5F6", flip = false }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none relative -mb-1 h-24 w-full overflow-hidden md:h-36 ${
        flip ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 2315 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M-6 6 L311 47 C499 75 918 131 1092 121 C1309 108 1770 18 1987 6 C2205 -7 2373 6 2418 6 L2315 160 L0 160 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
