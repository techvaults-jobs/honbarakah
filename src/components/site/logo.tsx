import Link from "next/link"
import { cn } from "@/lib/utils"

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Barakat Odunuga-Bakare, home" className={cn("group flex items-center gap-3", className)}>
      <span
        className={cn(
          "grid size-11 place-items-center rounded-full border-2 font-heading text-lg font-bold italic transition-transform group-hover:-rotate-6",
          light ? "border-gold-400 bg-forest-900 text-gold-300" : "border-forest-600 bg-forest-700 text-gold-300"
        )}
      >
        B
      </span>
      <span className="leading-none">
        <span className={cn("block font-heading text-xl font-bold tracking-tight", light ? "text-white" : "text-forest-900")}>
          B<span className="text-gold-500">.</span>O<span className="text-gold-500">.</span>B
          <span className={cn("ml-1.5 font-sans text-sm font-semibold", light ? "text-gold-300" : "text-forest-600")}>2027</span>
        </span>
        <span className={cn("mt-1 block text-[0.62rem] font-semibold tracking-[0.22em] uppercase", light ? "text-white/60" : "text-muted-foreground")}>
          Barakat Odunuga-Bakare
        </span>
      </span>
    </Link>
  )
}
