import HeroTitle from "@/components/hero-title";
import Navigation from "@/components/navigation";

export default function IntroPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center text-2xl sm:text-4xl">
      <section>
        <HeroTitle className="mb-2 text-4xl sm:mb-6 sm:text-6xl" />
        <Navigation />
      </section>
    </main>
  );
}
