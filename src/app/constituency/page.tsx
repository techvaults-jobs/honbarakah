import type { Metadata } from "next"
import Image from "next/image"
import { ClipboardCheck, Inbox, PhoneCall, Route, Siren } from "lucide-react"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, Hi, SectionHeading } from "@/components/site/section-heading"
import { DeskTabs } from "@/components/site/desk-tabs"
import { pillars } from "@/lib/content"

export const metadata: Metadata = {
  title: "Constituency Desk",
  description:
    "Report a community issue, share an idea or follow up with the office of Hon. Barakat Odunuga-Bakare. Every submission in Surulere Constituency I gets a reference number.",
  alternates: { canonical: "/constituency" },
}

const steps = [
  { icon: Inbox, title: "Logged", body: "Your report gets a reference number the moment you send it." },
  { icon: ClipboardCheck, title: "Reviewed", body: "The desk checks the details and calls you if anything is unclear." },
  { icon: Route, title: "Routed", body: "It goes to the council, the state agency or the ward team that can fix it." },
  { icon: PhoneCall, title: "Reported back", body: "You hear what was done. Quote your reference to follow up at any time." },
]

export default function ConstituencyPage() {
  return (
    <>
      <PageHero
        crumb="Constituency"
        eyebrow="Constituency desk"
        title={
          <>
            Tell us what your <span className="text-gold-400">street needs.</span>
          </>
        }
        intro="This is the front door to the office for every resident of Surulere Constituency I. Report a problem, bring an idea or follow up on something you raised."
        image="/images/stakeholders-meeting.jpg"
      />

      {/* How it works */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="How the desk works"
          title={
            <>
              Nothing you send <Hi>gets lost.</Hi>
            </>
          }
          intro="Barakat built her name in Ward E1 by acting on what residents told her. The desk turns that habit into a system."
        />
        <ol className="rail-sm mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="relative rounded-md border border-border bg-white p-7">
              <span className="absolute top-5 right-6 font-display text-5xl font-bold text-forest-950/[0.07]">0{i + 1}</span>
              <span className="grid size-12 place-items-center rounded-[4px] bg-forest-700 text-gold-300">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl text-forest-950">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Desk */}
      <section id="desk" className="scroll-mt-24 bg-cream py-20 sm:py-28">
        <div className="container-x">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Open the desk" title="What would you like to do?" />
            <Reveal className="flex max-w-md gap-3 rounded-md border-l-4 border-apc-red bg-white p-4 text-sm text-forest-950/80">
              <Siren className="mt-0.5 size-5 shrink-0 text-apc-red" />
              <p>
                <strong className="text-forest-950">Emergency?</strong> Call the Lagos State emergency lines <strong>112</strong> or <strong>767</strong> first. This desk is for issues that need follow-up, not urgent rescue.
              </p>
            </Reveal>
          </div>
          <DeskTabs />
        </div>
      </section>

      {/* Constituency */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-md">
            <Image src="/images/leaders-group.jpg" alt="Surulere party leaders and stakeholders" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/85 to-transparent p-6 text-white">
              <p className="font-sans text-sm font-bold tracking-[0.16em] text-gold-300 uppercase">Lagos State House of Assembly</p>
              <p className="font-display text-3xl font-bold uppercase">Surulere Constituency I</p>
            </div>
          </Reveal>
          <div>
            <Eyebrow>Your constituency</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-950 sm:text-4xl">
              Home of the stadium, <span className="text-forest-600">the hustle and the heart of Lagos.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Surulere is where Barakat was born, schooled and first elected. Its markets, schools, sports grounds and creative scene carry a huge share of Lagos life, and its residents deserve an Assembly member who answers when they call.
            </p>
            <p className="mt-6 font-sans text-sm font-bold tracking-[0.16em] text-forest-600 uppercase">What residents raise most</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <li key={p.slug} className="rounded-[4px] bg-forest-50 px-3 py-2 text-sm font-semibold text-forest-800">
                  {p.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Your street, your voice, <span className="text-gold-400">your representative.</span>
          </>
        }
      />
    </>
  )
}
