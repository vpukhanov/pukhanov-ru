"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import Navigation from "./navigation";
import Splash from "./splash";

export default function DynamicLayout({ children }: { children: ReactNode }) {
  const isIndexPage = usePathname() === "/";
  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col px-4 py-10">
      {!isIndexPage && (
        <header className="relative mb-10 text-lg">
          <Splash />
          <Link href="/" className="font-bold hover:underline">
            Vyacheslav Pukhanov
          </Link>
          <Navigation />
        </header>
      )}
      {isIndexPage ? children : <main>{children}</main>}
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
  );
}
