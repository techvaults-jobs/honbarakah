"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// One observer shared by every Reveal on the page.
let observer: IntersectionObserver | null = null
function observe(el: Element) {
  if (typeof IntersectionObserver === "undefined") {
    el.classList.add("is-in")
    return () => {}
  }
  observer ??= new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in")
          observer?.unobserve(e.target)
        }
      }
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.01 }
  )
  observer.observe(el)
  return () => observer?.unobserve(el)
}

type RevealProps = React.HTMLAttributes<HTMLElement> & {
  as?: "div" | "li"
  delay?: number
  y?: number
}

/**
 * Fades content up as it scrolls into view. Content is visible in the server HTML;
 * it is only hidden once the inline `js` class confirms scripts are running, and
 * reduced-motion users always see it immediately (see `.reveal` in globals.css).
 */
export function Reveal({ as = "div", delay = 0, y = 24, className, style, children, ...props }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => (ref.current ? observe(ref.current) : undefined), [])

  const Comp = as
  return (
    <Comp
      ref={ref as React.Ref<HTMLDivElement & HTMLLIElement>}
      className={cn("reveal", className)}
      style={{ ...style, ["--reveal-delay" as string]: `${delay}s`, ["--reveal-y" as string]: `${y}px` }}
      {...props}
    >
      {children}
    </Comp>
  )
}
