import Link from "next/link"
import { ArrowRight, SquareCheckBig, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const variants = {
  gold: "bg-gold-400 text-forest-950 hover:bg-gold-300 shadow-[0_10px_30px_-10px] shadow-gold-500/60",
  green: "bg-forest-700 text-white hover:bg-forest-600 shadow-[0_10px_30px_-12px] shadow-forest-900/50",
  white: "bg-white text-forest-950 hover:bg-gold-100",
  outline: "border-2 border-current bg-transparent hover:bg-white/10",
  ghostDark: "border-2 border-forest-950/15 bg-transparent text-forest-950 hover:border-forest-700 hover:text-forest-700",
}

export type CtaVariant = keyof typeof variants

export function ctaClass(variant: CtaVariant = "gold", size: "md" | "lg" = "lg", className?: string) {
  return cn(
    "group/cta inline-flex items-center justify-center gap-3 rounded-[4px] font-display font-bold tracking-wide uppercase transition-all duration-200 active:translate-y-px",
    size === "lg" ? "h-14 px-7 text-lg" : "h-11 px-5 text-base",
    variants[variant],
    className
  )
}

export function CtaLink({
  href,
  children,
  variant = "gold",
  size = "lg",
  icon = "check",
  className,
  external,
}: {
  href: string
  children: React.ReactNode
  variant?: CtaVariant
  size?: "md" | "lg"
  icon?: "check" | "arrow" | "none" | LucideIcon
  className?: string
  external?: boolean
}) {
  const Icon = icon === "check" ? SquareCheckBig : icon === "arrow" ? ArrowRight : icon === "none" ? null : icon
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={ctaClass(variant, size, className)}
    >
      {children}
      {Icon && (
        <Icon
          className={cn(
            "size-5 transition-transform duration-200",
            icon === "arrow" ? "group-hover/cta:translate-x-1" : "group-hover/cta:-rotate-6 group-hover/cta:scale-110"
          )}
        />
      )}
    </Link>
  )
}
