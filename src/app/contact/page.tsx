import type { Metadata } from "next"
import { Mail, MapPin, Newspaper, Phone } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow } from "@/components/site/section-heading"
import { SocialLinks } from "@/components/site/social-icons"
import { ContactForm } from "@/components/site/contact-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the campaign of Barakat Odunuga-Bakare. Community requests, media enquiries, partnerships and ideas for Surulere.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  const channels = [
    { icon: Mail, label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    ...(site.contact.phone
      ? [{ icon: Phone, label: "Phone", value: site.contact.phone, href: `tel:${site.contact.phone.replace(/\s/g, "")}` }]
      : []),
    { icon: MapPin, label: "Office", value: site.contact.office },
    { icon: Newspaper, label: "Media enquiries", value: "Choose \"Media and press\" in the form and the media team will respond." },
  ]

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact"
        title={
          <>
            Your voice <span className="text-gold-400">counts here.</span>
          </>
        }
        intro="Raise a community issue, invite Barakat to your event, offer your support or send a media request."
        image="/images/office-visit.jpg"
      />

      <section className="container-x grid gap-14 py-24 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="mt-4 text-3xl text-forest-950 sm:text-4xl">Talk to the campaign.</h2>
          <ul className="mt-10 space-y-4">
            {channels.map((c) => (
              <li key={c.label} className="flex gap-4 rounded-md border border-border bg-white p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-[4px] bg-forest-700 text-gold-300">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block font-semibold break-all text-forest-950 hover:text-forest-600">
                      {c.value}
                    </a>
                  ) : (
                    <p className="mt-1 font-medium text-forest-950">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <SocialLinks className="mt-8" itemClassName="size-11 bg-forest-50 text-forest-800 hover:bg-forest-700 hover:text-white" />
        </div>

        <Reveal className="rounded-md border border-border bg-white p-6 shadow-xl shadow-forest-900/5 sm:p-10">
          <h3 className="text-[1.75rem] text-forest-950">Send a message</h3>
          <p className="mt-2 mb-8 text-muted-foreground">Tell us what you need and the right person on the team will respond.</p>
          <ContactForm />
        </Reveal>
      </section>
    </>
  )
}
