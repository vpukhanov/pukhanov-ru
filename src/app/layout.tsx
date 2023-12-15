import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Flag from "@/components/flag";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
          <header className="mb-12 flex items-center text-lg tracking-tight">
            <Link href="/" className="font-bold hover:underline">
              Вячеслав Пуханов
            </Link>
            <nav className="ml-auto space-x-4">
              <Link href="/" className="underline">
                CV
              </Link>
              <span>/</span>
              <Link href="/posts" className="underline">
                Блог
              </Link>
            </nav>
            <Flag />
          </header>
          <main>{children}</main>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
