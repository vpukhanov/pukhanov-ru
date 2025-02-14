import { Inter, Charis_SIL } from "next/font/google";

// Sans for headings and UI
export const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

// Serif for prose
export const charis = Charis_SIL({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-charis",
});
