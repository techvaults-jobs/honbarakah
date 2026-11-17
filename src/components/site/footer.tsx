import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { nav, site } from "@/lib/site"
import { Logo } from "./logo"
import { SocialLinks } from "./social-icons"
import { NewsletterForm } from "./newsletter-form"
import { Year } from "./year"

const involve = [
  { href: "/get-involved#volunteer", label: "Volunteer" },
  { href: "/get-involved#ward-team", label: "Join a ward team" },
  { href: "/get-involved#vote", label: "Get your PVC ready" },
  { href: "/contact", label: "Share an idea" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-950 text-white">
      <div className="flag-stripe relative h-1.5" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-x relative">
        <div className="grid gap-10 border-b border-white/10 py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="font-display text-4xl leading-[0.95] font-bold text-balance uppercase sm:text-5xl">
              Get campaign news before anyone else.
            </p>
            <p className="mt-3 max-w-lg text-white/60">
              Town halls, ward visits, volunteer calls and updates from the trail. No spam, just Surulere.
            </p>
          </div>
          <NewsletterForm />
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {site.fullTitle}. APC candidate for the Lagos State House of Assembly, {site.constituency}.
            </p>
            <p className="mt-5 font-display text-xl font-bold tracking-wide text-gold-400 uppercase">Àjùmọ̀ṣe, Àjùmọ̀jẹ.</p>
            <SocialLinks className="mt-5" itemClassName="bg-white/5 hover:bg-gold-400 hover:text-forest-950" />
          </div>

          <div>
            <h3 className="text-xl tracking-wide text-gold-400">Explore</h3>
            <ul className="mt-4 space-y-1 text-[0.95rem] text-white/70">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1.5 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl tracking-wide text-gold-400">Get involved</h3>
            <ul className="mt-4 space-y-1 text-[0.95rem] text-white/70">
              {involve.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-block py-1.5 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl tracking-wide text-gold-400">Reach the campaign</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                {site.contact.office}
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <a href={`mailto:${site.contact.email}`} className="inline-block py-1 break-all hover:text-white">
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phone && (
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold-400" />
                  <a href={`tel:${site.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {site.contact.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 pb-24 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between sm:pb-6 sm:text-xs">
          <p>
            &copy; <Year /> B.O.B 2027 Campaign Organisation. All rights reserved.
          </p>
          <p>
            Built by{" "}
            <a href="https://techvaults.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-gold-300">
              Techvaults
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
