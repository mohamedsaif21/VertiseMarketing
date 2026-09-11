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
export default function WaveDivider({ fill, flip = false }: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none relative h-24 w-full overflow-hidden md:h-32 ${
        flip ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0,40 C 320,140 720,140 1440,20 L1440,160 L0,160 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
