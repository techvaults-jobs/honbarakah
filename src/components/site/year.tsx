"use client"

import { useSyncExternalStore } from "react"

const noop = () => () => {}

// The year is read on the client so the prerendered shell stays static.
export function Year() {
  const year = useSyncExternalStore(noop, () => new Date().getFullYear(), () => 2026)
  return <>{year}</>
}
