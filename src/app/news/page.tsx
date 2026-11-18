import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHero, NewsCard } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { formatDate, news, newsCategories } from "@/lib/content"
import { NewsFilter } from "@/components/site/news-filter"

export const metadata: Metadata = {
  title: "News and Statements",
  description: "Campaign news, statements and press coverage of Barakat Odunuga-Bakare and the B.O.B 2027 campaign in Surulere Constituency I.",
  alternates: { canonical: "/news" },
}

export default function NewsPage() {
  const [featured, ...rest] = news

  return (
    <>
      <PageHero
        crumb="News and Statements"
        eyebrow="Newsroom"
        title={
          <>
            News from <span className="text-gold-400">the trail.</span>
          </>
        }
        intro="Campaign updates, official statements, speeches, interviews and what the press is saying about B.O.B 2027."
        image="/images/volunteers-jersey.jpg"
      />

      <section className="container-x py-20 sm:py-28">
        <Reveal>
          <Link href={`/news/${featured.slug}`} className="group grid overflow-hidden rounded-md border border-border bg-white lg:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image src={featured.image} alt="" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <span className="w-fit rounded-[3px] bg-gold-400 px-3 py-1 font-sans text-sm font-bold tracking-wider text-forest-950 uppercase">Latest</span>
              {featured.date && (
                <p className="mt-5 text-sm font-semibold tracking-[0.15em] text-muted-foreground uppercase">{formatDate(featured.date)}</p>
              )}
              <h2 className="mt-3 text-3xl leading-tight text-forest-950 group-hover:text-forest-700 sm:text-6xl">{featured.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <span className="mt-8 flex items-center gap-1.5 font-bold text-forest-700">
                Read the story <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>

        <div className="mt-12">
          <NewsFilter order={[...newsCategories]} items={rest.map((n) => ({ slug: n.slug, category: n.source && !n.body ? "Press" : n.category, node: <NewsCard item={n} /> }))} />
        </div>
      </section>
    </>
  )
}
