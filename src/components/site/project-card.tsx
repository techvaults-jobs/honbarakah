import Link from "next/link"
import { ArrowRight, MapPin, UsersRound } from "lucide-react"
import { officeShort, type Project } from "@/lib/platform"
import { cn } from "@/lib/utils"

export const statusStyle: Record<Project["status"], string> = {
  Delivered: "bg-gold-400 text-forest-950",
  Ongoing: "bg-white text-forest-800",
  Planned: "bg-forest-950/40 text-white ring-1 ring-white/30",
}

export function ProjectCard({ project: p, className }: { project: Project; className?: string }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-md bg-white ring-1 ring-forest-950/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-forest-900/15",
        className
      )}
    >
      <div className="relative isolate flex h-36 items-end justify-between overflow-hidden bg-forest-800 p-5 text-white">
        <div className="bg-shards absolute inset-0 -z-10 opacity-80" />
        <p.icon className="absolute -top-4 -right-4 -z-10 size-40 text-white/[0.07] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" strokeWidth={1.25} />
        <span className="grid size-14 place-items-center rounded-[4px] bg-gold-400 text-forest-950 shadow-lg transition-transform group-hover:-rotate-6">
          <p.icon className="size-7" />
        </span>
        <span className={cn("rounded-[3px] px-2.5 py-1 font-display text-sm font-bold tracking-wider uppercase", statusStyle[p.status])}>{p.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="font-display text-sm font-semibold tracking-[0.14em] text-forest-600 uppercase">{p.category}</p>
        <h3 className="mt-2 text-2xl leading-tight text-forest-950">
          <Link href={`/projects/${p.slug}`} className="after:absolute after:inset-0 group-hover:text-forest-700">
            {p.title}
          </Link>
        </h3>
        <p className="mt-2 leading-relaxed text-forest-950/65">{p.summary}</p>
        <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-forest-950/75">
          <div className="flex gap-2.5">
            <dt className="sr-only">Location</dt>
            <MapPin className="mt-0.5 size-4 shrink-0 text-forest-600" />
            <dd>{p.location}</dd>
          </div>
          <div className="flex gap-2.5">
            <dt className="sr-only">Beneficiaries</dt>
            <UsersRound className="mt-0.5 size-4 shrink-0 text-forest-600" />
            <dd>{p.beneficiaries}</dd>
          </div>
        </dl>
        <p className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span className="truncate text-xs font-semibold tracking-wide text-muted-foreground uppercase">{officeShort(p.office)}</span>
          <ArrowRight className="size-5 shrink-0 text-forest-700 transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  )
}
