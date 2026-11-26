import Image from "next/image";
import { CheckCircle2, Megaphone } from "lucide-react";
import { aboutConference, aboutIITR, announcements } from "@/lib/siteData";
import { Reveal, SectionHeading } from "./ui";

export function Announcements() {
  const items = [...announcements, ...announcements];
  return (
    <div className="relative flex items-center overflow-hidden bg-gold-500 text-navy-900">
      <div className="z-10 flex shrink-0 items-center gap-2 bg-navy-700 px-4 py-3 text-sm font-bold text-gold-400 sm:px-6">
        <Megaphone className="h-4 w-4" />
        <span className="hidden sm:inline">Updates</span>
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 py-3 pl-6 text-sm font-semibold whitespace-nowrap hover:[animation-play-state:paused]">
          {items.map((a, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-eco-700" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="bg-eco-pattern py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Welcome"
          title={aboutConference.heading}
          subtitle="A global forum to turn waste into resources, energy and opportunity."
        />

        <div className="grid items-start gap-10 lg:grid-cols-5">
          <Reveal className="space-y-5 text-[15px] leading-relaxed text-slate-700 sm:text-base lg:col-span-3">
            {aboutConference.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="rounded-2xl border border-eco-100 bg-white p-6 shadow-xl shadow-eco-700/5 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-navy-700">Conference Highlights</h3>
              <ul className="mt-5 grid gap-3">
                {aboutConference.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-eco-600" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function AboutIITR() {
  return (
    <section id="about-iitr" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="absolute -top-4 -left-4 h-full w-full rounded-3xl border-2 border-gold-500" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={aboutIITR.image}
              alt="Historic Thomason College building, IIT Roorkee"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -right-2 -bottom-6 rounded-2xl bg-navy-700 px-6 py-4 text-white shadow-xl sm:-right-6">
            <div className="font-display text-3xl font-bold text-gold-500">Est. 1847</div>
            <div className="text-xs text-navy-100">Asia&apos;s oldest engineering institution</div>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="The Host Institute" title={aboutIITR.heading} center={false} />
          <Reveal className="-mt-6 space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            {aboutIITR.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
          <Reveal delay={150} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutIITR.stats.map((s) => (
              <div key={s.label} className="rounded-xl bg-navy-50 p-4 text-center">
                <div className="font-display text-2xl font-bold text-navy-700">{s.value}</div>
                <div className="mt-1 text-xs text-slate-600">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
