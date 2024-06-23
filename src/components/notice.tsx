"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";

export default function Notice({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const [visibility, setVisibility] = useState("hidden");

  useEffect(() => {
    if (localStorage.getItem(`${id}-notice-hidden`) !== "true") {
      setVisibility("visible");
    }
  }, [id]);

  const onHide = useCallback(() => {
    setVisibility("hidden");
    localStorage.setItem(`${id}-notice-hidden`, "true");
  }, [id]);

  return (
    <div
      className={`relative mx-auto mb-12 max-w-md -rotate-3 rounded-xl bg-amber-100 p-6 text-sky-700 transition-transform hover:rotate-0 ${visibility}`}
    >
      {children}
      <button
        className="absolute right-0 top-0 block p-2 text-lg font-bold"
        onClick={onHide}
      >
        X
      </button>
    </div>
  );
}
