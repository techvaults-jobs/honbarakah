"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Share2, SquareCheckBig } from "lucide-react"
import { toast } from "sonner"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

/** Thumb-reach actions for phones: shows once the visitor scrolls past the hero. */
export function MobileActionBar() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  async function share() {
    const url = typeof window !== "undefined" ? window.location.href : site.url
    const text = `${site.name}, ${site.tagline}. ${site.constituency}.`
    if (navigator.share) {
      try {
        await navigator.share({ title: site.name, text, url })
      } catch {
        // Closing the share sheet throws; nothing to do.
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      toast.success("Link copied. Share it with your people.")
    } catch {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`, "_blank", "noopener")
    }
  }

  if (pathname.startsWith("/get-involved")) return null

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-forest-950/10 bg-white/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-10px_30px_-12px] shadow-forest-950/25 backdrop-blur-xl transition-transform duration-300 sm:hidden",
        visible ? "translate-y-0" : "translate-y-full"
      )}
      aria-hidden={!visible}
    >
      <div className="flex gap-2.5">
        <Link
          href="/get-involved"
          tabIndex={visible ? 0 : -1}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-[4px] bg-gold-400 font-sans text-lg font-bold tracking-wide text-forest-950 uppercase active:translate-y-px"
        >
          Join the Movement
          <SquareCheckBig className="size-5" />
        </Link>
        <button
          onClick={share}
          tabIndex={visible ? 0 : -1}
          aria-label="Share this page"
          className="grid size-12 shrink-0 place-items-center rounded-[4px] bg-forest-700 text-white active:translate-y-px"
        >
          <Share2 className="size-5" />
        </button>
      </div>
    </div>
  )
}
