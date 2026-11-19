import type { Metadata } from "next"
import Link from "next/link"
import { Building, HandCoins, Handshake, PackageOpen, ShieldCheck, Sparkles } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, Hi, SectionHeading } from "@/components/site/section-heading"
import { PortalForm } from "@/components/site/portal-form"

export const metadata: Metadata = {
  title: "Support and Partnership",
  description:
    "Fund a project, provide materials or services, sponsor an intervention or partner with the office of Hon. Barakat Odunuga-Bakare in Surulere.",
  alternates: { canonical: "/support" },
}

const ways = [
  { icon: HandCoins, title: "Fund a project", body: "Back a named project, from street lights to school upgrades, and get a report on what your support delivered." },
  { icon: PackageOpen, title: "Provide materials or services", body: "Books, food, equipment, printing, transport, medical care or professional skills. Support in kind goes a long way." },
  { icon: Sparkles, title: "Sponsor an intervention", body: "Sponsor a scholarship round, a skills programme, a health outreach or relief for families in a hard season." },
  { icon: Building, title: "Partner with the office", body: "Companies, foundations, associations and faith groups can build longer programmes with the office in Surulere." },
]

const promises = [
  "No payment is taken on this website. The partnerships desk agrees every arrangement with you directly.",
  "Support is received only through official channels and recorded in line with the Electoral Act 2022.",
  "Every funded project reports back on what was delivered, where and for whom.",
  "Nobody from the office will ask you to pay into a personal account. If anyone does, report it to us.",
]

export default function SupportPage() {
  return (
    <>
      <PageHero
        crumb="Support and Partnership"
        eyebrow="Support and partnership"
        title={
          <>
            Build Surulere <span className="text-gold-400">with us.</span>
          </>
        }
        intro="Some of the best work in this constituency started with one person or one business saying yes. Here is how you can be part of the next project."
        image="/images/with-party-elder.jpg"
      />

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="Ways to support"
          title={
            <>
              Four ways <Hi>to make a difference.</Hi>
            </>
          }
        />
        <div className="rail-sm mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06} className="group rounded-md border border-border bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/5">
              <span className="grid size-14 place-items-center rounded-md bg-gold-100 text-forest-700 transition-colors group-hover:bg-forest-700 group-hover:text-gold-300">
                <w.icon className="size-7" />
              </span>
              <h3 className="mt-6 text-2xl text-forest-950">{w.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="partner" className="scroll-mt-24 bg-cream py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow>Our promise to you</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-950 sm:text-4xl">
              Transparent, <span className="text-forest-600">accountable, on record.</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {promises.map((p) => (
                <li key={p} className="flex gap-3 text-forest-950">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-forest-600" />
                  <span className="font-medium">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-4 rounded-md bg-forest-800 p-6 text-white">
              <Handshake className="size-8 shrink-0 text-gold-400" />
              <p className="text-white/80">
                Projects you support are added to the{" "}
                <Link href="/projects" className="font-semibold text-gold-300 underline underline-offset-2">
                  public project ledger
                </Link>
                , so everyone can see what was built together.
              </p>
            </div>
          </div>
          <Reveal className="rounded-md border border-border bg-white p-5 shadow-xl shadow-forest-900/5 sm:p-10">
            <h3 className="text-[1.75rem] text-forest-950">Tell us how you would like to help</h3>
            <p className="mt-2 mb-8 text-muted-foreground">The partnerships desk will be in touch within a few working days.</p>
            <PortalForm form="support" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
