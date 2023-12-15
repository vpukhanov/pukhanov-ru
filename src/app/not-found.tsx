import Image from "next/image";

import image from "./not-found.webp";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[60vh] justify-center items-center gap-4">
      <Image
        src={image}
        priority
        width={400}
        alt="Перекати-поле, олицетворяющее что если по этой ссылке когда-то что-то и было, то теперь этого здесь точно нет"
        className="animate-spin-slow"
      />
      <h2 className="text-8xl font-bold tracking-widest" title="404">
        4 🥲 4
      </h2>
    </div>
  );
}
