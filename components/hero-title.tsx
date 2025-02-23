export default function HeroTitle({ className = "" }: { className?: string }) {
  return (
    <h1
      className={`bg-rainbow animate-rainbow-move bg-[length:200%_auto] bg-clip-text pb-[0.1em] font-bold text-transparent ${className}`}
    >
      Hi! My name
      <br />
      is Vyacheslav{" "}
      <span className="animate-wave inline-block origin-[70%_70%] text-[initial]">
        👋🏻
      </span>
    </h1>
  );
}
