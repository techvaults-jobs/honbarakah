import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Barakat Odunuga-Bakare, home" className={cn("group flex items-center gap-3", className)}>
      <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-[4px] bg-forest-700 shadow-lg shadow-forest-900/30 transition-transform group-hover:-rotate-3">
        <span className="font-display text-[1.35rem] leading-none font-bold tracking-tight text-white">
          B<span className="text-gold-400">O</span>B
        </span>
        <span className="flag-stripe absolute inset-x-0 bottom-0 h-1" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[1.15rem] leading-[0.95] font-bold tracking-tight whitespace-nowrap uppercase min-[400px]:text-[1.3rem] sm:text-[1.4rem]",
            light ? "text-white" : "text-forest-950"
          )}
        >
          Barakat <span className={light ? "text-gold-400" : "text-forest-600"}>Odunuga-Bakare</span>
        </span>
        <span
          className={cn(
            "mt-1 block font-display text-xs font-semibold tracking-[0.12em] whitespace-nowrap uppercase min-[400px]:tracking-[0.16em] sm:tracking-[0.22em]",
            light ? "text-white/60" : "text-forest-950/55"
          )}
        >
          Surulere Constituency I &middot; 2027
        </span>
      </span>
    </Link>
  )
}
