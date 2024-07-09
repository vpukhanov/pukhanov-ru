import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Link from "next/link";

import Splash from "@/components/splash";

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
    "Senior frontend engineer promoted to team lead in 2024, working in the media projects department at T-Bank (formerly Tinkoff) on the T—J project, the leading media platform covering finance, life, and human experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        className={`bg-white text-slate-900 antialiased ${inter.variable} ${libreBaskerville.variable} font-sans`}
      >
        <div className="mx-auto max-w-2xl px-4 py-10">
          <header className="relative mb-12 text-lg tracking-tight">
            <Splash />
            <Link href="/" className="font-bold hover:underline">
              Vyacheslav Pukhanov
            </Link>
            <nav className="space-x-2">
              <Link href="/" className="underline">
                About
              </Link>
              <span>•</span>
              <Link href="/posts" className="underline">
                Blog
              </Link>
              <span>•</span>
              <Link href="/contributions" className="underline">
                Contributions
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-8 text-center text-xs">
            <div className="mb-1">
              © 2018–{new Date().getFullYear()} Vyacheslav Pukhanov
            </div>
            <a
              href="https://github.com/vpukhanov/pukhanov-ru/"
              target="_blank"
              className="text-slate-900 underline"
            >
              View Source Code
            </a>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
