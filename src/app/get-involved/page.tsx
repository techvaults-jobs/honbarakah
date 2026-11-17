import type { Metadata } from "next"
import Image from "next/image"
import { CreditCard, MapPinned, Megaphone, UsersRound, CalendarCheck, Share2 } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, SectionHeading } from "@/components/site/section-heading"
import { VolunteerForm } from "@/components/site/volunteer-form"

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Volunteer for B.O.B 2027, join a ward team and get ready to vote for Barakat Odunuga-Bakare in Surulere Constituency I.",
  alternates: { canonical: "/get-involved" },
}

const ways = [
  { icon: UsersRound, title: "Join a ward team", body: "Every ward has a team that knocks on doors, organises meetings and looks after supporters. There is a place for you in yours." },
  { icon: Megaphone, title: "Speak up online", body: "Share campaign posts, correct false stories and tell people why you support Barakat. Your voice reaches people ours cannot." },
  { icon: CalendarCheck, title: "Show up", body: "Come to town halls, rallies and ward meetings. A full room tells everyone that Surulere is ready." },
  { icon: Share2, title: "Bring one more", body: "Talk to one neighbour, one colleague, one family member. Elections are won one conversation at a time." },
]

const checklist = [
  { icon: CreditCard, title: "Collect your PVC", body: "Your Permanent Voter's Card is your ticket to vote. If you registered and have not collected it, check with the INEC office in Surulere." },
  { icon: MapPinned, title: "Know your polling unit", body: "Confirm your polling unit on the INEC voter portal before election day so you go straight to the right place." },
  { icon: CalendarCheck, title: "Plan your day", body: "Polls open early. Go with your PVC, stay calm, wait for your turn and stay to see the results announced." },
]

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        crumb="Get Involved"
        eyebrow="Get involved"
        title={
          <>
            This movement needs <span className="text-gold-400">you in it.</span>
          </>
        }
        intro="Campaigns are not won by candidates alone. They are won by neighbours who decide to show up. Here is how you can help."
        image="/images/volunteers-jersey.jpg"
      />

      <section id="ward-team" className="container-x scroll-mt-28 py-24 sm:py-28">
        <SectionHeading eyebrow="Ways to help" title="Pick your part" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08} className="rounded-md border border-border bg-white p-7">
              <w.icon className="size-9 text-forest-600" />
              <h3 className="mt-5 text-xl text-forest-950">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="volunteer" className="scroll-mt-24 bg-white py-24 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow>Volunteer sign-up</Eyebrow>
            <h2 className="mt-4 text-5xl text-forest-950 sm:text-6xl">
              Put your name down. <span className="text-forest-600">We will do the rest.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Fill the form and a coordinator from your ward will call you. It takes less than two minutes.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-md lg:block">
              <Image src="/images/campaign-office-team.jpg" alt="Barakat Odunuga-Bakare with campaign volunteers" fill sizes="40vw" className="object-cover" />
            </div>
          </div>
          <Reveal className="rounded-md border border-border bg-cream p-6 sm:p-10">
            <VolunteerForm />
          </Reveal>
        </div>
      </section>

      <section id="vote" className="scroll-mt-24 bg-forest-950 py-24 text-white sm:py-28">
        <div className="container-x">
          <SectionHeading light eyebrow="Voter checklist" title={<>Ready to vote? <span className="text-gold-400">Three steps.</span></>} />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {checklist.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.08} className="relative rounded-md border border-white/10 bg-white/[0.04] p-8">
                <span className="absolute top-6 right-7 font-display text-6xl font-black text-white/10">{i + 1}</span>
                <c.icon className="size-9 text-gold-400" />
                <h3 className="mt-5 text-[1.75rem]">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{c.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
