import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#FAFAFD",
          soft: "#F3F4F9",
          surface: "#FFFFFF",
          ink: "#15151F",
          ink2: "#2C2C3A",
          muted: "#6A6A7B",
          muted2: "#9A9AAB",
          violet: "#7C3AED",
          indigo: "#4F46E5",
          blue: "#2563EB",
          pink: "#EC4899",
          cyan: "#06B6D4",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #7C3AED 0%, #4F46E5 42%, #EC4899 100%)",
        "radial-glow": "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)",
      },
      boxShadow: {
        "brand-sm": "0 4px 18px -8px rgba(60, 40, 120, 0.18)",
        brand: "0 24px 60px -24px rgba(60, 40, 120, 0.28)",
        "brand-glow": "0 10px 30px -10px rgba(124, 58, 237, 0.55)",
      },
      animation: {
        shimmer: "shimmer 7s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
