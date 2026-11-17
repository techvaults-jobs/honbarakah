"use client"

import { useState } from "react"
import { Lightbulb, MessageCircleQuestion, TriangleAlert } from "lucide-react"
import { cn } from "@/lib/utils"
import { PortalForm, type PortalFormKey } from "./portal-form"

type Tab = { key: PortalFormKey; label: string; hint: string; icon: typeof Lightbulb }

const constituencyTabs: Tab[] = [
  { key: "issue", label: "Report an issue", hint: "A problem on your street or in your ward", icon: TriangleAlert },
  { key: "idea", label: "Share an idea", hint: "Something that would make Surulere better", icon: Lightbulb },
  { key: "feedback", label: "Ask or follow up", hint: "Questions, feedback and follow-ups", icon: MessageCircleQuestion },
]

/** Several portal forms behind one tab strip, so a page offers one desk instead of a wall of forms. */
export function DeskTabs({ tabs = constituencyTabs }: { tabs?: Tab[] }) {
  const [active, setActive] = useState(tabs[0].key)

  return (
    <div>
      <div role="tablist" aria-label="Choose what you want to do" className="grid gap-2 sm:grid-cols-3">
        {tabs.map((t) => {
          const on = t.key === active
          return (
            <button
              key={t.key}
              id={`desk-tab-${t.key}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`desk-panel-${t.key}`}
              onClick={() => setActive(t.key)}
              className={cn(
                "flex items-center gap-3.5 rounded-md border-2 p-4 text-left transition-all",
                on ? "border-forest-700 bg-forest-700 text-white shadow-lg shadow-forest-900/20" : "border-forest-950/10 bg-white text-forest-950 hover:border-forest-600"
              )}
            >
              <span className={cn("grid size-11 shrink-0 place-items-center rounded-[4px]", on ? "bg-gold-400 text-forest-950" : "bg-forest-50 text-forest-700")}>
                <t.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg leading-tight font-bold uppercase">{t.label}</span>
                <span className={cn("block text-sm leading-snug", on ? "text-white/70" : "text-muted-foreground")}>{t.hint}</span>
              </span>
            </button>
          )
        })}
      </div>
      {tabs.map((t) => (
        <div
          key={t.key}
          id={`desk-panel-${t.key}`}
          role="tabpanel"
          aria-labelledby={`desk-tab-${t.key}`}
          hidden={t.key !== active}
          className="mt-4 rounded-md border border-border bg-white p-5 shadow-xl shadow-forest-900/5 sm:p-10"
        >
          <PortalForm form={t.key} />
        </div>
      ))}
    </div>
  )
}
