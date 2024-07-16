import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serif: [
        "var(--font-charter)",
        "Charter",
        ...defaultTheme.fontFamily.serif,
      ],
      sans: [
        "var(--font-inter)",
        "Inter",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        ...defaultTheme.fontFamily.sans,
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
