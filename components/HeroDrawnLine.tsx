"use client";

export default function HeroDrawnLine() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-full w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-70"
    >
      <svg
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Glowing blurred background line */}
        <path
          d="M 50 320 C 300 380, 450 80, 600 200 C 750 320, 900 60, 1150 180"
          stroke="#D3C5F6"
          strokeWidth="6"
          strokeOpacity="0.25"
          className="blur-md"
        />
        {/* Animated sharp foreground stroke */}
        <path
          d="M 50 320 C 300 380, 450 80, 600 200 C 750 320, 900 60, 1150 180"
          stroke="url(#drawnLineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="animate-draw-stroke"
        />
        {/* Subtle Decorative Brand Accent Circles */}
        <circle cx="380" cy="220" r="4" fill="#EA4335" />
        <circle cx="600" cy="200" r="4" fill="#FBBC05" />
        <circle cx="780" cy="260" r="4" fill="#34A853" />
        <circle cx="950" cy="110" r="4" fill="#4285F4" />

        <defs>
          <linearGradient id="drawnLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA4335" stopOpacity="0.8" />
            <stop offset="33%" stopColor="#FBBC05" stopOpacity="0.8" />
            <stop offset="66%" stopColor="#34A853" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#4285F4" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
