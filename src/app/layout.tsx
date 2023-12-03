import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const mulish = Mulish({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Вячеслав Пуханов",
  description:
    "Я — ведущий фронтенд-разработчик в Тинькофф, где мы создаем лучшее медиа о финансах, жизни и опыте — Тинькофф Журнал. Это личный сайт, где я выражаю исключительно свои мнения и взгляды.",
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
          <header className="mb-12 flex items-center justify-between text-lg">
            <Link href="/" className="font-bold hover:underline">
              Вячеслав Пуханов
            </Link>
            <nav className="space-x-4">
              <Link href="/" className="underline">
                Обо мне
              </Link>
              <span>/</span>
              <Link href="/posts" className="underline">
                Блог
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
