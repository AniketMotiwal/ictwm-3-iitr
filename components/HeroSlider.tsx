"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, CalendarDays, MapPin, Globe2, ArrowRight } from "lucide-react";
import { conference, heroSlides } from "@/lib/siteData";
import Countdown from "./Countdown";

const INTERVAL = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const go = useCallback((i: number) => setIndex((i + count) % count), [count]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-navy-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {heroSlides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 -z-20 transition-opacity duration-[1400ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.caption}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === index ? "animate-kenburns" : ""}`}
          />
        </div>
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-4 pt-14 pb-24 sm:px-6 lg:py-24">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold-400 uppercase backdrop-blur sm:text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-eco-500" />
            {conference.edition}
          </span>

          <p className="mt-6 font-display text-sm font-semibold tracking-[0.25em] text-navy-100 uppercase sm:text-base">
            International Conference on
          </p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
            <span className="text-gradient-gold">{conference.titleLine1}</span>
          </h1>
          <p className="mt-3 font-display text-xl font-semibold text-white sm:text-3xl">
            {conference.titleLine2}{" "}
            <span className="rounded-lg bg-eco-600 px-2 py-0.5 text-lg align-middle sm:text-2xl">3.0</span>
          </p>
          <p className="mt-5 max-w-2xl text-base text-navy-100 sm:text-lg">{conference.tagline}</p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm">
            <Chip icon={<CalendarDays className="h-4 w-4" />}>{conference.dates}</Chip>
            <Chip icon={<MapPin className="h-4 w-4" />}>{conference.venueShort}</Chip>
            <Chip icon={<Globe2 className="h-4 w-4" />}>{conference.mode}</Chip>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={conference.registerUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 font-semibold text-navy-900 shadow-lg shadow-gold-500/30 transition hover:-translate-y-0.5 hover:bg-gold-400"
            >
              Register Now
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={conference.submitUrl}
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:border-gold-400 hover:text-gold-400"
            >
              Submit Abstract
            </a>
          </div>

          <div className="mt-10">
            <Countdown target={conference.startDateISO} />
          </div>
        </div>
      </div>

      {/* Caption + controls */}
      <div className="absolute inset-x-0 bottom-5 mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <p className="hidden text-xs text-white/70 sm:block">
          <span className="mr-2 inline-block h-px w-6 bg-gold-500 align-middle" />
          {heroSlides[index].caption}
        </p>
        <div className="ml-auto flex items-center gap-3">
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-gold-500" : "w-2 bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="rounded-full border border-white/30 p-2 text-white backdrop-blur transition hover:bg-white/15"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="rounded-full border border-white/30 p-2 text-white backdrop-blur transition hover:bg-white/15"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2 text-white backdrop-blur">
      <span className="text-gold-400">{icon}</span>
      {children}
    </span>
  );
}
