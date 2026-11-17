import type { Metadata } from "next"
import { HandCoins, MessageSquareWarning } from "lucide-react"
import { PageHero } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { CtaLink } from "@/components/site/cta-link"
import { SectionHeading, Hi } from "@/components/site/section-heading"
import { ProjectCard } from "@/components/site/project-card"
import { ProjectBrowser } from "@/components/site/project-browser"
import { offices, projectCategories, projects } from "@/lib/platform"

export const metadata: Metadata = {
  title: "Projects and Achievements",
  description:
    "A structured record of the projects and interventions delivered by Hon. Barakat Odunuga-Bakare: where they happened, who they served and the office she held at the time.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  const delivered = projects.filter((p) => p.status === "Delivered").length
  const servedOffices = new Set(projects.map((p) => p.office)).size
  const summary = [
    { value: projects.length, label: "Projects and interventions on record" },
    { value: delivered, label: "Delivered and closed" },
    { value: projectCategories.length, label: "Areas of public life touched" },
    { value: servedOffices, label: "Offices they were delivered under" },
  ]

  return (
    <>
      <PageHero
        crumb="Projects"
        eyebrow="Projects and achievements"
        title={
          <>
            Work you can <span className="text-gold-400">see and check.</span>
          </>
        }
        intro="Every project on this page lists where it happened, who it served and the office Barakat held at the time. The record grows as the work does."
        image="/images/site-inspection.jpg"
      />

      <section className="border-b border-border bg-white">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4">
          {summary.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="border-border px-2 py-10 sm:px-8 [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
              <p className="font-display text-5xl font-bold text-forest-700 sm:text-6xl">{String(s.value).padStart(2, "0")}</p>
              <p className="mt-2 max-w-[13rem] text-sm font-medium text-muted-foreground sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x py-20 sm:py-28">
        <SectionHeading
          eyebrow="The project ledger"
          title={
            <>
              Filter by issue <Hi>or by office.</Hi>
            </>
          }
          intro="Tap a project to read what was done, the people it reached and the evidence behind it."
          className="mb-10"
        />
        <ProjectBrowser
          categories={[...projectCategories]}
          offices={offices.map((o) => ({ slug: o.slug, label: o.short }))}
          items={projects.map((p) => ({ slug: p.slug, category: p.category, office: p.office, node: <ProjectCard project={p} /> }))}
        />
      </section>

      <section className="relative isolate overflow-hidden bg-forest-950 py-20 text-white sm:py-24">
        <div className="bg-weave absolute inset-0 -z-10" />
        <div className="container-x grid gap-5 md:grid-cols-2">
          {[
            {
              icon: MessageSquareWarning,
              title: "Is your street next?",
              body: "Tell the constituency desk about the drain, the dark road or the school that needs attention. That is how the next project starts.",
              cta: { href: "/constituency#desk", label: "Report an issue" },
            },
            {
              icon: HandCoins,
              title: "Help build the next one",
              body: "Individuals, businesses and foundations can fund, supply or sponsor a project and see exactly where their support went.",
              cta: { href: "/support", label: "Support a project" },
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08} className="flex flex-col rounded-md border border-white/10 bg-white/[0.04] p-7 sm:p-10">
              <c.icon className="size-10 text-gold-400" />
              <h2 className="mt-5 text-3xl sm:text-4xl">{c.title}</h2>
              <p className="mt-3 max-w-md text-lg text-white/70">{c.body}</p>
              <CtaLink href={c.cta.href} size="md" icon="arrow" className="mt-8 self-start">
                {c.cta.label}
              </CtaLink>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
