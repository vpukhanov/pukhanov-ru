import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Link from "next/link";

import Flag from "@/components/flag";
import Splash from "@/components/splash";

import "./globals.css";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov",
  description:
    "I'm a Lead Frontend Engineer at Tinkoff, where we create the best media about finance, life and human experiences - Tinkoff Journal.",
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
        className={`bg-white text-slate-900 antialiased ${mulish.className}`}
      >
        <div className="mx-auto max-w-2xl px-4 py-10">
          <header className="relative mb-12 text-lg tracking-tight">
            <Splash />
            <div className="flex items-center justify-between">
              <Link href="/" className="font-bold hover:underline">
                Vyacheslav Pukhanov
              </Link>
              <Flag />
            </div>
            <nav className="space-x-4">
              <Link href="/" className="underline">
                About
              </Link>
              <span>/</span>
              <Link href="/posts" className="underline">
                Blog
              </Link>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-8 text-center text-xs">
            <div className="mb-2">
              &copy; 2018&mdash;{new Date().getFullYear()} Vyacheslav Pukhanov
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
