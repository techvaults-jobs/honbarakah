import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Quote, UserRound, Vote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/site/reveal"
import { Counter } from "@/components/site/counter"
import { Countdown } from "@/components/site/countdown"
import { Eyebrow, SectionHeading } from "@/components/site/section-heading"
import { CredentialMarquee, CtaBand, NewsCard } from "@/components/site/blocks"
import { communityRecord, gallery, journey, news, pillars, stats } from "@/lib/content"
import { site } from "@/lib/site"

export default function HomePage() {
  const highlights = communityRecord.slice(0, 6)
  const milestones = journey.filter((m) => ["2017", "2018", "2023", "2026"].includes(m.year))
  const latest = news.slice(0, 3)
  const strip = [gallery[1], gallery[2], gallery[6], gallery[3], gallery[10]]

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-forest-950 text-white">
        <div className="bg-weave absolute inset-0 -z-10" />
        <div className="absolute top-1/3 -left-40 -z-10 size-[36rem] rounded-full bg-forest-600/30 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 -z-10 size-[30rem] rounded-full bg-gold-500/20 blur-[120px]" />

        <div className="container-x grid min-h-svh items-center gap-12 pt-32 pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pt-36 lg:pb-0">
          <div className="relative z-10 lg:pb-24">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-400/30 bg-gold-400/10 py-1.5 pr-4 pl-1.5 text-xs font-semibold text-gold-200 sm:text-sm">
                <span className="rounded-full bg-gold-400 px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wider text-forest-950 uppercase">APC</span>
                Candidate, {site.constituency}
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 text-[3.2rem] leading-[0.95] font-semibold text-balance sm:text-7xl xl:text-[5.6rem]">
                The voice of hope for <span className="text-gold-300 italic">Surulere.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
                Lawyer, two-term councillor and former Special Adviser on Housing to the Governor. Barakat Odunuga-Bakare has served Surulere from the ward to the state cabinet. Now she is ready to be its voice in the Lagos State House of Assembly.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-14 rounded-full bg-gold-400 px-8 text-base font-bold text-forest-950 shadow-lg shadow-gold-500/20 hover:bg-gold-300">
                <Link href="/get-involved">
                  Join the Movement
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-14 rounded-full border-white/25 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
                <Link href="/about">
                  <UserRound data-icon="inline-start" />
                  Meet Barakat
                </Link>
              </Button>
            </Reveal>
            <Reveal delay={0.32} className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {[
                ["27+", "Bye-laws passed"],
                ["2x", "Elected councillor"],
                ["2023", "State cabinet"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-heading text-3xl font-semibold text-white sm:text-4xl">{v}</div>
                  <div className="mt-1 text-xs font-medium text-white/55 sm:text-sm">{l}</div>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1} y={40} className="relative mx-auto w-full max-w-md self-end lg:max-w-none">
            <div className="absolute inset-x-6 top-10 bottom-0 rounded-t-full border border-gold-400/40" />
            <div className="absolute inset-x-0 top-20 bottom-0 rounded-t-full bg-gradient-to-b from-forest-600/60 to-forest-900/0" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
              <Image
                src="/images/portrait-green.jpg"
                alt="Hon. Barakat Odunuga-Bakare, arms folded, in a black blazer"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950 to-transparent" />
            </div>
            <div className="absolute bottom-10 -left-2 rounded-2xl border border-white/10 bg-forest-950/80 px-5 py-4 shadow-2xl backdrop-blur-md sm:-left-8">
              <p className="font-heading text-2xl font-bold tracking-tight">
                B<span className="text-gold-400">.</span>O<span className="text-gold-400">.</span>B 2027
              </p>
              <p className="mt-0.5 text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">{site.motto}</p>
            </div>
            <div className="absolute top-24 -right-1 hidden rotate-6 rounded-full bg-gold-400 px-5 py-3 text-center text-forest-950 shadow-xl sm:block lg:-right-4">
              <p className="text-[0.65rem] font-bold tracking-widest uppercase">Born in</p>
              <p className="font-heading text-lg leading-none font-bold italic">Surulere</p>
            </div>
          </Reveal>
        </div>
      </section>

      <CredentialMarquee />

      {/* Introduction */}
      <section className="container-x grid items-center gap-14 py-24 sm:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/portrait-smile.jpg"
              alt="Barakat Odunuga-Bakare smiling in a black dress and pearls"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -right-4 -bottom-8 w-60 rounded-3xl bg-forest-800 p-6 text-white shadow-2xl sm:-right-10">
            <Quote className="size-7 text-gold-400" />
            <p className="mt-3 font-heading text-lg leading-snug italic">Together, we can do more.</p>
            <p className="mt-3 text-xs font-semibold tracking-wider text-white/55 uppercase">Barakat Odunuga-Bakare</p>
          </div>
          <div className="absolute -top-6 -left-6 -z-10 size-40 rounded-full bg-gold-200" />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Meet Barakat"
            title={
              <>
                A daughter of Surulere, <span className="text-forest-600 italic">ready to serve it.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Barakat Olawunmi Odunuga-Bakare was born in Surulere in 1986. She went to primary school on Bank-Olemoh, secondary school on Akinhanmi, and then trained as a lawyer in the United Kingdom and at the Nigerian Law School.
            </p>
            <p>
              She came home to serve. Elected councillor for Akinhanmi-Cole Ward in 2017 and again in 2021, she led the Surulere Legislative Arm, wrote laws that changed how the council works, and kept her office open to anyone who needed help. In 2023 the Governor brought her into the State Executive Council to lead housing policy.
            </p>
            <p className="font-medium text-forest-900">
              She knows Surulere because she lives it. That is the difference she brings.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-9 flex flex-wrap items-center gap-6">
            <Button asChild className="h-13 rounded-full bg-forest-700 px-7 text-base font-semibold hover:bg-forest-800">
              <Link href="/about">
                Read her story
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Link href="/record" className="group flex items-center gap-1.5 font-semibold text-forest-800 hover:text-forest-600">
              See her track record
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className="border-border px-2 py-12 sm:px-8 [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r"
            >
              <div className="font-heading text-5xl font-semibold text-forest-700 sm:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 max-w-[14rem] text-sm leading-snug font-medium text-muted-foreground sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="container-x py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="The agenda"
            title={
              <>
                Six priorities. <span className="text-forest-600 italic">One Surulere.</span>
              </>
            }
            intro="Her plan for the Assembly grows out of problems she has already worked on: rent and housing, schools, jobs for young people, small business, safety and the state of our streets."
          />
          <Reveal>
            <Button asChild variant="outline" className="h-12 rounded-full border-forest-700/30 px-6 font-semibold text-forest-800">
              <Link href="/agenda">
                The full agenda
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/agenda#${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-forest-600 hover:bg-forest-800 hover:shadow-2xl hover:shadow-forest-900/20"
              >
                <span className="font-heading text-sm font-semibold text-muted-foreground/60 transition-colors group-hover:text-gold-300/70">
                  0{i + 1}
                </span>
                <span className="mt-6 grid size-14 place-items-center rounded-2xl bg-forest-50 text-forest-700 transition-colors group-hover:bg-gold-400 group-hover:text-forest-950">
                  <p.icon className="size-7" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-forest-950 transition-colors group-hover:text-white">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">{p.summary}</p>
                <span className="mt-auto flex items-center gap-1.5 pt-6 text-sm font-bold text-forest-700 transition-colors group-hover:text-gold-300">
                  Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Track record */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        <div className="bg-grain absolute inset-0 -z-10 opacity-50" />
        <div className="container-x grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              light
              eyebrow="Proven results"
              title={
                <>
                  These are not promises. <span className="text-gold-300 italic">They are results.</span>
                </>
              }
              intro="Long before this campaign, Barakat was lighting streets, paying for exam forms, feeding families and standing between residents and the bulldozers. Here is some of that work."
            />
            <Reveal delay={0.1} className="mt-10 grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src="/images/site-inspection.jpg" alt="Officials in hard hats on a site inspection" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src="/images/with-governor.jpg" alt="Barakat Odunuga-Bakare with Governor Sanwo-Olu" fill sizes="25vw" className="object-cover object-left" />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Button asChild className="mt-10 h-13 rounded-full bg-gold-400 px-7 text-base font-bold text-forest-950 hover:bg-gold-300">
                <Link href="/record">
                  The full record
                  <ArrowRight data-icon="inline-end" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {highlights.map((r, i) => (
              <Reveal as="li" key={r.title} delay={(i % 2) * 0.08} className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-gold-400/40 hover:bg-white/[0.07]">
                  <r.icon className="size-8 text-gold-400" />
                  <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{r.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Journey */}
      <section className="container-x py-24 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Her journey"
          title={
            <>
              From Ward E1 <span className="text-forest-600 italic">to the cabinet.</span>
            </>
          }
          intro="Nine years of public service, every step taken with Surulere."
        />
        <div className="relative mt-16">
          <div className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-forest-300 to-transparent lg:block" />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.1} className="relative">
                  <span className="relative z-10 grid size-14 place-items-center rounded-full border-4 border-cream bg-forest-700 font-heading text-sm font-bold text-gold-300 shadow-lg">
                    {m.year.slice(2)}
                  </span>
                  <p className="mt-6 font-heading text-4xl font-semibold text-gold-500">{m.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-forest-950">{m.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
        <Reveal className="mt-14 text-center">
          <Link href="/about#journey" className="group inline-flex items-center gap-1.5 font-semibold text-forest-800 hover:text-forest-600">
            See the full timeline
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>

      {/* Countdown */}
      <section className="relative isolate overflow-hidden bg-forest-900 py-24 text-white sm:py-28">
        <Image src="/images/leaders-group.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-forest-950 via-forest-900/95 to-forest-800/90" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Àjùmọ̀ṣe, Àjùmọ̀jẹ</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl">
              What we build together, <span className="text-gold-300 italic">we share together.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-white/70">
              Election day is coming. Make sure your Permanent Voter&apos;s Card is ready, know your polling unit, and bring one more person with you.
            </p>
            <Button asChild className="mt-8 h-13 rounded-full bg-white px-7 text-base font-bold text-forest-900 hover:bg-gold-200">
              <Link href="/get-involved#vote">
                <Vote data-icon="inline-start" />
                Voter checklist
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">Countdown to the {site.election.label}</p>
            <Countdown date={site.election.date} />
          </Reveal>
        </div>
      </section>

      {/* News */}
      <section className="container-x py-24 sm:py-32">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="From the trail" title="News and updates" />
          <Reveal>
            <Link href="/news" className="group inline-flex items-center gap-1.5 font-semibold text-forest-800 hover:text-forest-600">
              All news
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.08}>
              <NewsCard item={n} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="overflow-hidden bg-white py-24 sm:py-28">
        <div className="container-x flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="On the ground" title="Moments with the people" />
          <Reveal>
            <Link href="/gallery" className="group inline-flex items-center gap-1.5 font-semibold text-forest-800 hover:text-forest-600">
              Open the gallery
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
        <div className="container-x mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {strip.map((g, i) => (
            <Reveal
              key={g.src}
              delay={i * 0.05}
              className={i === 0 ? "col-span-2 row-span-2" : undefined}
            >
              <Link href="/gallery" className="group relative block h-full overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
