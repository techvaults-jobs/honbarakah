import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, HandCoins, Megaphone, MessageSquareWarning, UsersRound, CalendarCheck, Share2, Vote } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, SectionHeading } from "@/components/site/section-heading"
import { VolunteerForm } from "@/components/site/volunteer-form"

export const metadata: Metadata = {
  title: "Volunteers and Supporters",
  description: "Volunteer for B.O.B 2027 or register as a supporter of Barakat Odunuga-Bakare in Surulere Constituency I.",
  alternates: { canonical: "/get-involved" },
}

const ways = [
  { icon: UsersRound, title: "Join a ward team", body: "Every ward has a team that knocks on doors, organises meetings and looks after supporters. There is a place for you in yours." },
  { icon: Megaphone, title: "Speak up online", body: "Share campaign posts, correct false stories and tell people why you support Barakat. Your voice reaches people ours cannot." },
  { icon: CalendarCheck, title: "Show up", body: "Come to town halls, rallies and ward meetings. A full room tells everyone that Surulere is ready." },
  { icon: Share2, title: "Bring one more", body: "Talk to one neighbour, one colleague, one family member. Elections are won one conversation at a time." },
]

const more = [
  { icon: Vote, href: "/election-2027#agents", title: "Become an agent", body: "Protect the vote at your polling unit on election day. Training is provided.", cta: "Register as an agent" },
  { icon: HandCoins, href: "/support", title: "Support a project", body: "Fund, supply or sponsor work that changes lives in Surulere.", cta: "Support and partner" },
  { icon: MessageSquareWarning, href: "/constituency#desk", title: "Speak for your street", body: "Report an issue or share an idea with the constituency desk.", cta: "Open the desk" },
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
            <Eyebrow>Volunteer or supporter</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-950 sm:text-4xl">
              Put your name down. <span className="text-forest-600">We will do the rest.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Volunteers give time to the campaign. Supporters stand with us and hear first about meetings in their ward. Pick one and it takes less than two minutes.
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

      <section className="bg-forest-950 py-20 text-white sm:py-24">
        <div className="container-x">
          <SectionHeading light eyebrow="Go further" title={<>More ways <span className="text-gold-400">to stand with Barakat.</span></>} />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {more.map((m, i) => (
              <Reveal key={m.href} delay={i * 0.06}>
                <Link href={m.href} className="group flex h-full flex-col rounded-md border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold-400/60 hover:bg-white/[0.07]">
                  <m.icon className="size-9 text-gold-400" />
                  <h3 className="mt-5 text-2xl">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{m.body}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 font-sans text-base font-bold tracking-wide text-gold-400 uppercase">
                    {m.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
