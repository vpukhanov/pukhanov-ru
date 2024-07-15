import Link from "next/link";
import { ReactNode } from "react";

export default function LayoutWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className="mb-10 text-lg">
        <Link href="/" className="font-bold hover:underline">
          Vyacheslav Pukhanov
        </Link>
        <nav className="flex gap-1">
          <Link href="/cv" className="underline">
            CV
          </Link>
          <span>•</span>
          <Link href="/posts" className="underline">
            Posts
          </Link>
          <span>•</span>
          <Link href="/contributions" className="underline">
            Contributions
          </Link>
        </nav>
      </header>
      <main className="flex flex-1">{children}</main>
    </>
  );
}
