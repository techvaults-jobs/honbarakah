"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

const format = (n: number) => Math.round(n).toLocaleString("en-US")

// Renders the final value on the server (good for SEO and no-JS), then counts up from zero
// on the client by writing to the DOM directly, so hydration always matches.
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return
    if (!inView) {
      el.textContent = format(0) + suffix
      return
    }
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => (el.textContent = format(v) + suffix),
    })
    return () => controls.stop()
  }, [inView, reduce, value, suffix])

  return (
    <span ref={ref} className="tabular-nums">
      {format(value)}
      {suffix}
    </span>
  )
}
