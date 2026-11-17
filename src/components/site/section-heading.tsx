import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

export function Eyebrow({ children, light = false, className }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-[3px] border-2 px-2.5 py-1 font-display text-sm font-bold tracking-[0.14em] uppercase",
        light ? "border-gold-400/70 text-gold-300" : "border-forest-950 text-forest-950",
        className
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
  align = "left",
  className,
}: {
  eyebrow: string
  title: React.ReactNode
  intro?: React.ReactNode
  light?: boolean
  align?: "left" | "center"
  className?: string
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "mt-5 text-5xl text-balance sm:text-6xl lg:text-7xl",
          light ? "text-white" : "text-forest-950"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed text-pretty sm:text-xl", light ? "text-white/75" : "text-forest-950/70")}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}

/** Highlighted word inside a heading. */
export function Hi({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <span className={light ? "text-gold-400" : "text-forest-600"}>{children}</span>
}
