import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock, MapPin, Mic } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { CtaLink } from "@/components/site/cta-link"
import { Hi, SectionHeading } from "@/components/site/section-heading"
import { EventStatus } from "@/components/site/event-status"
import { dateParts, events } from "@/lib/content"

export const metadata: Metadata = {
  title: "Events",
  description: "Town halls, rallies, declarations and the key dates of the B.O.B 2027 campaign in Surulere Constituency I.",
  alternates: { canonical: "/events" },
}

export default function EventsPage() {
  const sorted = [...events].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <PageHero
        crumb="Events"
        eyebrow="Events"
        title={
          <>
            Where the campaign <span className="text-gold-400">meets the people.</span>
          </>
        }
        intro="Declarations, commissionings, town halls and the date that matters most. New dates are added as soon as the team confirms them."
        image="/images/stakeholders-anthem.jpg"
      />

      <section className="container-x py-20 sm:py-28">
        <SectionHeading eyebrow="Campaign calendar" title={<>Key <Hi>dates</Hi></>} className="mb-12" />
        <ol className="space-y-4">
          {sorted.map((e, i) => {
            const d = dateParts(e.date)
            return (
              <Reveal as="li" key={e.title} delay={Math.min(i, 4) * 0.05}>
                <article className="group relative grid overflow-hidden rounded-md border border-border bg-white transition-all hover:border-forest-600 hover:shadow-xl hover:shadow-forest-900/5 sm:grid-cols-[9rem_1fr_auto]">
                  <div className="flex items-center gap-3 bg-forest-700 px-6 py-4 text-white sm:flex-col sm:justify-center sm:gap-0 sm:py-6">
                    <span className="font-display text-5xl leading-none font-bold text-gold-400 sm:text-6xl">{d.day}</span>
                    <span className="font-display text-lg font-bold tracking-wide uppercase">
                      {d.month} {d.year}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-[3px] bg-gold-100 px-2.5 py-1 font-display text-xs font-bold tracking-wider text-forest-800 uppercase">{e.tag}</span>
                      <EventStatus date={e.date} />
                    </div>
                    <h2 className="mt-3 text-2xl leading-tight text-forest-950 normal-case sm:text-3xl">
                      {e.href ? (
                        <Link href={e.href} className="after:absolute after:inset-0 group-hover:text-forest-700">
                          {e.title}
                        </Link>
                      ) : (
                        e.title
                      )}
                    </h2>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{e.body}</p>
                    <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-sm font-medium text-forest-950/75">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="size-4 text-forest-600" /> {e.venue}
                      </span>
                      {e.time && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="size-4 text-forest-600" /> {d.weekday}, {e.time}
                        </span>
                      )}
                    </p>
                  </div>
                  {e.href && (
                    <span className="hidden items-center pr-8 sm:flex">
                      <ArrowRight className="size-6 text-forest-700 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </article>
              </Reveal>
            )
          })}
        </ol>
      </section>

      <section className="relative isolate overflow-hidden bg-forest-800 py-20 text-white sm:py-24">
        <div className="bg-shards absolute inset-0 -z-10" />
        <Reveal className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-5">
            <Mic className="size-12 shrink-0 text-gold-400" />
            <div>
              <h2 className="text-4xl sm:text-5xl">Invite Barakat to your event</h2>
              <p className="mt-3 max-w-xl text-lg text-white/75">
                Community meetings, association gatherings, school programmes and faith events. Choose &ldquo;Invite Barakat to an event&rdquo; in the contact form.
              </p>
            </div>
          </div>
          <CtaLink href="/contact" icon="arrow">
            Send an invitation
          </CtaLink>
        </Reveal>
      </section>
    </>
  )
}
