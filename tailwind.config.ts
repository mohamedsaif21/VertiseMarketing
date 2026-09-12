import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors (Exact Logo Colors)
        "brand-red": "#EA4335",
        "brand-yellow": "#FBBC05",
        "brand-green": "#34A853",
        "brand-blue": "#4285F4",

        // Supporting Theme Surfaces
        "deep-navy": "#15072F",      // Major dark backgrounds
        "dark-navy": "#1A0B3D",      // Elevated dark surfaces & inputs
        "soft-lavender": "#D3C5F6",  // Wave dividers, separators & subtle accents
        "light-lavender": "#EEE9FC", // Large light sections
        "pure-white": "#FDFBFF",     // Cards & content surfaces on light sections
        "muted-text": "#6F6685",     // Muted secondary text on light sections

        // Aliases for unified consistency across existing components
        red: "#EA4335",
        gold: "#FBBC05",
        yellow: "#FBBC05",
        green: "#34A853",
        blue: "#4285F4",
        midnight: "#15072F",
        obsidian: "#15072F",
        navy: "#15072F",
        darknavy: "#1A0B3D",
        amethyst: "#1A0B3D",
        lavender: "#EEE9FC",
        lavenderLight: "#EEE9FC",
        softblue: "#EEE9FC",
        cream: "#FDFBFF",
        ink: "#15072F",
        deepink: "#15072F",
      },
      fontFamily: {
        display: ["var(--font-body)", "Manrope", "sans-serif"],
        body: ["var(--font-body)", "Manrope", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
