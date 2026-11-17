import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { ArrowLeft, Calendar, Quote } from "lucide-react"
import { CtaBand, NewsCard } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { formatDate, getNews, news } from "@/lib/content"

export function generateStaticParams() {
  return news.filter((n) => n.body).map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const item = getNews(slug)
  if (!item) return {}
  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/news/${item.slug}` },
    openGraph: { type: "article", title: item.title, description: item.excerpt, images: [item.image], publishedTime: item.date },
  }
}

export default function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-svh bg-forest-950" />}>
      <NewsArticle params={params} />
    </Suspense>
  )
}

async function NewsArticle({ params }: { params: PageProps<"/news/[slug]">["params"] }) {
  const { slug } = await params
  const item = getNews(slug)
  if (!item || !item.body) notFound()

  const more = news.filter((n) => n.slug !== item.slug).slice(0, 3)

  return (
    <>
      <article>
        <header className="bg-forest-950 pt-36 pb-16 text-white sm:pt-44">
          <div className="container-x max-w-4xl">
            <Link href="/news" className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-gold-300">
              <ArrowLeft className="size-4" />
              All news
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span className="rounded-[3px] bg-gold-400 px-3 py-1 font-display font-bold tracking-wider text-forest-950 uppercase">{item.category}</span>
              {item.date && (
                <span className="flex items-center gap-2 text-white/60">
                  <Calendar className="size-4" />
                  <time dateTime={item.date}>{formatDate(item.date)}</time>
                </span>
              )}
            </div>
            <h1 className="mt-6 text-4xl leading-[1.08] text-balance sm:text-6xl">{item.title}</h1>
            <p className="mt-6 text-xl leading-relaxed text-white/70">{item.excerpt}</p>
          </div>
        </header>

        <div className="container-x max-w-4xl">
          <div className="relative -mt-2 aspect-[16/9] overflow-hidden rounded-b-[2rem] bg-muted sm:rounded-md sm:mt-10">
            <Image src={item.image} alt="" fill priority sizes="(min-width: 1024px) 900px, 100vw" className="object-cover object-top" />
          </div>
        </div>

        <div className="container-x max-w-3xl py-16 sm:py-20">
          <Reveal className="space-y-6 text-lg leading-[1.8] text-forest-950/85">
            {item.body.map((para, i) => (
              <p key={i} className={i === 0 ? "text-xl font-medium text-forest-950 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:font-black first-letter:text-forest-700" : undefined}>
                {para}
              </p>
            ))}
          </Reveal>
          {item.quote && (
            <Reveal className="relative mt-12 rounded-md bg-forest-800 p-8 text-white sm:p-10">
              <Quote className="size-10 text-gold-400" />
              <blockquote className="mt-4 font-display text-3xl leading-[1] font-extrabold uppercase sm:text-4xl">{item.quote}</blockquote>
              <p className="mt-6 text-sm font-semibold tracking-wider text-white/60 uppercase">Hon. (Barr.) Barakat Odunuga-Bakare</p>
            </Reveal>
          )}
        </div>
      </article>

      <section className="border-t border-border bg-white py-20">
        <div className="container-x">
          <h2 className="text-3xl text-forest-950">More from the campaign</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {more.map((n) => (
              <NewsCard key={n.slug} item={n} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
