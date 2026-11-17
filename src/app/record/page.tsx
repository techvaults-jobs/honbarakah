import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, Gavel, Building2, Flag } from "lucide-react"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Counter } from "@/components/site/counter"
import { Eyebrow, SectionHeading } from "@/components/site/section-heading"
import { communityRecord, housingRecord, stats } from "@/lib/content"

export const metadata: Metadata = {
  title: "Track Record",
  description:
    "27+ bye-laws, street lighting, free JAMB forms, food relief, halted demolitions and a war on land fraud. The record of Barakat Odunuga-Bakare in Surulere and in the Lagos State cabinet.",
  alternates: { canonical: "/record" },
}

const legislative = [
  "Sponsored and passed more than 27 bye-laws for Surulere Local Government",
  "Leader of the Surulere Legislative Arm from 2018, re-elected leader in 2021",
  "Vice Chairman, Lagos State Councillors' Forum",
  "Legal Adviser, Female Councillors' Forum",
  "Laws that improved residents' welfare and raised internally generated revenue",
]

const party = [
  { title: "TGSEE Campaign Secretary", body: "Coordinated the 2023 campaign that delivered victories for Bola Ahmed Tinubu, Babajide Sanwo-Olu, Femi Gbajabiamila, Wasiu Eshilokun and Desmond Elliot." },
  { title: "Logistics Chair", body: "Chaired the Logistics Committee of the Wasiu Eshilokun Campaign Council." },
  { title: "Party before self", body: "Contested for the Assembly in 2022 and stepped down in line with the party's directive." },
]

export default function RecordPage() {
  return (
    <>
      <PageHero
        crumb="Track Record"
        eyebrow="Track record"
        title={
          <>
            Results you can <span className="text-gold-400">walk past.</span>
          </>
        }
        intro="Streetlights on, drains cleared, homes saved and laws passed. Before you hear any promise, look at what has already been done."
        image="/images/site-walk.jpg"
      />

      <section className="border-b border-border bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="border-border px-2 py-12 sm:px-8 [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
              <div className="font-display text-5xl font-bold text-forest-700 sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 max-w-[14rem] text-sm font-medium text-muted-foreground sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Community */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          eyebrow="In the community"
          title={
            <>
              Ward E1 and beyond: <span className="text-forest-600">what changed.</span>
            </>
          }
          intro="As councillor and council leader, she put the office to work on the problems residents raised with her on the street."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communityRecord.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08} className="group rounded-md border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/5">
              <span className="grid size-14 place-items-center rounded-md bg-gold-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-gold-300">
                <r.icon className="size-7" />
              </span>
              <h3 className="mt-6 text-[1.75rem] text-forest-950">{r.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{r.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Legislative */}
      <section className="bg-white py-24 sm:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[16/11] overflow-hidden rounded-md">
            <Image src="/images/council-certificates.jpg" alt="Group holding certificates in a government chamber" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <div>
            <span className="grid size-14 place-items-center rounded-md bg-forest-700 text-gold-300">
              <Gavel className="size-7" />
            </span>
            <h2 className="mt-6 text-4xl text-forest-950 sm:text-5xl">A lawmaker before the title.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Barakat already knows how legislation is written, debated and passed. She has done it, and she has led the chamber that did it.
            </p>
            <ul className="mt-8 space-y-4">
              {legislative.map((l) => (
                <li key={l} className="flex gap-3 text-forest-950">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-forest-600" />
                  <span className="font-medium">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Housing */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        <div className="bg-weave absolute inset-0 -z-10" />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
            <div>
              <span className="grid size-14 place-items-center rounded-md bg-gold-400 text-forest-950">
                <Building2 className="size-7" />
              </span>
              <Eyebrow light className="mt-6">
                Special Adviser on Housing, 2023 to 2026
              </Eyebrow>
              <h2 className="mt-4 text-5xl text-balance sm:text-6xl">
                Cleaning up Lagos real estate.
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Sworn into the Lagos State Executive Council on September 13, 2023, she advised the Governor on housing policy and supervised LASRERA, the agency that protects buyers and tenants.
              </p>
              <div className="relative mt-10 aspect-[3/2] overflow-hidden rounded-md">
                <Image src="/images/with-governor.jpg" alt="Barakat Odunuga-Bakare with Governor Babajide Sanwo-Olu" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
            </div>
            <ol className="space-y-4">
              {housingRecord.map((h, i) => (
                <Reveal as="li" key={h.title} delay={i * 0.06} className="flex gap-6 rounded-md border border-white/10 bg-white/[0.04] p-7">
                  <span className="font-display text-3xl font-bold text-gold-400">0{i + 1}</span>
                  <div>
                    <h3 className="text-xl">{h.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/65">{h.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Party */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Party service"
          title={
            <>
              Trusted when it <span className="text-forest-600">mattered most.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {party.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="rounded-md border border-border bg-white p-8">
              <Flag className="size-7 text-apc-red" />
              <h3 className="mt-5 text-[1.75rem] text-forest-950">{p.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="She has done it before. Let her do more." />
    </>
  )
}
