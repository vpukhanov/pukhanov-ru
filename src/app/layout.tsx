import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";

import { charter, inter } from "@/components/fonts";

import "./globals.css";

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
        className={`bg-white font-sans text-gray-950 antialiased dark:bg-black dark:text-gray-50 ${inter.variable} ${charter.variable}`}
      >
        <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-10">
          {children}
          <footer className="mt-10 text-center text-sm">
            © 2018-{new Date().getFullYear()} Vyacheslav Pukhanov.{" "}
            <Link
              href="https://github.com/vpukhanov/pukhanov-ru"
              target="_blank"
              className="underline"
            >
              View Source
            </Link>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
