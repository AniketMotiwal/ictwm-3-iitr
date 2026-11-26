"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor((ms / 3_600_000) % 24),
    Minutes: Math.floor((ms / 60_000) % 60),
    Seconds: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown({ target }: { target: string }) {
  const t = new Date(target).getTime();
  const [left, setLeft] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setLeft(diff(t));
    const id = setInterval(() => setLeft(diff(t)), 1000);
    return () => clearInterval(id);
  }, [t]);

  const items = left ?? { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 };

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3" aria-live="off">
      {Object.entries(items).map(([label, value]) => (
        <div
          key={label}
          className="min-w-[4.5rem] rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-center backdrop-blur sm:min-w-[5.5rem] sm:px-4 sm:py-3"
        >
          <div className="font-display text-2xl font-bold text-white tabular-nums sm:text-3xl">
            {String(value).padStart(2, "0")}
          </div>
          <div className="text-[10px] font-medium tracking-widest text-gold-400 uppercase sm:text-xs">{label}</div>
        </div>
      ))}
    </div>
  );
}
