"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import type { Pillar } from "@/lib/content"
import { cn } from "@/lib/utils"

type PillarData = Omit<Pillar, "icon"> & { iconNode: React.ReactNode }

function Panel({ p, index }: { p: PillarData; index: number }) {
  return (
    <div className="flex h-full flex-col">
      <div className="relative h-48 shrink-0 sm:h-64">
        <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
        <span className="absolute top-4 left-4 rounded-[3px] bg-gold-400 px-2.5 py-1 font-display text-sm font-bold tracking-[0.14em] text-forest-950 uppercase sm:top-5 sm:left-5">
          Priority 0{index + 1}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-9">
        <h3 className="hidden text-4xl lg:block">{p.title}</h3>
        <p className="text-base leading-relaxed text-white/75 sm:text-lg lg:mt-4">{p.why}</p>
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
          className="mt-auto inline-flex items-center gap-2 self-start pt-7 pb-1 font-display text-lg font-bold tracking-wide text-gold-400 uppercase hover:text-gold-300"
        >
          Read the full plan <ArrowRight className="size-5" />
        </Link>
      </div>
    </div>
  )
}

/**
 * Tabs with a side panel on desktop; an accordion on phones and tablets so the
 * answer opens right under the tapped priority instead of off-screen below the list.
 */
export function AgendaExplorer({ pillars }: { pillars: PillarData[] }) {
  const [active, setActive] = useState(0)
  const p = pillars[active]

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
      <div className="flex flex-col gap-2">
        {pillars.map((item, i) => {
          const open = active === i
          return (
            <div key={item.slug}>
              <button
                id={`tab-${item.slug}`}
                aria-expanded={open}
                aria-controls={`panel-${item.slug}`}
                onClick={() => setActive(i)}
                className={cn(
                  "group flex w-full items-center gap-3.5 rounded-md border-2 p-3.5 text-left transition-all duration-200 sm:gap-4 sm:p-5",
                  open
                    ? "border-forest-700 bg-forest-700 text-white shadow-xl shadow-forest-900/20 max-lg:rounded-b-none"
                    : "border-forest-950/10 bg-white text-forest-950 hover:border-forest-600"
                )}
              >
                <span
                  className={cn(
                    "grid size-11 shrink-0 place-items-center rounded-[4px] transition-colors sm:size-12",
                    open ? "bg-gold-400 text-forest-950" : "bg-forest-50 text-forest-700 group-hover:bg-forest-100"
                  )}
                >
                  {item.iconNode}
                </span>
                <span className="min-w-0 flex-1">
                  <span className={cn("block font-display text-[0.8rem] font-bold tracking-[0.16em] sm:text-sm", open ? "text-gold-300" : "text-forest-600")}>
                    PRIORITY 0{i + 1}
                  </span>
                  <span className="block font-display text-xl leading-tight font-semibold sm:text-2xl">{item.title}</span>
                </span>
                <ArrowRight className={cn("hidden size-5 shrink-0 transition-transform lg:block", open ? "text-gold-400" : "-translate-x-1 opacity-30")} />
                <ChevronDown className={cn("size-5 shrink-0 transition-transform lg:hidden", open ? "rotate-180 text-gold-400" : "opacity-40")} />
              </button>

              {/* Phone and tablet: answer opens in place */}
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    id={`panel-${item.slug}`}
                    role="region"
                    aria-labelledby={`tab-${item.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden rounded-b-md bg-forest-950 text-white lg:hidden"
                  >
                    <Panel p={item} index={i} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* Desktop: side panel */}
      <div className="relative hidden min-h-[34rem] overflow-hidden rounded-md bg-forest-950 text-white lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="h-full"
          >
            <Panel p={p} index={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
