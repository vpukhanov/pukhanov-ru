import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";

import DynamicLayout from "@/components/dynamic-layout";
import { charis, inter } from "@/components/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov",
  description:
    "Staff engineer and frontend tech lead in the media projects department at T-Bank (formerly Tinkoff), working on Т—Ж, the leading Russian media platform about finance, daily life, and personal stories.",
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
        className={`bg-white font-sans text-gray-950 antialiased dark:bg-black dark:text-gray-50 ${inter.variable} ${charis.variable}`}
      >
        <DynamicLayout>{children}</DynamicLayout>
        <Analytics />
      </body>
    </html>
  );
}
