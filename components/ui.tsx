"use client";

import { useEffect, useRef } from "react";

/** Fades/slides children in when scrolled into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  center = true,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={`mb-12 ${center ? "mx-auto max-w-3xl text-center" : ""}`}>
      <p
        className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase sm:text-sm ${
          light ? "text-gold-400" : "text-eco-600"
        }`}
      >
        <span className={`h-0.5 w-6 ${light ? "bg-gold-500" : "bg-eco-500"}`} />
        {eyebrow}
        <span className={`h-0.5 w-6 ${light ? "bg-gold-500" : "bg-eco-500"}`} />
      </p>
      <h2
        className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-navy-700"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? "text-navy-100" : "text-slate-600"}`}>{subtitle}</p>
      )}
    </Reveal>
  );
}
