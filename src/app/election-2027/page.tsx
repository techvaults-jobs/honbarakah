import type { Metadata } from "next"
import { BadgeCheck, CalendarCheck, ClipboardList, CreditCard, GraduationCap, MapPinned, RadioTower, ShieldCheck, UserPlus } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Countdown } from "@/components/site/countdown"
import { Eyebrow, Hi, SectionHeading } from "@/components/site/section-heading"
import { PortalForm } from "@/components/site/portal-form"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Election 2027",
  description:
    "Register as a polling unit agent for B.O.B 2027, file election day field and incident reports, and get ready to vote in Surulere Constituency I.",
  alternates: { canonical: "/election-2027" },
}

const pipeline = [
  { icon: UserPlus, title: "Register", body: "Sign up with your ward and polling unit. It takes two minutes." },
  { icon: BadgeCheck, title: "Get verified", body: "Your ward coordinator confirms your identity, PVC and polling unit." },
  { icon: MapPinned, title: "Get assigned", body: "You receive an agent code and a polling unit, ideally the one where you vote." },
  { icon: GraduationCap, title: "Get trained", body: "Learn the Electoral Act, the result sheets and exactly what to report." },
  { icon: RadioTower, title: "Report live", body: "On election day, send field and incident reports straight to the situation room." },
]

const checklist = [
  { icon: CreditCard, title: "Collect your PVC", body: "Your Permanent Voter's Card is your ticket to vote. If you registered and have not collected it, check with the INEC office in Surulere." },
  { icon: MapPinned, title: "Know your polling unit", body: "Confirm your polling unit on the INEC voter portal before election day so you go straight to the right place." },
  { icon: CalendarCheck, title: "Plan your day", body: "Polls open early. Go with your PVC, stay calm, wait for your turn and stay to see the results announced." },
]

export default function ElectionPage() {
  return (
    <>
      <PageHero
        crumb="Election 2027"
        eyebrow="Election 2027"
        title={
          <>
            Every polling unit. <span className="text-gold-400">Every vote protected.</span>
          </>
        }
        intro="Elections are won at the polling unit. Join the agent network, know how to report and make sure your own vote counts."
        image="/images/nomination-form.jpg"
      />

      {/* Countdown */}
      <section className="relative isolate overflow-hidden bg-gold-400 py-14 text-forest-950 sm:py-16">
        <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(-45deg,transparent_0_18px,rgba(0,0,0,0.035)_18px_36px)]" />
        <div className="container-x grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.16em] uppercase">{site.election.label}</p>
            <h2 className="mt-2 text-4xl sm:text-5xl">The countdown is on.</h2>
          </div>
          <Countdown date={site.election.date} />
        </div>
      </section>

      {/* Agent pipeline */}
      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="The agent network"
          title={
            <>
              From sign-up <Hi>to situation room.</Hi>
            </>
          }
          intro="Every agent goes through the same five steps, so the campaign knows who is at each polling unit and can trust every report that comes in."
        />
        <ol className="rail-sm mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pipeline.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="relative rounded-md border border-border bg-white p-6">
              <span className="font-sans text-sm font-bold tracking-[0.16em] text-forest-600">STEP 0{i + 1}</span>
              <span className="mt-4 grid size-12 place-items-center rounded-[4px] bg-forest-700 text-gold-300">
                <s.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl text-forest-950">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Register */}
      <section id="agents" className="scroll-mt-24 bg-cream py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Agent registration</Eyebrow>
            <h2 className="mt-4 text-4xl text-forest-950 sm:text-5xl">
              Stand guard <span className="text-forest-600">at your polling unit.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Agents are the eyes of the campaign on election day. You watch accreditation, voting and counting, and you make sure the result announced is the result recorded.
            </p>
            <ul className="mt-8 space-y-3">
              {["You must be a registered voter, ideally with your PVC collected", "Agents serve at or near the polling unit where they vote", "Registration is free. Nobody should ask you to pay for it"].map((t) => (
                <li key={t} className="flex gap-3 text-forest-950">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-forest-600" />
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <Reveal className="rounded-md border border-border bg-white p-5 shadow-xl shadow-forest-900/5 sm:p-10">
            <PortalForm form="agent" />
          </Reveal>
        </div>
      </section>

      {/* Field reports */}
      <section id="report" className="relative isolate scroll-mt-24 overflow-hidden bg-forest-950 py-20 text-white sm:py-28">
        <div className="bg-weave absolute inset-0 -z-10" />
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow light>For verified agents</Eyebrow>
            <h2 className="mt-4 text-4xl sm:text-5xl">
              Field and <span className="text-gold-400">incident reporting.</span>
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Use your agent code to send updates from your polling unit: when polls open, how accreditation is going, the result announced and anything that goes wrong.
            </p>
            <div className="mt-8 flex gap-4 rounded-md border border-white/10 bg-white/[0.04] p-5">
              <ClipboardList className="size-6 shrink-0 text-gold-400" />
              <p className="text-white/75">
                Mark a report <strong className="text-white">Urgent</strong> for violence, missing materials or result tampering. The situation room flags those for an immediate call back.
              </p>
            </div>
          </div>
          <Reveal className="rounded-md bg-white p-5 text-forest-950 sm:p-10">
            <PortalForm form="report" />
          </Reveal>
        </div>
      </section>

      {/* Voter checklist */}
      <section id="vote" className="container-x scroll-mt-24 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Voter checklist"
          title={
            <>
              Ready to vote? <Hi>Three steps.</Hi>
            </>
          }
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {checklist.map((c, i) => (
            <Reveal as="li" key={c.title} delay={i * 0.08} className="relative rounded-md border border-border bg-white p-8">
              <span className="absolute top-6 right-7 font-display text-6xl font-bold text-forest-950/[0.07]">{i + 1}</span>
              <c.icon className="size-9 text-forest-600" />
              <h3 className="mt-5 text-[1.75rem] text-forest-950">{c.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{c.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  )
}
