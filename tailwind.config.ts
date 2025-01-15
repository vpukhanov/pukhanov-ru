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
        "Georgia",
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
        "stripe-movement": "stripe-movement 10s ease-in-out infinite alternate",
        wave: "wave 2.5s linear infinite",
        "rainbow-move": "rainbow-move 10s linear infinite",
      },
      keyframes: {
        "stripe-movement": {
          "0%, 100%": { transform: "scaleY(1) translateY(0)" },
          "50%": { transform: "scaleY(1.1) translateY(-10px)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%, 100%": { transform: "rotate(0deg)" },
        },
        "rainbow-move": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      backgroundImage: {
        rainbow:
          "linear-gradient(60deg, #ff5c5c, #ff9a4d, #ffe74c, #67e0a3, #4db4ff, #ab7cff, #ff5c5c)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
