import Image from "next/image";
import { Plane, TrainFront, Bus, MapPin, Mail, Phone, Send } from "lucide-react";
import { conference, venue, contacts, footerLinks, navLinks } from "@/lib/siteData";
import { Reveal, SectionHeading } from "./ui";

const modeIcons = [Plane, TrainFront, Bus];

export function Venue() {
  return (
    <section id="venue" className="bg-eco-pattern py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Getting There" title={venue.heading} subtitle={venue.address} />
        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-navy-100 sm:aspect-video lg:aspect-auto lg:h-full lg:min-h-[380px]">
              <iframe
                src={venue.mapEmbed}
                title="Map of IIT Roorkee"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <div className="space-y-4 lg:col-span-2">
            {venue.howToReach.map((h, i) => {
              const Icon = modeIcons[i] ?? MapPin;
              return (
                <Reveal key={h.mode} delay={i * 100}>
                  <div className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-eco-100 transition hover:shadow-md">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-700 text-gold-500">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display font-semibold text-navy-700">{h.mode}</h3>
                      <p className="mt-1 text-sm text-slate-600">{h.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
            <Reveal delay={300}>
              <div className="relative h-40 overflow-hidden rounded-2xl">
                <Image src="/images/campus/architecture.jpg" alt="Architecture & Planning building, IIT Roorkee" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-900/80 to-transparent p-4">
                  <p className="text-sm font-medium text-white">A green 365-acre campus on the Upper Ganga Canal</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Get in Touch" title="Contact Us" subtitle="Reach the Conference Secretariat for any queries." />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contacts.map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl border-l-4 border-gold-500 bg-navy-50 p-6">
                  <p className="text-xs font-bold tracking-wider text-eco-600 uppercase">{c.role}</p>
                  <p className="mt-1 font-display text-lg font-semibold text-navy-700">{c.name}</p>
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-3 flex items-center gap-2 text-sm text-slate-700 hover:text-navy-700">
                    <Phone className="h-4 w-4 text-eco-600" /> {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="mt-1 flex items-center gap-2 text-sm break-all text-slate-700 hover:text-navy-700">
                    <Mail className="h-4 w-4 shrink-0 text-eco-600" /> {c.email}
                  </a>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="flex items-start gap-3 rounded-2xl bg-eco-50 p-6 text-sm text-slate-700 ring-1 ring-eco-100">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-eco-600" />
                <span>
                  <span className="font-semibold text-navy-700">Conference Secretariat</span>
                  <br />
                  {venue.address}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            {/* Front-end only form: opens the user's mail client */}
            <form
              action={`mailto:${conference.email}`}
              method="post"
              encType="text/plain"
              className="rounded-2xl bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-navy-100 sm:p-8"
            >
              <h3 className="font-display text-xl font-semibold text-navy-700">Send an Enquiry</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Full Name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Affiliation" name="affiliation" className="sm:col-span-2" />
                <label className="sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="mt-1.5 w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm outline-none transition focus:border-eco-500 focus:bg-white focus:ring-4 focus:ring-eco-100"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy-700 py-3.5 font-semibold text-white transition hover:bg-navy-600 sm:w-auto sm:px-8"
              >
                <Send className="h-4 w-4" /> Send Enquiry
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <label className={className}>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-xl border border-navy-100 bg-navy-50/50 px-4 py-3 text-sm outline-none transition focus:border-eco-500 focus:bg-white focus:ring-4 focus:ring-eco-100"
      />
    </label>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="h-1 bg-gradient-to-r from-eco-600 via-gold-500 to-navy-600" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-white p-1.5">
              <Image src="/images/iitr-logo.svg" alt="IIT Roorkee logo" width={52} height={52} className="h-12 w-12" />
            </span>
            <Image src="/images/conference-logo.svg" alt="ICTWM 3.0 logo" width={52} height={52} className="h-12 w-12" />
          </div>
          <p className="mt-5 max-w-md font-display text-lg font-semibold text-white">{conference.fullTitle}</p>
          <p className="mt-2 text-sm">
            {conference.dates} · {conference.venueShort}
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold-500">Quick Links</h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-gold-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-gold-500">Useful Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-gold-400">
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
          <a href={`mailto:${conference.email}`} className="mt-6 flex items-center gap-2 text-sm hover:text-gold-400">
            <Mail className="h-4 w-4 text-gold-500" /> {conference.email}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-navy-100/70 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {conference.shortName}, IIT Roorkee. All rights reserved.</p>
          <p>Campus photos: Wikimedia Commons (CC BY-SA / CC0).</p>
        </div>
      </div>
    </footer>
  );
}
