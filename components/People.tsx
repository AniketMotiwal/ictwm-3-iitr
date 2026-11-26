import { CalendarCheck2, UserRound } from "lucide-react";
import { importantDates, speakers, committee } from "@/lib/siteData";
import { Reveal, SectionHeading } from "./ui";

export function ImportantDates() {
  return (
    <section id="important-dates" className="bg-eco-pattern py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Timeline"
          title="Important Dates"
          subtitle="Key milestones and deadlines for ICTWM 3.0."
        />
        <div className="relative">
          <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-gradient-to-b from-eco-500 via-navy-700 to-gold-500 md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-8">
            {importantDates.map((d, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={d.event} delay={i * 60}>
                  <li className="relative grid items-center md:grid-cols-2 md:gap-12">
                    <span
                      className={`absolute left-5 z-10 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full ring-4 ring-white md:left-1/2 ${
                        d.highlight ? "h-6 w-6 bg-gold-500" : "bg-eco-600"
                      }`}
                    />
                    <div className={`pl-12 md:pl-0 ${left ? "md:text-right" : "md:col-start-2"}`}>
                      <div
                        className={`inline-block w-full rounded-2xl p-5 shadow-lg transition hover:-translate-y-1 md:w-auto md:min-w-[18rem] ${
                          d.highlight
                            ? "bg-navy-700 text-white shadow-navy-700/30"
                            : "bg-white text-navy-800 shadow-navy-900/5 ring-1 ring-navy-100"
                        }`}
                      >
                        <div
                          className={`flex items-center gap-2 font-display text-lg font-bold ${
                            left ? "md:justify-end" : ""
                          } ${d.highlight ? "text-gold-500" : "text-eco-700"}`}
                        >
                          <CalendarCheck2 className="h-5 w-5" />
                          {d.date}
                        </div>
                        <p className={`mt-1 font-medium ${d.highlight ? "text-white" : "text-slate-700"}`}>
                          {d.event}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative mx-auto h-28 w-28">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold-500 via-eco-500 to-navy-700 p-[3px] transition duration-500 group-hover:rotate-180">
        <div className="h-full w-full rounded-full bg-white" />
      </div>
      <div className="absolute inset-[6px] flex items-center justify-center rounded-full bg-navy-50 text-navy-700">
        <UserRound className="h-12 w-12" aria-label={name} />
      </div>
    </div>
  );
}

export function Speakers() {
  return (
    <section id="speakers" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Distinguished Voices"
          title="Keynote & Invited Speakers"
          subtitle="Speakers will be announced soon. Stay tuned!"
        />
        <div className="grid grid-cols-1 gap-6 min-[440px]:grid-cols-2 lg:grid-cols-4">
          {speakers.map((s, i) => (
            <Reveal key={i} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-navy-100 bg-white p-6 text-center transition duration-300 hover:-translate-y-1.5 hover:border-gold-500 hover:shadow-xl hover:shadow-navy-900/10">
                <Avatar name={s.name} />
                <h3 className="mt-5 font-display text-base font-semibold text-navy-700">{s.name}</h3>
                <p className="mt-1 text-sm text-eco-700">{s.role}</p>
                <p className="text-xs text-slate-500">{s.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Committee() {
  return (
    <section id="committee" className="bg-navy-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Organisation" title="Committee" subtitle="The people behind ICTWM 3.0." />

        <h3 className="mb-6 text-center font-display text-xl font-semibold text-navy-700">Patrons</h3>
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {committee.patrons.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <PersonCard {...p} featured />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 mb-6 text-center font-display text-xl font-semibold text-navy-700">Organising Committee</h3>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {committee.chairs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <PersonCard {...p} />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-14 mb-6 text-center font-display text-xl font-semibold text-navy-700">
          International Advisory Board
        </h3>
        <Reveal>
          <ul className="grid gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-navy-100 sm:grid-cols-2 lg:grid-cols-4">
            {committee.advisory.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gold-500" />
                {a}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function PersonCard({ name, role, org, featured }: { name: string; role: string; org: string; featured?: boolean }) {
  return (
    <div
      className={`flex h-full items-center gap-4 rounded-2xl p-5 transition hover:-translate-y-1 hover:shadow-lg ${
        featured ? "bg-navy-700 text-white" : "bg-white ring-1 ring-navy-100"
      }`}
    >
      <span
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${
          featured ? "bg-gold-500 text-navy-900" : "bg-eco-100 text-eco-700"
        }`}
      >
        <UserRound className="h-7 w-7" />
      </span>
      <div className="min-w-0">
        <p className={`text-xs font-bold tracking-wider uppercase ${featured ? "text-gold-400" : "text-eco-600"}`}>
          {role}
        </p>
        <p className={`font-display font-semibold ${featured ? "text-white" : "text-navy-700"}`}>{name}</p>
        <p className={`text-sm ${featured ? "text-navy-100" : "text-slate-500"}`}>{org}</p>
      </div>
    </div>
  );
}
