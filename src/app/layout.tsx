import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Вячеслав Пуханов",
  description:
    "Я — ведущий фронтенд-разработчик в Тинькофф, где мы создаем лучшее медиа о финансах, жизни и всем на свете — Тинькофф Журнал. Это личный сайт, где я выражаю исключительно свои мнения и взгляды.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body
        className={`bg-white text-slate-900 antialiased ${mulish.className}`}
      >
        <div className="mx-auto max-w-2xl px-2 py-10">
          <header className="mb-10 flex items-center justify-between text-xl">
            <Link href="/" className="font-bold">
              Вячеслав Пуханов
            </Link>
            <nav className="space-x-6">
              <Link href="/">Обо мне</Link>
              <Link href="/posts/">Блог</Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
