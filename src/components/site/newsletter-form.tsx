"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { newsletterSchema, submit } from "@/lib/forms"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [pending, setPending] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const parsed = newsletterSchema.safeParse({ type: "newsletter", email })
    if (!parsed.success) {
      toast.error("Please enter a valid email address.")
      return
    }
    setPending(true)
    try {
      await submit(parsed.data)
      setEmail("")
      toast.success("You are on the list. Welcome to the movement.")
    } catch (err) {
      toast.error((err as Error).message)
    } finally {
      setPending(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="h-14 w-full rounded-[4px] border border-white/15 bg-white/5 px-5 text-base text-white sm:flex-1 placeholder:text-white/40 focus:border-gold-400 focus:outline-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-14 items-center justify-center gap-2 rounded-[4px] bg-gold-400 px-7 font-sans text-lg font-bold tracking-wide text-forest-950 uppercase transition-colors hover:bg-gold-300 disabled:opacity-70"
      >
        {pending ? <Loader2 className="size-4 animate-spin" /> : null}
        Subscribe
        {!pending && <ArrowRight className="size-4" />}
      </button>
    </form>
  )
}
