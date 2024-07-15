import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

// Sans for headings and UI
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Serif for prose
const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville",
});

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov",
  description:
    "Senior frontend engineer promoted to team lead in 2024, working in the media projects department at T-Bank (formerly Tinkoff) on the Т—Ж project, the leading media platform covering finance, life, and human experiences.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="alternate"
          type="application/atom+xml"
          href="/posts/feed.xml"
        />
      </head>
      <body
        className={`bg-white font-sans text-black antialiased ${inter.variable} ${libreBaskerville.variable}`}
      >
        <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-10">
          {children}
          <footer className="mt-10 text-center text-sm">
            © 2018-{new Date().getFullYear()} Vyacheslav Pukhanov
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
