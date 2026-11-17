import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { ArrowLeft, CalendarRange, FileText, Landmark, MapPin, Tag, UsersRound } from "lucide-react"
import { CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { ProjectCard, statusStyle } from "@/components/site/project-card"
import { getProject, officeTitle, projects } from "@/lib/platform"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return {}
  return { title: p.title, description: p.summary, alternates: { canonical: `/projects/${p.slug}` } }
}

export default function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  return (
    <Suspense fallback={<div className="min-h-svh bg-forest-800" />}>
      <ProjectDetail params={params} />
    </Suspense>
  )
}

async function ProjectDetail({ params }: { params: PageProps<"/projects/[slug]">["params"] }) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()

  const related = projects.filter((x) => x.slug !== p.slug && (x.category === p.category || x.office === p.office)).slice(0, 3)
  const facts = [
    { icon: Tag, label: "Category", value: p.category },
    { icon: Landmark, label: "Office", value: officeTitle(p.office) },
    { icon: CalendarRange, label: "Period", value: p.period },
    { icon: MapPin, label: "Location", value: p.location },
    { icon: UsersRound, label: "Beneficiaries", value: p.beneficiaries },
  ]

  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden bg-forest-800 pt-36 pb-16 text-white sm:pt-44 sm:pb-20">
          <div className="bg-shards absolute inset-0 -z-10" />
          <p.icon className="absolute top-24 -right-10 -z-10 size-[22rem] text-white/[0.05] sm:size-[30rem]" strokeWidth={1} />
          <div className="container-x max-w-5xl">
            <Link href="/projects" className="-my-2 inline-flex items-center gap-2 py-2 text-sm font-semibold text-white/60 hover:text-gold-300">
              <ArrowLeft className="size-4" />
              All projects
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="grid size-14 place-items-center rounded-[4px] bg-gold-400 text-forest-950">
                <p.icon className="size-7" />
              </span>
              <span className={cn("rounded-[3px] px-3 py-1 font-display text-sm font-bold tracking-wider uppercase", statusStyle[p.status])}>{p.status}</span>
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.05] text-balance sm:text-6xl">{p.title}</h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-white/75">{p.summary}</p>
          </div>
          <div className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
        </header>

        <div className="container-x grid max-w-5xl gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_20rem] lg:gap-14">
          <Reveal className="space-y-6 text-lg leading-[1.8] text-forest-950/85">
            {p.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {p.photos && p.photos.length > 0 && (
              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                {p.photos.map((ph) => (
                  <div key={ph.src} className="relative aspect-[4/3] overflow-hidden rounded-md bg-muted">
                    <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 320px, 50vw" className="object-cover" />
                  </div>
                ))}
              </div>
            )}

            {p.documents && p.documents.length > 0 && (
              <div className="pt-4">
                <h2 className="text-2xl text-forest-950">Supporting documents</h2>
                <ul className="mt-4 space-y-2">
                  {p.documents.map((d) => (
                    <li key={d.href}>
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-md border border-border bg-white p-4 text-base font-semibold text-forest-950 hover:border-forest-600">
                        <FileText className="size-5 text-forest-600" />
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <dl className="divide-y divide-border overflow-hidden rounded-md border border-border bg-white">
              {facts.map((f) => (
                <div key={f.label} className="flex gap-4 p-5">
                  <f.icon className="mt-0.5 size-5 shrink-0 text-forest-600" />
                  <div>
                    <dt className="text-xs font-bold tracking-[0.15em] text-muted-foreground uppercase">{f.label}</dt>
                    <dd className="mt-1 font-semibold text-forest-950">{f.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
            <Link href="/record" className="mt-4 block rounded-md bg-forest-50 p-5 text-sm font-semibold text-forest-800 hover:bg-forest-100">
              See this office in the public-service record &rarr;
            </Link>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border bg-white py-16 sm:py-20">
          <div className="container-x">
            <h2 className="text-3xl text-forest-950 sm:text-4xl">Related projects</h2>
            <div className="rail-sm mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <ProjectCard key={r.slug} project={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand title={<>The record is the promise. <span className="text-gold-400">Help extend it.</span></>} />
    </>
  )
}
