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
          className="rounded-2xl border border-white/10 bg-white/5 px-2 py-4 text-center backdrop-blur sm:px-4 sm:py-6"
        >
          <div className="font-heading text-3xl font-semibold text-gold-300 tabular-nums sm:text-5xl">
            {left ? String(left[unit]).padStart(2, "0") : "--"}
          </div>
          <div className="mt-1 text-[0.65rem] font-semibold tracking-[0.2em] text-white/60 uppercase sm:text-xs">
            {unit}
          </div>
        </div>
      ))}
    </div>
  )
}
