"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Mail, Phone, CalendarDays, MapPin } from "lucide-react";
import { conference, navLinks } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* Top info strip */}
      <div className="hidden bg-navy-900 text-xs text-navy-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-gold-500" /> {conference.dates}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-gold-500" /> {conference.venueShort}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${conference.email}`} className="flex items-center gap-1.5 hover:text-gold-400">
              <Mail className="h-3.5 w-3.5 text-gold-500" /> {conference.email}
            </a>
            <a href={`tel:${conference.phone.replace(/\s/g, "")}`} className="flex items-center gap-1.5 hover:text-gold-400">
              <Phone className="h-3.5 w-3.5 text-gold-500" /> {conference.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-navy-100 bg-white/95 shadow-lg shadow-navy-900/5 backdrop-blur"
            : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/iitr-logo.svg"
              alt="IIT Roorkee logo"
              width={56}
              height={56}
              priority
              className="h-11 w-11 shrink-0 sm:h-14 sm:w-14"
            />
            <span className="hidden h-10 w-px bg-navy-100 sm:block" />
            <Image
              src="/images/conference-logo.svg"
              alt="ICTWM 3.0 logo"
              width={44}
              height={44}
              className="hidden h-10 w-10 shrink-0 sm:block"
            />
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-base font-bold text-navy-700 sm:text-lg">
                {conference.shortName}
              </span>
              <span className="block truncate text-[11px] font-medium text-slate-500 sm:text-xs">
                IIT Roorkee · {conference.dates}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === l.href ? "text-navy-700" : "text-slate-600 hover:text-navy-700"
                }`}
              >
                {l.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-transform duration-300 ${
                    active === l.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={conference.registerUrl}
              className="hidden rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 shadow-md shadow-gold-500/30 transition hover:-translate-y-0.5 hover:bg-gold-400 sm:inline-block"
            >
              Register Now
            </a>
            <button
              onClick={() => setOpen(true)}
              className="rounded-lg p-2 text-navy-700 hover:bg-navy-50 xl:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-navy-950/60 backdrop-blur-sm transition-opacity xl:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-navy-900 text-white shadow-2xl transition-transform duration-300 xl:hidden ${
          open ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <span className="font-display text-lg font-bold text-gold-500">{conference.shortName}</span>
          <button onClick={() => setOpen(false)} className="rounded-lg p-2 hover:bg-white/10" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                active === l.href ? "bg-white/10 text-gold-400" : "text-navy-100 hover:bg-white/5"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="border-t border-white/10 p-4">
          <a
            href={conference.registerUrl}
            onClick={() => setOpen(false)}
            className="block rounded-full bg-gold-500 py-3 text-center font-semibold text-navy-900"
          >
            Register Now
          </a>
          <p className="mt-3 text-center text-xs text-navy-100/70">{conference.dates} · IIT Roorkee</p>
        </div>
      </aside>
    </>
  );
}
