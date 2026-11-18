"use client"

import { useMemo, useState } from "react"
import { SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = { slug: string; category: string; office: string; node: React.ReactNode }

function Chips({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string; count: number }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div role="group" aria-label={label} className="rail-sm rail-chips flex gap-2 sm:flex-wrap">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "inline-flex h-11 shrink-0 items-center gap-2 rounded-[4px] border-2 px-4 font-sans text-base font-bold tracking-wide whitespace-nowrap uppercase transition-colors",
            value === o.value ? "border-forest-700 bg-forest-700 text-white" : "border-forest-950/10 bg-white text-forest-950 hover:border-forest-600"
          )}
        >
          {o.label}
          <span className={cn("rounded-[3px] px-1.5 text-xs", value === o.value ? "bg-gold-400 text-forest-950" : "bg-forest-50 text-forest-700")}>{o.count}</span>
        </button>
      ))}
    </div>
  )
}

export function ProjectBrowser({
  items,
  categories,
  offices,
}: {
  items: Item[]
  categories: string[]
  offices: { slug: string; label: string }[]
}) {
  const [category, setCategory] = useState("all")
  const [office, setOffice] = useState("all")

  const shown = useMemo(
    () => items.filter((i) => (category === "all" || i.category === category) && (office === "all" || i.office === office)),
    [items, category, office]
  )

  const count = (key: "category" | "office", v: string) => items.filter((i) => i[key] === v).length
  const usedOffices = offices.filter((o) => count("office", o.slug) > 0)

  return (
    <div>
      <div className="space-y-4 rounded-md border border-border bg-white p-4 sm:p-6">
        <p className="flex items-center gap-2 font-sans text-sm font-bold tracking-[0.16em] text-forest-600 uppercase">
          <SlidersHorizontal className="size-4" /> Filter the record
        </p>
        <Chips
          label="Filter by category"
          value={category}
          onChange={setCategory}
          options={[
            { value: "all", label: "All", count: items.length },
            ...categories.filter((c) => count("category", c) > 0).map((c) => ({ value: c, label: c, count: count("category", c) })),
          ]}
        />
        <Chips
          label="Filter by office"
          value={office}
          onChange={setOffice}
          options={[
            { value: "all", label: "Every office", count: items.length },
            ...usedOffices.map((o) => ({ value: o.slug, label: o.label, count: count("office", o.slug) })),
          ]}
        />
      </div>

      <p className="mt-8 text-sm font-semibold text-muted-foreground" aria-live="polite">
        Showing {shown.length} of {items.length} projects
      </p>
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((i) => (
          <li key={i.slug}>{i.node}</li>
        ))}
      </ul>
    </div>
  )
}
