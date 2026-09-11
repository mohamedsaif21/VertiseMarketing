import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",       // primary dark background
        cream: "#F5F3F0",     // off-white text
        gold: "#F4B400",      // primary accent (was lime in Crency)
        red: "#E8392B",       // secondary accent
        blue: "#3457D5",      // tertiary accent
        green: "#34A853",     // quaternary accent
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl2: "1.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
