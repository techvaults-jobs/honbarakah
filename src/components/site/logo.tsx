import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Barakat Odunuga-Bakare, home" className={cn("group flex items-center gap-3", className)}>
      <span className="relative grid size-16 shrink-0 place-items-center overflow-hidden rounded-[4px] bg-forest-700 shadow-xl shadow-forest-900/40 ring-2 ring-gold-400 transition-transform group-hover:-rotate-3">
        <span className="font-display text-[2rem] leading-none font-bold tracking-[-0.02em] text-white">
          B<span className="text-gold-400">O</span>B
        </span>
        <span className="absolute top-0 right-0 size-4 bg-gold-400 [clip-path:polygon(0_0,100%_0,100%_100%)]" />
        <span className="flag-stripe absolute inset-x-0 bottom-0 h-1.5" />
      </span>
      <span
        className={cn(
          "block font-sans text-[0.9rem] leading-[1.02] font-bold tracking-wide whitespace-nowrap uppercase sm:text-[1rem]",
          light ? "text-white" : "text-forest-950"
        )}
      >
        Barakat
        <span className={cn("block", light ? "text-gold-400" : "text-forest-600")}>Odunuga-Bakare</span>
      </span>
    </Link>
  )
}
