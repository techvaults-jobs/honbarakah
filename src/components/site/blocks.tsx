import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, Star } from "lucide-react"
import { credentials, formatDate, type NewsItem } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./section-heading"
import { Reveal } from "./reveal"
import { CtaLink } from "./cta-link"

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  crumb,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  image: string
  crumb: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-800 pt-40 pb-20 text-white sm:pt-48 sm:pb-28">
      <div className="bg-shards absolute inset-0 -z-10" />
      <div className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] lg:block">
        <Image src={image} alt="" fill priority sizes="46vw" className="object-cover object-[center_25%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-800 via-forest-800/40 to-transparent" />
      </div>
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-20 lg:hidden" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 font-display text-sm font-semibold tracking-[0.14em] text-white/60 uppercase">
          <Link href="/" className="hover:text-gold-300">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-gold-400">{crumb}</span>
        </nav>
        <Reveal className="max-w-2xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-5xl text-balance sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">{intro}</p>}
        </Reveal>
      </div>
      <div className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
    </section>
  )
}

export function CtaBand({
  title = (
    <>
      Surulere deserves a voice <span className="text-gold-400">that works.</span>
    </>
  ),
  body = "Join the residents who are ready to build a stronger, fairer constituency. Volunteer in your ward, talk to your neighbours, and come out to vote.",
}: {
  title?: React.ReactNode
  body?: string
}) {
  return (
    <section className="relative isolate overflow-hidden bg-forest-700 text-white">
      <div className="bg-shards absolute inset-0 -z-10" />
      <div className="container-x grid items-end gap-0 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="py-20 sm:py-24">
          <Eyebrow light>Together, we can do more</Eyebrow>
          <h2 className="mt-6 text-5xl text-balance sm:text-6xl lg:text-7xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="/get-involved">Volunteer</CtaLink>
            <CtaLink href="/agenda" variant="white" icon="arrow">
              Read the agenda
            </CtaLink>
          </div>
        </Reveal>
        <div className="relative hidden h-full min-h-[30rem] self-stretch lg:block">
          <Image
            src="/images/portrait-green.jpg"
            alt=""
            fill
            sizes="40vw"
            className="object-cover object-[center_15%] [mask-image:linear-gradient(to_right,transparent,black_35%),linear-gradient(to_top,transparent,black_25%)] [mask-composite:intersect]"
          />
        </div>
      </div>
    </section>
  )
}

export function CredentialMarquee({ className }: { className?: string }) {
  const items = [...credentials, ...credentials]
  return (
    <div className={cn("relative flex -rotate-[1.2deg] overflow-hidden bg-gold-400 py-4 shadow-xl", className)}>
      <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8 motion-reduce:animate-none">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-8 font-display text-xl font-bold whitespace-nowrap text-forest-950 uppercase sm:text-2xl">
            {c}
            <Star className="size-5 fill-forest-700 text-forest-700" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}

export function NewsCard({ item, priority = false }: { item: NewsItem; priority?: boolean }) {
  const external = !!item.source && !item.body
  const href = external ? item.source!.url : `/news/${item.slug}`
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_2px_0_0] shadow-forest-950/5 ring-1 ring-forest-950/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/15">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-0 right-0 rounded-bl-md bg-gold-400 px-3 py-1.5 font-display text-sm font-bold tracking-wider text-forest-950 uppercase">
          {item.source ? item.source.name : item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-forest-600 uppercase">
          {item.date ? formatDate(item.date) : "In the press"}
        </p>
        <h3 className="mt-2 text-2xl leading-[1.02] text-forest-950 sm:text-[1.7rem]">
          <Link href={href} {...linkProps} className="after:absolute after:inset-0 group-hover:text-forest-700">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 leading-relaxed text-forest-950/65">{item.excerpt}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-5 font-display text-base font-bold tracking-wide text-forest-700 uppercase">
          {external ? `Read on ${item.source!.name}` : "Read the story"}
          {external ? <ArrowUpRight className="size-4" /> : <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </div>
    </article>
  )
}
