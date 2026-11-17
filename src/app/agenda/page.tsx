import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow } from "@/components/site/section-heading"
import { pillars } from "@/lib/content"

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Housing, education, youth empowerment, economic inclusion, community security and sustainable growth. The legislative agenda of Barakat Odunuga-Bakare for Surulere Constituency I.",
  alternates: { canonical: "/agenda" },
}

export default function AgendaPage() {
  return (
    <>
      <PageHero
        crumb="Agenda"
        eyebrow="The agenda"
        title={
          <>
            A plan built on <span className="text-gold-400">what Surulere told her.</span>
          </>
        }
        intro="Six priorities, each grounded in work she has already started. In the Assembly, she will turn them into law, budget lines and oversight."
        image="/images/stakeholders-meeting.jpg"
      />

      <div className="sticky top-20 z-30 border-b border-border bg-cream/90 backdrop-blur-lg">
        <nav aria-label="Agenda sections" className="container-x flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {pillars.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="flex shrink-0 items-center gap-2 rounded-[4px] border-2 border-forest-950/10 bg-white px-4 py-2 font-display text-base font-bold tracking-wide text-forest-900 uppercase transition-colors hover:border-forest-600 hover:text-forest-700"
            >
              <p.icon className="size-4 text-forest-600" />
              {p.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-x py-12 sm:py-20">
        {pillars.map((p, i) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-40 border-b border-border py-14 last:border-0 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <Reveal>
                <div className="flex items-center gap-4">
                  <span className="grid size-16 place-items-center rounded-md bg-forest-700 text-gold-300 shadow-lg shadow-forest-900/20">
                    <p.icon className="size-8" />
                  </span>
                  <span className="font-display text-6xl font-black text-forest-100">0{i + 1}</span>
                </div>
                <h2 className="mt-8 text-5xl text-forest-950 sm:text-6xl">{p.title}</h2>
                <p className="mt-5 text-xl leading-relaxed text-forest-800">{p.summary}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <Eyebrow>Why it matters</Eyebrow>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{p.why}</p>
                <div className="mt-8 rounded-md border border-border bg-white p-7 sm:p-8">
                  <p className="text-sm font-bold tracking-[0.15em] text-forest-700 uppercase">In the Assembly, she will</p>
                  <ul className="mt-5 space-y-4">
                    {p.plans.map((plan) => (
                      <li key={plan} className="flex gap-3.5">
                        <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-400 text-forest-950">
                          <Check className="size-3.5" strokeWidth={3} />
                        </span>
                        <span className="leading-relaxed text-forest-950">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-white py-20">
        <Reveal className="container-x flex flex-col items-start justify-between gap-8 rounded-md border border-border bg-gold-100/50 p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-forest-950 sm:text-6xl">Something missing from this list?</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              This agenda belongs to Surulere. Tell the campaign what your street, market or school needs, and it will be heard.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-14 shrink-0 items-center gap-2 rounded-[4px] bg-forest-700 px-7 font-display text-lg font-bold tracking-wide text-white uppercase transition-colors hover:bg-forest-600"
          >
            Share your idea
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
