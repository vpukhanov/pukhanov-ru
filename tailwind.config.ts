import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: ["Charter", "Georgia", "Times New Roman", "Times", "serif"],
      sans: [
        "var(--font-inter)",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
