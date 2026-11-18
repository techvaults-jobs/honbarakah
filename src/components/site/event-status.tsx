"use client"

import { useSyncExternalStore } from "react"

const subscribe = () => () => {}
const today = () => new Date().toLocaleDateString("en-CA", { timeZone: "Africa/Lagos" })

/** "Upcoming" or "Held" badge, decided in the browser so the static page never goes stale. */
export function EventStatus({ date }: { date: string }) {
  const now = useSyncExternalStore(subscribe, today, () => null)
  if (now === null) return null
  const upcoming = date >= now
  return (
    <span
      className={
        upcoming
          ? "rounded-[3px] bg-apc-red px-2.5 py-1 font-sans text-xs font-bold tracking-wider text-white uppercase"
          : "rounded-[3px] bg-forest-950/5 px-2.5 py-1 font-sans text-xs font-bold tracking-wider text-forest-950/60 uppercase"
      }
    >
      {upcoming ? "Upcoming" : "Held"}
    </span>
  )
}
