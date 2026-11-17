"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Item = { slug: string; category: string; node: React.ReactNode }

/** Category tabs for the newsroom. Only categories with stories get a tab. */
export function NewsFilter({ items, order }: { items: Item[]; order: string[] }) {
  const [active, setActive] = useState("All")
  const tabs = ["All", ...order.filter((c) => items.some((i) => i.category === c))]
  const shown = active === "All" ? items : items.filter((i) => i.category === active)

  return (
    <div>
      {tabs.length > 2 && (
        <div role="group" aria-label="Filter news" className="rail-sm rail-chips mb-8 flex gap-2 sm:flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={active === t}
              onClick={() => setActive(t)}
              className={cn(
                "h-11 shrink-0 rounded-[4px] border-2 px-5 font-display text-base font-bold tracking-wide whitespace-nowrap uppercase transition-colors",
                active === t ? "border-forest-700 bg-forest-700 text-white" : "border-forest-950/10 bg-white text-forest-950 hover:border-forest-600"
              )}
            >
              {t}
            </button>
          ))}
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((i) => (
          <div key={i.slug}>{i.node}</div>
        ))}
      </div>
    </div>
  )
}
