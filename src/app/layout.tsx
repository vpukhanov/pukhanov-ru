import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
