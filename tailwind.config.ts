import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          950: "#061108",
          900: "#09190c",
          850: "#0d2412",
          800: "#123219",
          700: "#1a4724",
        },
        brass: {
          300: "#f0d771",
          400: "#d7b94a",
          500: "#be9a2e",
        },
        reed: "#b7c3a1",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
      },
      boxShadow: {
        glow: "0 24px 80px rgba(215, 185, 74, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
