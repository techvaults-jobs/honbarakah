"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, ArrowRight, Mail, CalendarClock, SquareCheckBig } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { SocialLinks } from "./social-icons"
import { DaysLeft } from "./countdown"
import { ctaClass } from "./cta-link"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Top bar */}
      <div
        className={cn(
          "overflow-hidden bg-gold-400 text-forest-950 transition-all duration-300",
          scrolled ? "h-0" : "h-9"
        )}
      >
        <div className="container-x flex h-9 items-center justify-between gap-4 font-display text-[0.8rem] font-bold tracking-[0.12em] uppercase sm:text-sm">
          <p className="flex items-center gap-2">
            <CalendarClock className="size-4" />
            <span>
              <DaysLeft date={site.election.date} /> days to the Assembly election
            </span>
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <span>{site.role}</span>
            <span className="h-3 w-px bg-forest-950/30" />
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 normal-case tracking-normal hover:underline">
              <Mail className="size-4" />
              {site.contact.email}
            </a>
            <SocialLinks itemClassName="size-7 hover:bg-forest-950 hover:text-gold-300" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "bg-white/95 shadow-[0_8px_30px_-12px] shadow-forest-950/25 backdrop-blur-xl" : "bg-transparent"
        )}
      >
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Logo light={!scrolled} />

          <nav aria-label="Main" className="hidden xl:block">
            <ul className="flex items-center">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative block px-3.5 py-2 font-display text-[1.05rem] font-bold tracking-wide uppercase transition-colors",
                      scrolled
                        ? isActive(item.href)
                          ? "text-forest-600"
                          : "text-forest-950 hover:text-forest-600"
                        : isActive(item.href)
                          ? "text-gold-400"
                          : "text-white hover:text-gold-300"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute inset-x-3.5 -bottom-1 h-[3px] origin-left bg-gold-400 transition-transform duration-300",
                        isActive(item.href) ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/get-involved" className={ctaClass("gold", "md", "hidden sm:inline-flex")}>
              Join Today
              <SquareCheckBig className="size-5" />
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "grid size-12 place-items-center rounded-[4px] transition-colors xl:hidden",
                    scrolled ? "bg-forest-950 text-white" : "bg-white/10 text-white backdrop-blur hover:bg-white/20"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="size-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm border-l-0 bg-forest-950 p-0 text-white">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="bg-shards flex h-full flex-col p-6 pt-5">
                  <Logo light />
                  <nav aria-label="Mobile" className="mt-10 flex-1">
                    <ul className="space-y-1">
                      {nav.map((item, i) => (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center gap-4 rounded-[4px] px-3 py-2.5 font-display text-3xl font-extrabold uppercase transition-colors",
                                isActive(item.href) ? "bg-white/10 text-gold-400" : "text-white hover:bg-white/5"
                              )}
                            >
                              <span className="w-6 text-sm font-semibold text-white/40">0{i + 1}</span>
                              {item.label}
                              <ArrowRight className="ml-auto size-5 opacity-40" />
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <SheetClose asChild>
                    <Link href="/get-involved" className={ctaClass("gold", "lg", "w-full")}>
                      Join the Movement
                      <SquareCheckBig className="size-5" />
                    </Link>
                  </SheetClose>
                  <div className="flag-stripe mt-6 h-1.5 w-full rounded-full" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
