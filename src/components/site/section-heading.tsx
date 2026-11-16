import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

export function Eyebrow({ children, light = false, className }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase",
        light ? "text-gold-300" : "text-forest-600",
        className
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-gold-400" : "bg-gold-500")} />
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
      <Eyebrow light={light} className={align === "center" ? "justify-center" : undefined}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={cn(
          "mt-4 text-4xl leading-[1.05] font-semibold text-balance sm:text-5xl",
          light ? "text-white" : "text-forest-950"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn("mt-5 text-lg leading-relaxed text-pretty", light ? "text-white/70" : "text-muted-foreground")}>
          {intro}
        </p>
      )}
    </Reveal>
  )
}
