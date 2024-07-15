import Link from "next/link";
import { ReactNode } from "react";

import Navigation from "@/components/navigation";
import Splash from "@/components/splash";

export default function LayoutWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <header className="mb-10 text-lg">
        <Splash />
        <Link href="/" className="font-bold hover:underline">
          Vyacheslav Pukhanov
        </Link>
        <Navigation />
      </header>
      <main className="flex flex-1">{children}</main>
    </>
  );
}
