"use client"

import { useSyncExternalStore } from "react"

function diff(target: number) {
  const ms = Math.max(0, target - Date.now())
  return {
    Days: Math.floor(ms / 86_400_000),
    Hours: Math.floor((ms / 3_600_000) % 24),
    Minutes: Math.floor((ms / 60_000) % 60),
    Seconds: Math.floor((ms / 1000) % 60),
  }
}

const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}
const nowSeconds = () => Math.floor(Date.now() / 1000)

export function Countdown({ date }: { date: string }) {
  const target = new Date(date).getTime()
  // Null on the server so the prerendered markup never shows a stale time.
  const now = useSyncExternalStore(subscribe, nowSeconds, () => null)
  const left = now === null ? null : diff(target)

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer" aria-live="off">
      {(["Days", "Hours", "Minutes", "Seconds"] as const).map((unit) => (
        <div
          key={unit}
          className="relative overflow-hidden rounded-[4px] border-b-4 border-gold-400 bg-white px-2 py-4 text-center text-forest-950 shadow-xl sm:px-4 sm:py-6"
        >
          <div className="font-display text-4xl leading-none font-bold tabular-nums sm:text-6xl">
            {left ? String(left[unit]).padStart(2, "0") : "--"}
          </div>
          <div className="mt-2 font-display text-xs font-bold tracking-[0.2em] text-forest-600 uppercase sm:text-sm">
            {unit}
          </div>
        </div>
      ))}
    </div>
  )
}

export function DaysLeft({ date }: { date: string }) {
  const now = useSyncExternalStore(subscribe, nowSeconds, () => null)
  if (now === null) return <span className="tabular-nums">--</span>
  return <span className="tabular-nums">{diff(new Date(date).getTime()).Days}</span>
}
