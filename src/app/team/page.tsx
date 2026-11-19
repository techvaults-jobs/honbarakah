import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Hi, SectionHeading } from "@/components/site/section-heading"
import { desks, team } from "@/lib/platform"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "The Team",
  description: "Meet the office and campaign team of Hon. (Barr.) Barakat Odunuga-Bakare, their roles, responsibilities and how to reach them.",
  alternates: { canonical: "/team" },
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumb="The Team"
        eyebrow="The team"
        title={
          <>
            The people <span className="text-gold-400">behind the office.</span>
          </>
        }
        intro="A representative is only as good as the team that answers your call. These are the people who keep the office working for Surulere."
        image="/images/campaign-office-team.jpg"
      />

      {/* Principal */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="grid overflow-hidden rounded-md bg-forest-800 text-white md:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] md:aspect-auto">
            <Image src="/images/portrait-poise.jpg" alt={site.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover object-top" />
          </div>
          <div className="bg-shards flex flex-col justify-center p-7 sm:p-12">
            <span className="w-fit rounded-[3px] bg-gold-400 px-3 py-1 font-sans text-sm font-bold tracking-wider text-forest-950 uppercase">The principal</span>
            <h2 className="mt-5 text-3xl sm:text-4xl">{site.fullTitle}</h2>
            <p className="mt-2 font-sans text-xl font-semibold text-gold-300">{site.role}, {site.constituency}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">
              Lawyer, two-term councillor, former leader of the Surulere Legislative Arm and former Special Adviser on Housing to the Governor of Lagos State.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 self-start py-2 font-sans text-lg font-bold tracking-wide text-gold-400 uppercase hover:text-gold-300">
              Read her story <ArrowRight className="size-5" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Members */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Office and campaign team" title={<>Who does <Hi>what.</Hi></>} intro="Profiles are published as appointments are confirmed by the office." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06} className="flex flex-col rounded-md border border-border bg-cream p-7">
                <div className="flex items-center gap-4">
                  {m.photo ? (
                    <Image src={m.photo} alt={m.name} width={72} height={72} className="size-18 rounded-md object-cover" />
                  ) : (
                    <span className="grid size-18 place-items-center rounded-md bg-forest-700 font-display text-3xl font-bold text-gold-300">{initials(m.name)}</span>
                  )}
                  <div>
                    <h3 className="text-2xl text-forest-950">{m.name}</h3>
                    <p className="font-sans text-base font-bold tracking-wide text-forest-600 uppercase">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-forest-950/75">{m.bio}</p>
                <ul className="mt-5 space-y-2">
                  {m.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-sm font-medium text-forest-950">
                      <Check className="mt-0.5 size-4 shrink-0 text-forest-600" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
                <Link href={m.contact.href} className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-sans text-base font-bold tracking-wide text-forest-700 uppercase hover:text-forest-600">
                  {m.contact.label} <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Desks */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-20 text-white sm:py-28">
        <div className="bg-stripes absolute inset-0 -z-10 opacity-40" />
        <div className="container-x">
          <SectionHeading light eyebrow="How the office is organised" title={<>Six desks. <Hi light>One mission.</Hi></>} />
          <div className="rail-sm mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {desks.map((d, i) => (
              <Reveal key={d.title} delay={(i % 3) * 0.06} className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] p-7">
                <span className="font-sans text-sm font-bold tracking-[0.16em] text-gold-400">DESK 0{i + 1}</span>
                <h3 className="mt-3 text-2xl">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{d.body}</p>
                <Link href={d.route.href} className="mt-auto inline-flex items-center gap-2 self-start pt-6 font-sans text-base font-bold tracking-wide text-gold-400 uppercase hover:text-gold-300">
                  {d.route.label} <ArrowRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={<>There is room on this team <span className="text-gold-400">for you.</span></>} />
    </>
  )
}
