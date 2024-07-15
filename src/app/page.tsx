import Navigation from "@/components/navigation";

export default function IntroPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <section>
        <h1 className="mb-2 text-4xl font-bold sm:mb-4 sm:text-6xl">
          Hi! My name
          <br />
          is Vyacheslav 👋🏻
        </h1>
        <Navigation className="text-2xl sm:text-4xl" />
      </section>
    </main>
  );
}
