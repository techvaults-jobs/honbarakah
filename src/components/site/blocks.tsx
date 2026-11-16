import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { credentials, formatDate, type NewsItem } from "@/lib/content"
import { cn } from "@/lib/utils"
import { Eyebrow } from "./section-heading"
import { Reveal } from "./reveal"

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
    <section className="relative isolate overflow-hidden bg-forest-950 pt-36 pb-20 text-white sm:pt-44 sm:pb-28">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover object-[center_30%] opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-950 via-forest-950/90 to-forest-950/40" />
      <div className="bg-weave absolute inset-0 -z-10" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm text-white/55">
          <Link href="/" className="hover:text-gold-300">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-white/85">{crumb}</span>
        </nav>
        <Reveal className="max-w-3xl">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-5xl leading-[1.02] font-semibold text-balance sm:text-6xl lg:text-7xl">{title}</h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">{intro}</p>}
        </Reveal>
      </div>
    </section>
  )
}

export function CtaBand({
  title = "Surulere deserves a voice that works.",
  body = "Join thousands of residents who are ready to build a stronger, fairer constituency. Volunteer in your ward, talk to your neighbours, and come out to vote.",
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-forest-800 px-6 py-14 text-white sm:px-14 sm:py-20">
        <div className="bg-weave absolute inset-0 -z-10" />
        <div className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-gold-400/25 blur-3xl" />
        <div className="absolute -bottom-32 left-10 -z-10 size-72 rounded-full bg-forest-400/30 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <Eyebrow light>Together, we can do more</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">{body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <Button asChild className="h-14 rounded-full bg-gold-400 px-8 text-base font-bold text-forest-950 hover:bg-gold-300">
              <Link href="/get-involved">
                Become a volunteer
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="h-14 rounded-full border-white/25 bg-transparent px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white">
              <Link href="/agenda">Read the agenda</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export function CredentialMarquee({ className }: { className?: string }) {
  const items = [...credentials, ...credentials]
  return (
    <div className={cn("relative flex overflow-hidden border-y border-forest-800 bg-forest-900 py-5", className)}>
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 motion-reduce:animate-none">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-heading text-lg text-white/85 italic sm:text-xl">
            {c}
            <span className="size-2 rotate-45 bg-gold-400" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  )
}

export function NewsCard({ item, priority = false }: { item: NewsItem; priority?: boolean }) {
  const external = !!item.source && !item.body
  const href = external ? item.source!.url : `/news/${item.slug}`
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl hover:shadow-forest-900/5">
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="relative block aspect-[16/10] overflow-hidden bg-muted"
      >
        <Image
          src={item.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-bold text-forest-800">
          {item.source ? item.source.name : item.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.15em] text-muted-foreground uppercase">
          {item.date ? formatDate(item.date) : "In the press"}
        </p>
        <h3 className="mt-3 text-xl leading-snug font-semibold text-forest-950 text-balance">
          <Link
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="hover:text-forest-700"
          >
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.excerpt}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-bold text-forest-700">
          {external ? `Read on ${item.source!.name}` : "Read the story"}
          {external ? <ArrowUpRight className="size-4" /> : <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />}
        </span>
      </div>
    </article>
  )
}
