"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, ArrowRight, Mail, CalendarClock, SquareCheckBig, ChevronDown } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { nav, site, type NavItem } from "@/lib/site"
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
  const groupActive = (item: NavItem) => (item.children ?? [item]).some((c) => isActive(c.href))

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
            <span className="hidden lg:inline">{site.role}</span>
            <span className="hidden h-3 w-px bg-forest-950/30 lg:block" />
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 py-2 normal-case tracking-normal hover:underline">
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
              {nav.map((item) => {
                const active = groupActive(item)
                const linkClass = cn(
                  "relative flex items-center gap-1 px-3 py-2 font-display text-[1.05rem] font-bold tracking-wide uppercase transition-colors",
                  scrolled
                    ? active
                      ? "text-forest-600"
                      : "text-forest-950 hover:text-forest-600"
                    : active
                      ? "text-gold-400"
                      : "text-white hover:text-gold-300"
                )
                const bar = (
                  <span
                    className={cn(
                      "absolute inset-x-3 -bottom-1 h-[3px] origin-left bg-gold-400 transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0"
                    )}
                  />
                )
                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass}>
                        {item.label}
                        {bar}
                      </Link>
                    </li>
                  )
                }
                return (
                  <li key={item.href} className="group/nav relative">
                    <Link href={item.href} className={linkClass} aria-haspopup="true">
                      {item.label}
                      <ChevronDown className="size-4 opacity-60 transition-transform group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
                      {bar}
                    </Link>
                    <div className="invisible absolute top-full left-1/2 w-80 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                      <ul className="overflow-hidden rounded-md border-t-4 border-gold-400 bg-white p-2 shadow-2xl shadow-forest-950/25">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              className={cn(
                                "group/item flex items-center gap-3 rounded-[4px] px-4 py-3 transition-colors hover:bg-forest-50",
                                isActive(c.href) && "bg-forest-50"
                              )}
                            >
                              <span className="min-w-0 flex-1">
                                <span className="block font-display text-lg leading-tight font-bold text-forest-950 uppercase group-hover/item:text-forest-700">
                                  {c.label}
                                </span>
                                {c.note && <span className="mt-0.5 block text-sm text-muted-foreground">{c.note}</span>}
                              </span>
                              <ArrowRight className="size-4 -translate-x-1 text-forest-600 opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              })}
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
                <div className="bg-shards flex h-full flex-col p-6 pt-5 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
                  <Logo light />
                  <nav aria-label="Mobile" className="-mx-2 mt-8 flex-1 overflow-y-auto px-2 pb-6">
                    <ul className="space-y-1">
                      <li>
                        <SheetClose asChild>
                          <Link
                            href="/"
                            className={cn(
                              "flex items-center rounded-[4px] px-3 py-2 font-display text-[1.7rem] font-bold uppercase transition-colors",
                              pathname === "/" ? "bg-white/10 text-gold-400" : "text-white hover:bg-white/5"
                            )}
                          >
                            Home
                            <ArrowRight className="ml-auto size-5 opacity-40" />
                          </Link>
                        </SheetClose>
                      </li>
                      {nav.map((item) =>
                        item.children ? (
                          <li key={item.href} className="pt-3">
                            <p className="px-3 font-display text-sm font-bold tracking-[0.18em] text-gold-400/80 uppercase">{item.label}</p>
                            <ul className="mt-1.5 grid grid-cols-1 gap-0.5 border-l-2 border-white/10 pl-2 min-[400px]:grid-cols-2">
                              {item.children.map((c) => (
                                <li key={c.href}>
                                  <SheetClose asChild>
                                    <Link
                                      href={c.href}
                                      className={cn(
                                        "block rounded-[4px] px-3 py-2.5 text-base leading-tight font-semibold transition-colors",
                                        isActive(c.href) ? "bg-white/10 text-gold-400" : "text-white/85 hover:bg-white/5"
                                      )}
                                    >
                                      {c.label}
                                    </Link>
                                  </SheetClose>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={item.href}>
                            <SheetClose asChild>
                              <Link
                                href={item.href}
                                className={cn(
                                  "flex items-center rounded-[4px] px-3 py-2 font-display text-[1.7rem] font-bold uppercase transition-colors",
                                  isActive(item.href) ? "bg-white/10 text-gold-400" : "text-white hover:bg-white/5"
                                )}
                              >
                                {item.label}
                                <ArrowRight className="ml-auto size-5 opacity-40" />
                              </Link>
                            </SheetClose>
                          </li>
                        )
                      )}
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
