import {
  Trash2, Recycle, Flame, Package, Cpu, Droplets, Sun, Wheat, Landmark, Target, Users, type LucideIcon,
} from "lucide-react";
import { themes, objectives, whoShouldAttend } from "@/lib/siteData";
import { Reveal, SectionHeading } from "./ui";

const icons: Record<string, LucideIcon> = { Trash2, Recycle, Flame, Package, Cpu, Droplets, Sun, Wheat, Landmark };

export function Themes() {
  return (
    <section id="themes" className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-eco-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Conference Tracks"
          title="Themes & Sub-themes"
          subtitle="Original contributions are invited (but not limited to) the following thematic tracks."
          light
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {themes.map((t, i) => {
            const Icon = icons[t.icon] ?? Recycle;
            return (
              <Reveal key={t.title} delay={(i % 3) * 100}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-gold-500/50 hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-eco-500 to-eco-700 text-white shadow-lg shadow-eco-700/40 transition group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-xs font-bold text-gold-500">TRACK {String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display text-lg leading-snug font-semibold text-white">{t.title}</h3>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-navy-100">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ObjectivesAudience() {
  return (
    <section id="objectives" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Why we meet" title="Objectives" center={false} />
          <ol className="-mt-4 space-y-4">
            {objectives.map((o, i) => (
              <Reveal key={i} delay={i * 80}>
                <li className="flex gap-4 rounded-xl border border-navy-100 bg-navy-50/60 p-4 transition hover:border-eco-500 hover:bg-eco-50">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-700 font-display text-sm font-bold text-gold-500">
                    {i + 1}
                  </span>
                  <p className="text-slate-700">{o}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="Participants" title="Who Should Attend?" center={false} />
          <div className="-mt-4 grid gap-3 sm:grid-cols-2">
            {whoShouldAttend.map((w, i) => (
              <Reveal key={w} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-eco-50 to-white p-4 shadow-sm ring-1 ring-eco-100 transition hover:shadow-md">
                  <Users className="h-5 w-5 shrink-0 text-eco-600" />
                  <span className="font-medium text-navy-800">{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-6 flex items-start gap-4 rounded-2xl bg-navy-700 p-6 text-white">
              <Target className="h-8 w-8 shrink-0 text-gold-500" />
              <p className="text-sm leading-relaxed text-navy-100">
                <span className="font-semibold text-white">Why attend? </span>
                Network with global experts, present your research to a multidisciplinary audience, discover
                deployable technologies and shape the policy conversation on India&apos;s circular-economy transition.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
