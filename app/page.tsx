import Link from "next/link";

import HeroTitle from "@/components/hero-title";
import AtIcon from "@/components/icons/at";
import TelegramIcon from "@/components/icons/telegram";
import Navigation from "@/components/navigation";

export default function IntroPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-2xl sm:text-4xl">
      <section>
        <HeroTitle className="mb-2 text-4xl sm:mb-6 sm:text-6xl" />
        <Navigation className="mb-2 pb-[0.1em] sm:mb-6" />
        <Link
          href="mailto:vyacheslav@pukhanov.ru"
          target="_blank"
          className="mb-1 flex items-center gap-3"
          title="Email me at vyacheslav@pukhanov.ru"
        >
          <AtIcon className="mt-1 h-6 w-6 sm:mt-2 sm:h-8 sm:w-8" />
          <span className="underline">vyacheslav@pukhanov.ru</span>
        </Link>
        <Link
          href="https://t.me/vpukhanov"
          target="_blank"
          className="mb-1 flex items-center gap-3"
          title="Send me a message on Telegram @vpukhanov"
        >
          <TelegramIcon className="mt-1 h-6 w-6 sm:mt-2 sm:h-8 sm:w-8" />
          <span className="underline">@vpukhanov</span>
        </Link>
      </section>
    </main>
  );
}
