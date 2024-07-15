import Link from "next/link";

import HeroTitle from "@/components/hero-title";
import AtIcon from "@/components/icons/at";
import Navigation from "@/components/navigation";

export default function IntroPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-2xl sm:text-4xl">
      <section>
        <HeroTitle className="mb-2 text-4xl sm:mb-6 sm:text-6xl" />
        <Navigation className="mb-2 sm:mb-6" />
        <Link
          href="mailto:vyacheslav@pukhanov.ru"
          target="_blank"
          className="flex items-center gap-2"
        >
          <AtIcon className="mt-1 h-6 w-6 sm:mt-2 sm:h-8 sm:w-8" />
          <span className="underline">vyacheslav@pukhanov.ru</span>
        </Link>
      </section>
    </main>
  );
}
