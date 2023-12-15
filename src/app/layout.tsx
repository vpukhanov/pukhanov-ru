import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import Link from "next/link";

import Flag from "@/components/flag";

import "./globals.css";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Вячеслав Пуханов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
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
          <header className="mb-12 text-lg tracking-tight">
            <div className="flex items-center justify-between">
              <Link href="/" className="font-bold hover:underline">
                Вячеслав Пуханов
              </Link>
              <Flag />
            </div>
            <nav className="space-x-4">
              <Link href="/" className="underline">
                Обо мне
              </Link>
              <span>/</span>
              <Link href="/posts" className="underline">
                Блог
              </Link>
              <span>/</span>
              <Link href="/feed" className="underline">
                Лента
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
