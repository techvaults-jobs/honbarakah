"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"
import type { Pillar } from "@/lib/content"
import { cn } from "@/lib/utils"

type PillarData = Omit<Pillar, "icon"> & { iconNode: React.ReactNode }

export function AgendaExplorer({ pillars }: { pillars: PillarData[] }) {
  const [active, setActive] = useState(0)
  const p = pillars[active]

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
      <div role="tablist" aria-label="Agenda priorities" className="flex flex-col gap-2">
        {pillars.map((item, i) => (
          <button
            key={item.slug}
            role="tab"
            id={`tab-${item.slug}`}
            aria-selected={active === i}
            aria-controls="agenda-panel"
            onClick={() => setActive(i)}
            className={cn(
              "group flex items-center gap-4 rounded-md border-2 p-4 text-left transition-all duration-200 sm:p-5",
              active === i
                ? "border-forest-700 bg-forest-700 text-white shadow-xl shadow-forest-900/20"
                : "border-forest-950/10 bg-white text-forest-950 hover:border-forest-600"
            )}
          >
            <span
              className={cn(
                "grid size-12 shrink-0 place-items-center rounded-[4px] transition-colors",
                active === i ? "bg-gold-400 text-forest-950" : "bg-forest-50 text-forest-700 group-hover:bg-forest-100"
              )}
            >
              {item.iconNode}
            </span>
            <span className="flex-1">
              <span className={cn("block font-display text-sm font-bold tracking-[0.16em]", active === i ? "text-gold-300" : "text-forest-600")}>
                PRIORITY 0{i + 1}
              </span>
              <span className="block font-display text-2xl leading-none font-semibold">{item.title}</span>
            </span>
            <ArrowRight className={cn("size-5 shrink-0 transition-transform", active === i ? "translate-x-0 text-gold-400" : "-translate-x-1 opacity-30")} />
          </button>
        ))}
      </div>

      <div id="agenda-panel" role="tabpanel" aria-labelledby={`tab-${p.slug}`} className="relative min-h-[34rem] overflow-hidden rounded-md bg-forest-950 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full flex-col"
          >
            <div className="relative h-56 shrink-0 sm:h-64">
              <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_30%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
              <span className="absolute top-5 left-5 rounded-[3px] bg-gold-400 px-2.5 py-1 font-display text-sm font-bold tracking-[0.14em] text-forest-950 uppercase">
                Priority 0{active + 1}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-9">
              <h3 className="text-4xl sm:text-5xl">{p.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-white/75">{p.why}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.plans.map((plan) => (
                  <li key={plan} className="flex gap-3 text-[0.95rem] leading-snug text-white/90">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-[3px] bg-gold-400 text-forest-950">
                      <Check className="size-3.5" strokeWidth={3.5} />
                    </span>
                    {plan}
                  </li>
                ))}
              </ul>
              <Link
                href={`/agenda#${p.slug}`}
                className="mt-auto inline-flex items-center gap-2 self-start pt-8 font-display text-lg font-bold tracking-wide text-gold-400 uppercase hover:text-gold-300"
              >
                Read the full plan <ArrowRight className="size-5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
