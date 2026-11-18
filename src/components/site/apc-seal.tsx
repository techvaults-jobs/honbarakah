import Image from "next/image"
import { cn } from "@/lib/utils"

/** The APC flag seal, round, with a gold ring. */
export function ApcSeal({ className }: { className?: string }) {
  return (
    <Image
      src="/images/apc-logo.jpeg"
      alt="All Progressives Congress (APC) logo"
      width={400}
      height={400}
      className={cn("size-12 shrink-0 rounded-full object-cover ring-[3px] ring-gold-400 shadow-lg shadow-black/40", className)}
    />
  )
}

/** Seal plus the "Official candidate of the APC" line, shown on banners and in the footer. */
export function ApcBadge({ className }: { className?: string }) {
  return (
    <div className={cn("inline-flex items-center gap-3 rounded-full bg-white/10 py-1.5 pr-5 pl-1.5 ring-1 ring-white/15 backdrop-blur-sm", className)}>
      <ApcSeal className="size-12" />
      <span className="leading-tight">
        <span className="block font-sans text-[0.7rem] font-bold tracking-[0.14em] text-gold-300 uppercase">Official candidate of the</span>
        <span className="block font-display text-base font-bold text-white sm:text-lg">All Progressives Congress</span>
      </span>
    </div>
  )
}
