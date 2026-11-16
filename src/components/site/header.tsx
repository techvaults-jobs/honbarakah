"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { nav, site } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { SocialLinks } from "./social-icons"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "hidden bg-forest-950 text-white/70 transition-all duration-300 lg:block",
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
        )}
      >
        <div className="container-x flex h-10 items-center justify-between text-xs">
          <p className="font-medium tracking-wide">
            <span className="text-gold-300">{site.role}</span>
            <span className="mx-2 text-white/30">|</span>
            {site.constituency}
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${site.contact.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
              <Mail className="size-3.5" />
              {site.contact.email}
            </a>
            <SocialLinks itemClassName="size-7 hover:text-gold-300" />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "transition-all duration-300",
          scrolled ? "border-b border-border/70 bg-cream/90 shadow-sm backdrop-blur-xl" : "bg-cream/70 backdrop-blur-md"
        )}
      >
        <div className="container-x flex h-18 items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "relative rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                      isActive(item.href) ? "text-forest-700" : "text-forest-950/70 hover:text-forest-950"
                    )}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-gold-500" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild className="hidden h-11 rounded-full bg-forest-700 px-5 text-sm font-semibold hover:bg-forest-800 sm:inline-flex">
              <Link href="/get-involved">
                Join the Movement
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon-lg" className="rounded-full lg:hidden" aria-label="Open menu">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm border-l-0 bg-forest-950 p-0 text-white">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <div className="flex h-full flex-col p-6 pt-5">
                  <Logo light />
                  <nav aria-label="Mobile" className="mt-10 flex-1">
                    <ul className="space-y-1">
                      {nav.map((item) => (
                        <li key={item.href}>
                          <SheetClose asChild>
                            <Link
                              href={item.href}
                              className={cn(
                                "flex items-center justify-between rounded-xl px-4 py-3 font-heading text-2xl transition-colors",
                                isActive(item.href) ? "bg-white/10 text-gold-300" : "text-white/85 hover:bg-white/5"
                              )}
                            >
                              {item.label}
                              <ArrowRight className="size-4 opacity-50" />
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <Button asChild className="h-12 rounded-full bg-gold-400 text-base font-bold text-forest-950 hover:bg-gold-300">
                    <Link href="/get-involved">Join the Movement</Link>
                  </Button>
                  <p className="mt-6 text-center text-xs text-white/50">{site.constituency}</p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
