import Image from "next/image";

import image from "./not-found.webp";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-4">
      <Image
        src={image}
        priority
        width={400}
        alt="A tumbleweed representing that if there this page has ever existed, it's definitely not here now"
        className="animate-spin-slow"
      />
      <h2 className="text-8xl font-bold tracking-widest" title="404">
        4 🥲 4
      </h2>
    </div>
  );
}
