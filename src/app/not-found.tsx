import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-forest-950 pt-32 pb-20 text-white">
      <div className="bg-weave absolute inset-0 -z-10" />
      <div className="container-x text-center">
        <p className="font-display text-[8rem] leading-none font-bold text-gold-300/90 sm:text-[12rem]">404</p>
        <h1 className="mt-4 text-2xl sm:text-4xl">This street is not on our map.</h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-white/65">
          The page you are looking for has moved or never existed. Let us take you back to the campaign.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-13 items-center gap-2 rounded-[4px] bg-gold-400 px-7 font-sans text-lg font-bold tracking-wide text-forest-950 uppercase transition-colors hover:bg-gold-300"
        >
          <ArrowLeft className="size-4" />
          Back to home
        </Link>
      </div>
    </section>
  )
}
