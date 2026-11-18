"use client"

import Image from "next/image"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import type { GalleryItem } from "@/lib/content"
import { cn } from "@/lib/utils"

const filters = ["All", "Portraits", "Campaign", "Community", "Office"] as const

export function GalleryGrid({ items, showFilters = true }: { items: GalleryItem[]; showFilters?: boolean }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All")
  const [index, setIndex] = useState<number | null>(null)

  const touchX = useRef<number | null>(null)
  const visible = useMemo(() => (filter === "All" ? items : items.filter((i) => i.category === filter)), [filter, items])
  const current = index === null ? null : visible[index]

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + visible.length) % visible.length)),
    [visible.length]
  )

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1)
      if (e.key === "ArrowLeft") step(-1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, step])

  return (
    <>
      {showFilters && (
        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter photos">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-[4px] border-2 px-5 py-2 font-sans text-base font-bold tracking-wide uppercase transition-colors",
                filter === f
                  ? "border-forest-700 bg-forest-700 text-white"
                  : "border-border bg-white text-forest-900 hover:border-forest-300"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {visible.map((item, i) => (
          <button
            key={item.src}
            onClick={() => setIndex(i)}
            className="group relative block w-full break-inside-avoid overflow-hidden rounded-md bg-muted text-left focus-visible:ring-4 focus-visible:ring-gold-400 focus-visible:outline-none"
            aria-label={`View photo: ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.w}
              height={item.h}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <span className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-forest-950/90 to-transparent p-5 pt-16 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      <Dialog open={index !== null} onOpenChange={(o) => !o && setIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-h-[95vh] w-[min(96vw,1100px)] max-w-none gap-0 overflow-hidden rounded-md border-0 bg-forest-950 p-0 sm:max-w-none"
        >
          {current && (
            <>
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <DialogDescription className="sr-only">{current.alt}</DialogDescription>
              <div
                className="relative flex max-h-[80vh] touch-pan-y items-center justify-center bg-black"
                onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
                onTouchEnd={(e) => {
                  if (touchX.current === null) return
                  const dx = e.changedTouches[0].clientX - touchX.current
                  if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1)
                  touchX.current = null
                }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  width={current.w}
                  height={current.h}
                  sizes="96vw"
                  className="h-auto max-h-[80vh] w-auto object-contain"
                />
                <button
                  onClick={() => step(-1)}
                  className="absolute left-3 grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25"
                  aria-label="Previous photo"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => step(1)}
                  className="absolute right-3 grid size-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25"
                  aria-label="Next photo"
                >
                  <ChevronRight />
                </button>
                <button
                  onClick={() => setIndex(null)}
                  className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25"
                  aria-label="Close"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="flex items-center justify-between gap-4 px-5 py-4 text-sm text-white/80">
                <span>{current.caption}</span>
                <span className="shrink-0 text-white/45 tabular-nums">
                  {index! + 1} / {visible.length}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
