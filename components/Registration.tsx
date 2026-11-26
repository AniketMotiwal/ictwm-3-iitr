import { CreditCard, Download, Info } from "lucide-react";
import { conference, fees } from "@/lib/siteData";
import { Reveal, SectionHeading } from "./ui";

export default function Registration() {
  return (
    <section id="registration" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Join Us"
          title="Registration Fees"
          subtitle="All authors and co-authors presenting at the conference must register individually."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-navy-900/5 ring-1 ring-navy-100">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="bg-navy-700 text-white">
                      {fees.columns.map((c, i) => (
                        <th key={c} className={`px-5 py-4 font-display font-semibold ${i > 0 ? "text-center" : ""}`}>
                          {c}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fees.rows.map((r, i) => (
                      <tr key={i} className="border-t border-navy-100 odd:bg-white even:bg-navy-50/50 hover:bg-eco-50">
                        {r.map((cell, j) => (
                          <td
                            key={j}
                            className={`px-5 py-4 ${
                              j === 0 ? "font-medium text-navy-800" : "text-center font-semibold text-eco-700"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-slate-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
              {fees.note}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="h-full rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 p-7 text-white shadow-xl">
              <h3 className="font-display text-xl font-semibold">How to Register</h3>
              <ol className="mt-6 space-y-5">
                {fees.steps.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-sm font-bold text-navy-900">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-sm text-navy-100">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8 grid gap-3">
                <a
                  href={conference.registerUrl}
                  className="flex items-center justify-center gap-2 rounded-full bg-gold-500 py-3 font-semibold text-navy-900 transition hover:bg-gold-400"
                >
                  <CreditCard className="h-4 w-4" /> Register & Pay
                </a>
                <a
                  href={conference.brochureUrl}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/30 py-3 font-semibold transition hover:border-gold-400 hover:text-gold-400"
                >
                  <Download className="h-4 w-4" /> Download Brochure
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
