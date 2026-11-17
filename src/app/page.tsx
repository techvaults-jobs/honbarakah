import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, CalendarDays, Clock, FolderKanban, HandCoins, MapPin, MessageSquareWarning, Quote, ShieldCheck, UsersRound, Vote } from "lucide-react"
import { Reveal } from "@/components/site/reveal"
import { Counter } from "@/components/site/counter"
import { Countdown } from "@/components/site/countdown"
import { Eyebrow, Hi, SectionHeading } from "@/components/site/section-heading"
import { CredentialMarquee, CtaBand, NewsCard } from "@/components/site/blocks"
import { CtaLink } from "@/components/site/cta-link"
import { AgendaExplorer } from "@/components/site/agenda-explorer"
import { communityRecord, dateParts, events, gallery, journey, news, pillars, posters, stats } from "@/lib/content"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const hub = [
  { icon: FolderKanban, href: "/projects", title: "Projects and achievements", body: "Every project on record: where it happened, who it served and the office behind it.", cta: "Explore the ledger" },
  { icon: MessageSquareWarning, href: "/constituency", title: "Constituency desk", body: "Report an issue, share an idea and track it with a reference number.", cta: "Open the desk" },
  { icon: UsersRound, href: "/get-involved", title: "Volunteers and supporters", body: "Join a ward team or put your name down as a supporter.", cta: "Sign up" },
  { icon: ShieldCheck, href: "/election-2027", title: "Election 2027 agents", body: "Register, get verified and protect the vote at your polling unit.", cta: "Become an agent" },
  { icon: HandCoins, href: "/support", title: "Support and partnership", body: "Fund, supply or sponsor a project and see what it delivers.", cta: "Partner with us" },
]

export default function HomePage() {
  const milestones = journey.filter((m) => ["2017", "2018", "2023", "2026"].includes(m.year))
  const latest = news.slice(0, 3)
  const strip = [gallery[1], gallery[2], gallery[6], gallery[3], gallery[10]]
  const agenda = pillars.map(({ icon: Icon, ...rest }) => ({ ...rest, iconNode: <Icon className="size-6" /> }))

  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-forest-700 text-white">
        <div className="bg-shards absolute inset-0 -z-10" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[64svh] md:inset-x-auto md:inset-y-0 md:right-0 md:h-auto md:w-[42%] lg:w-[44%]">
          <Image
            src="/images/portrait-green.jpg"
            alt="Hon. (Barr.) Barakat Odunuga-Bakare"
            fill
            priority
            sizes="(min-width: 768px) 44vw, 100vw"
            className="object-cover object-[center_15%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-700 via-forest-700/20 to-transparent md:bg-gradient-to-r md:from-forest-700 md:via-transparent md:to-transparent" />
        </div>

        <div className="container-x relative flex min-h-[100svh] flex-col justify-end pt-[52svh] pb-14 md:min-h-[56rem] md:justify-center md:pt-44 md:pb-40 lg:min-h-[100svh] lg:pb-36">
          <div className="max-w-3xl md:max-w-[58%] lg:max-w-[52%]">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-[3px] bg-apc-red px-2.5 py-1 font-display text-sm font-bold tracking-[0.14em] text-white">APC</span>
                <span className="font-display text-base font-bold tracking-[0.16em] text-gold-300 uppercase sm:text-lg">
                  Lagos State House of Assembly &middot; {site.constituency}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 font-display leading-[0.9] font-bold">
                <span className="block text-[3.4rem] sm:text-[5.6rem] xl:text-[6.8rem]">Barakat</span>
                <span className="block text-[2.2rem] text-white/95 sm:text-[3.6rem] xl:text-[4.4rem]">Odunuga-Bakare</span>
                <span className="mt-2 block text-[2.2rem] text-gold-400 sm:text-[3.6rem] xl:text-[4.4rem]">For Surulere.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
                Lawyer, two-term councillor and former Special Adviser on Housing to the Lagos State Governor. She has served Surulere from the ward to the cabinet. Now she is ready to be its voice in the Assembly.
              </p>
            </Reveal>
            <Reveal delay={0.24} className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CtaLink href="/get-involved">Join the Movement</CtaLink>
              <CtaLink href="/about" variant="white" icon="arrow">
                Meet Barakat
              </CtaLink>
            </Reveal>
          </div>
        </div>

        {/* Stat rail */}
        <div className="relative md:absolute md:inset-x-0 md:bottom-0">
          <div className="container-x">
            <Reveal delay={0.3} className="grid grid-cols-2 overflow-hidden rounded-t-md bg-white text-forest-950 shadow-2xl sm:grid-cols-4 md:max-w-[72%] lg:max-w-[62%]">
              {[
                ["27+", "Bye-laws passed"],
                ["2x", "Elected councillor"],
                ["2023", "Joined state cabinet"],
                ["9+", "Years of service"],
              ].map(([v, l], i) => (
                <div key={l} className={cn("border-forest-950/10 px-5 py-5 sm:px-6", i % 2 === 1 && "border-l", i > 1 && "border-t sm:border-t-0", i === 2 && "sm:border-l")}>
                  <div className="font-display text-4xl leading-none font-bold text-forest-700">{v}</div>
                  <div className="mt-1 font-display text-sm font-bold tracking-[0.1em] text-forest-950/60 uppercase">{l}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <div className="relative z-10 -my-3 overflow-x-clip py-3">
        <CredentialMarquee />
      </div>

      {/* ───────── Meet Barakat ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="grid overflow-hidden rounded-md bg-white shadow-[0_30px_80px_-40px] shadow-forest-950/30 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="relative min-h-[26rem] lg:min-h-[40rem]">
              <Image src="/images/portrait-smile.jpg" alt="Barakat Odunuga-Bakare smiling in a black dress and pearls" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover object-top" />
              <div className="absolute bottom-0 left-0 bg-forest-700 px-6 py-5 text-white">
                <p className="font-display text-5xl leading-none font-bold">1986</p>
                <p className="font-display text-sm font-bold tracking-[0.14em] text-gold-300 uppercase">Born in Surulere</p>
              </div>
            </Reveal>
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <Reveal>
                <Eyebrow>Meet Barakat</Eyebrow>
                <h2 className="mt-6 text-4xl text-forest-950 sm:text-5xl">
                  Authentic leadership. <Hi>A voice for the people.</Hi>
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="mt-7 space-y-5 text-lg leading-relaxed text-forest-950/75">
                <p>
                  Barakat Olawunmi Odunuga-Bakare grew up here. Primary school on Bank-Olemoh, secondary school on Akinhanmi, then law degrees in the United Kingdom and the Nigerian Law School.
                </p>
                <p>
                  She came home to serve. Twice elected councillor for Akinhanmi-Cole Ward, she led the Surulere Legislative Arm and passed more than 27 bye-laws. In 2023 the Governor brought her into the State Executive Council to lead housing policy.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-forest-950/10 pt-8">
                <div>
                  <p className="font-signature text-[2.4rem] leading-none text-forest-700 sm:text-5xl">Barakat Odunuga-Bakare</p>
                  <p className="mt-2 font-display text-sm font-bold tracking-[0.14em] text-forest-950/50 uppercase">Hon. (Barr.) Barakat Odunuga-Bakare</p>
                </div>
                <CtaLink href="/about" variant="green" size="md" icon="arrow">
                  Her story
                </CtaLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Platform hub ───────── */}
      <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-12 grid gap-8 lg:grid-cols-2 lg:items-end">
            <SectionHeading
              eyebrow="More than a campaign"
              title={
                <>
                  One platform. <Hi>Every way in.</Hi>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-forest-950/70 sm:text-xl">
                Follow the work, raise what matters on your street, join the team on the ground or help fund what comes next. Whatever brought you here, start below.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hub.map((h, i) => (
              <Reveal key={h.href} delay={(i % 3) * 0.06} className={cn(i === 0 && "sm:col-span-2 lg:col-span-1 lg:row-span-2")}>
                <Link
                  href={h.href}
                  className={cn(
                    "group relative isolate flex h-full flex-col overflow-hidden rounded-md p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-8",
                    i === 0 ? "bg-forest-800 text-white hover:shadow-forest-900/30" : "bg-cream text-forest-950 ring-1 ring-forest-950/8 hover:bg-white hover:shadow-forest-900/10"
                  )}
                >
                  {i === 0 && (
                    <>
                      <Image src="/images/site-walk.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw" className="-z-20 object-cover opacity-30" />
                      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-forest-950 via-forest-900/70 to-forest-800/30" />
                    </>
                  )}
                  <span className={cn("font-display text-sm font-bold tracking-[0.16em]", i === 0 ? "text-gold-300" : "text-forest-600")}>0{i + 1}</span>
                  <span
                    className={cn(
                      "mt-4 grid size-14 place-items-center rounded-[4px] transition-transform group-hover:-rotate-6",
                      i === 0 ? "bg-gold-400 text-forest-950" : "bg-forest-700 text-gold-300"
                    )}
                  >
                    <h.icon className="size-7" />
                  </span>
                  <h3 className={cn("mt-6 leading-tight", i === 0 ? "text-4xl lg:mt-auto lg:text-5xl" : "text-2xl")}>{h.title}</h3>
                  <p className={cn("mt-2 leading-relaxed", i === 0 ? "max-w-sm text-lg text-white/75" : "text-forest-950/65")}>{h.body}</p>
                  <span className={cn("mt-6 flex items-center gap-2 font-display text-base font-bold tracking-wide uppercase", i === 0 ? "text-gold-400" : "text-forest-700")}>
                    {h.cta} <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Quote band ───────── */}
      <section className="relative isolate overflow-hidden bg-forest-800 py-24 text-white sm:py-32">
        <div className="bg-shards absolute inset-0 -z-10" />
        <Quote className="absolute top-10 left-1/2 -z-10 size-48 -translate-x-1/2 text-white/5" />
        <Reveal className="container-x text-center">
          <p className="mx-auto max-w-4xl font-display text-4xl leading-[1.05] font-semibold uppercase sm:text-5xl lg:text-6xl">
            &ldquo;<span className="text-gold-400">Leadership</span> is not defined by titles alone. It is defined by{" "}
            <span className="text-gold-400">service, commitment and visible impact</span> on people&apos;s lives.&rdquo;
          </p>
          <p className="mt-8 font-display text-lg font-bold tracking-[0.2em] text-white/60 uppercase">The B.O.B 2027 creed</p>
        </Reveal>
      </section>

      {/* ───────── Agenda ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="The issues that matter"
              title={
                <>
                  Six priorities. <Hi>One Surulere.</Hi>
                </>
              }
              intro="Her plan for the Assembly grows out of problems she has already worked on. Pick a priority to see what she will push for."
            />
            <Reveal>
              <CtaLink href="/agenda" variant="ghostDark" size="md" icon="arrow">
                Full agenda
              </CtaLink>
            </Reveal>
          </div>
          <Reveal>
            <AgendaExplorer pillars={agenda} />
          </Reveal>
        </div>
      </section>

      {/* ───────── Proven results ───────── */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        <div className="bg-stripes absolute inset-0 -z-10 opacity-40" />
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <SectionHeading
              light
              eyebrow="Proven results"
              title={
                <>
                  Not promises. <Hi light>Results.</Hi>
                </>
              }
            />
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/75 sm:text-xl">
                Long before this campaign, Barakat was lighting streets, paying for exam forms, feeding families and standing between residents and the bulldozers.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-white/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="bg-forest-950 p-6 sm:p-8">
                <div className="font-display text-5xl leading-none font-bold text-gold-400 sm:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-3 max-w-[14rem] text-[0.95rem] leading-snug text-white/70">{s.label}</p>
              </Reveal>
            ))}
          </div>

          <div className="rail-sm mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {communityRecord.slice(0, 6).map((r, i) => (
              <Reveal key={r.title} delay={(i % 3) * 0.06} className="group flex gap-5 rounded-md border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-gold-400/50 hover:bg-white/[0.06]">
                <span className="grid size-12 shrink-0 place-items-center rounded-[4px] bg-gold-400 text-forest-950 transition-transform group-hover:-rotate-6">
                  <r.icon className="size-6" />
                </span>
                <div>
                  <h3 className="text-2xl">{r.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-white/65">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 flex justify-center">
            <CtaLink href="/projects" icon="arrow">
              Explore every project
            </CtaLink>
          </Reveal>
        </div>
      </section>

      {/* ───────── Journey ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Her journey"
            title={
              <>
                From Ward E1 <Hi>to the cabinet.</Hi>
              </>
            }
            intro="Nine years of public service, every step taken with Surulere."
          />
          <ol className="rail-sm relative mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 0.08} className="group relative overflow-hidden rounded-md bg-white p-7 ring-1 ring-forest-950/8 transition-all hover:-translate-y-1 hover:shadow-xl">
                <span className="text-outline pointer-events-none absolute -top-3 -right-2 font-display text-8xl font-bold text-forest-950/10 transition-colors group-hover:text-gold-400/50">
                  {m.year}
                </span>
                <span className="relative block h-1.5 w-12 bg-gold-400" />
                <p className="relative mt-6 font-display text-5xl leading-none font-bold text-forest-700">{m.year}</p>
                <h3 className="relative mt-3 text-2xl text-forest-950">{m.title}</h3>
                <p className="relative mt-2 leading-relaxed text-forest-950/65">{m.body}</p>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-12 text-center">
            <Link href="/about#journey" className="group inline-flex items-center gap-2 py-2 font-display text-lg font-bold tracking-wide text-forest-700 uppercase hover:text-forest-600">
              See the full timeline
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ───────── Countdown ───────── */}
      <section className="relative isolate overflow-hidden bg-gold-400 py-20 text-forest-950 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(-45deg,transparent_0_18px,rgba(0,0,0,0.035)_18px_36px)]" />
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <span className="inline-flex rounded-[3px] border-2 border-forest-950 px-2.5 py-1 font-display text-sm font-bold tracking-[0.14em] uppercase">
              Àjùmọ̀ṣe, Àjùmọ̀jẹ
            </span>
            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl">
              What we build together, <span className="text-forest-700">we share together.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg text-forest-950/75">
              Election day is coming. Make sure your Permanent Voter&apos;s Card is ready, know your polling unit, and bring one more person with you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaLink href="/election-2027#agents" variant="green" icon={ShieldCheck}>
                Become an agent
              </CtaLink>
              <CtaLink href="/election-2027#vote" variant="ghostDark" icon={Vote}>
                Voter checklist
              </CtaLink>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-4 font-display text-lg font-bold tracking-[0.14em] uppercase">Countdown to election day</p>
            <Countdown date={site.election.date} />
          </Reveal>
        </div>
      </section>

      {/* ───────── Calendar ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Campaign calendar" title={<>Key <Hi>moments</Hi></>} intro="Where the campaign has been, and the date that matters most." />
            <Reveal>
              <CtaLink href="/events" variant="ghostDark" size="md" icon="arrow">
                Full calendar
              </CtaLink>
            </Reveal>
          </div>
          <div className="grid gap-4">
            {events.map((e, i) => {
              const d = dateParts(e.date)
              const upcoming = i === 0
              return (
                <Reveal key={e.title} delay={i * 0.05}>
                  <Link
                    href={e.href ?? "/news"}
                    className={cn(
                      "group grid items-center gap-5 rounded-md p-5 transition-all sm:grid-cols-[auto_1fr_auto] sm:gap-8 sm:p-6",
                      upcoming ? "bg-forest-700 text-white shadow-xl shadow-forest-900/20" : "bg-white ring-1 ring-forest-950/8 hover:ring-forest-600"
                    )}
                  >
                    <div className={cn("flex w-24 flex-col items-center rounded-[4px] py-3 text-center", upcoming ? "bg-gold-400 text-forest-950" : "bg-forest-50 text-forest-800")}>
                      <span className="font-display text-5xl leading-none font-bold">{d.day}</span>
                      <span className="font-display text-sm font-bold tracking-[0.14em] uppercase">
                        {d.month} {d.year}
                      </span>
                    </div>
                    <div>
                      <span className={cn("font-display text-sm font-bold tracking-[0.16em] uppercase", upcoming ? "text-gold-300" : "text-forest-600")}>
                        {upcoming ? "Upcoming" : "Past"} &middot; {e.tag}
                      </span>
                      <h3 className="mt-1 text-3xl">{e.title}</h3>
                      <div className={cn("mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm", upcoming ? "text-white/75" : "text-forest-950/60")}>
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="size-4" /> {d.weekday}
                        </span>
                        {e.time && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="size-4" /> {e.time}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5">
                          <MapPin className="size-4" /> {e.venue}
                        </span>
                      </div>
                    </div>
                    <span className={cn("hidden size-12 place-items-center rounded-full transition-transform group-hover:translate-x-1 sm:grid", upcoming ? "bg-white/10" : "bg-forest-50 text-forest-700")}>
                      <ArrowUpRight className="size-5" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ───────── Poster wall ───────── */}
      <section className="relative isolate overflow-hidden bg-forest-950 py-24 text-white sm:py-32">
        <div className="bg-shards absolute inset-0 -z-10" />
        <div className="container-x">
          <SectionHeading
            light
            align="center"
            eyebrow="On the streets"
            title={
              <>
                Already on the ground <Hi light>in Surulere.</Hi>
              </>
            }
            intro="Posters, flyers and messages already circulating across the constituency."
          />
          <div className="rail-sm rail-narrow mt-12 flex items-center gap-6 py-4 sm:mt-16 sm:flex-wrap sm:justify-center lg:flex-nowrap">
            {posters.map((p, i) => (
              <Reveal
                key={p.src}
                delay={i * 0.06}
                className={cn(
                  "w-[44%] bg-white p-2 shadow-2xl transition-transform duration-500 hover:z-10 hover:scale-105 hover:rotate-0 sm:w-[30%] sm:p-3 lg:w-[calc((100%-6rem)/5)]",
                  ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"][i]
                )}
              >
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 1024px) 18vw, 45vw" className="h-auto w-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── News ───────── */}
      <section className="py-24 sm:py-32">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="From the trail" title={<>News &amp; <Hi>updates</Hi></>} />
            <Reveal>
              <CtaLink href="/news" variant="ghostDark" size="md" icon="arrow">
                All news
              </CtaLink>
            </Reveal>
          </div>
          <div className="rail-sm mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((n, i) => (
              <Reveal key={n.slug} delay={i * 0.08}>
                <NewsCard item={n} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Gallery strip ───────── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-x flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="On the ground" title={<>Moments with <Hi>the people</Hi></>} />
          <Reveal>
            <CtaLink href="/gallery" variant="ghostDark" size="md" icon="arrow">
              Open the gallery
            </CtaLink>
          </Reveal>
        </div>
        <div className="container-x mt-12 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[230px] sm:gap-4 lg:grid-cols-4">
          {strip.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.05} className={i === 0 ? "col-span-2 row-span-2" : undefined}>
              <Link href="/gallery" className="group relative block h-full overflow-hidden rounded-md bg-muted">
                <Image src={g.src} alt={g.alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 bg-forest-950/0 transition-colors group-hover:bg-forest-950/30" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
