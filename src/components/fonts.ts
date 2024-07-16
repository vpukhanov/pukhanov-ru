import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Sans for headings and UI
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Serif for prose
export const charter = localFont({
  src: [
    {
      path: "./fonts/itc-charter_regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/itc-charter_italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/itc-charter_bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/itc-charter_bold-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/itc-charter_black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/itc-charter_black-italic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-charter",
});
