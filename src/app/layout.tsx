import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ReactNode } from "react";

import DynamicLayout from "@/components/dynamic-layout";
import { charter, inter } from "@/components/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vyacheslav Pukhanov",
  description:
    "Senior frontend engineer promoted to tech lead in 2024, working in the media projects department at T-Bank (formerly Tinkoff) on the Т—Ж project, the leading media platform covering finance, life, and human experiences.",
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
        <DynamicLayout>{children}</DynamicLayout>
        <Analytics />
      </body>
    </html>
  );
}
