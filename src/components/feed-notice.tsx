"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function FeedNotice() {
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    if (localStorage.getItem("feed-notice-hidden") !== "true") {
      setVisibility("visible");
    }
  }, []);

  const onHide = useCallback(() => {
    setVisibility("hidden");
    localStorage.setItem("feed-notice-hidden", "true");
  }, []);

  return (
    <div
      className={`relative mx-auto mb-12 max-w-md -rotate-3 rounded-xl bg-amber-100 p-6 text-sky-700 transition-transform hover:rotate-0 ${visibility}`}
    >
      В ленте я публикую ссылки на контент других людей. На нее тоже можно{" "}
      <Link href="/feed/feed.xml">
        <span className="underline">подписаться по RSS</span>&nbsp;🌐
      </Link>
      <button
        className="absolute right-0 top-0 block p-2 text-lg font-bold"
        onClick={onHide}
      >
        X
      </button>
    </div>
  );
}
