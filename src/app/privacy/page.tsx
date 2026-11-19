import type { Metadata } from "next"
import Link from "next/link"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How the office of Hon. Barakat Odunuga-Bakare collects, uses and protects the personal data you share through this platform.",
  alternates: { canonical: "/privacy" },
}

const sections = [
  {
    title: "Who we are",
    body: [
      `This platform is run by the office and campaign organisation of ${site.fullTitle}. We handle personal data in line with the Nigeria Data Protection Act 2023.`,
    ],
  },
  {
    title: "What we collect",
    body: [
      "Only what you choose to give us through a form: your name, phone number, email address, ward, and the details of your message, report or offer. Agent registration also asks for your polling unit and PVC status.",
      "We do not ask for your Voter Identification Number, bank details or passwords, and you should never send them.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "To respond to you, act on community issues, coordinate volunteers, verify and assign election agents, follow up on support offers and send updates you have asked for.",
      "Election agent details are used only by the campaign's election operations team for verification, training and assignment.",
    ],
  },
  {
    title: "Who sees it",
    body: [
      "Authorised members of the office and campaign team, and the service providers that deliver our email. We do not sell, rent or trade your data. Where an issue needs a government agency to fix it, we share only what that agency needs to act.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "For as long as it is needed for the purpose you gave it, or as the law requires. You can ask us to delete your details at any time.",
    ],
  },
  {
    title: "Your rights",
    body: [
      `You can ask to see, correct or delete the personal data we hold about you, or withdraw consent to updates. Write to ${site.contact.email} and we will respond within the time the law allows.`,
    ],
  },
]

export default function PrivacyPage() {
  return (
    <>
      <header className="bg-forest-950 pt-36 pb-14 text-white sm:pt-44">
        <div className="container-x max-w-3xl">
          <p className="font-sans text-sm font-bold tracking-[0.16em] text-gold-400 uppercase">Data protection</p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Privacy policy</h1>
          <p className="mt-5 text-lg text-white/70">Plain language on what happens to the details you share with us.</p>
        </div>
      </header>
      <div className="container-x max-w-3xl py-14 sm:py-20">
        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-2xl text-forest-950">{s.title}</h2>
              <div className="mt-3 space-y-4 text-lg leading-relaxed text-forest-950/80">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        <p className="mt-14 border-t border-border pt-6 text-sm text-muted-foreground">
          Questions about this policy? <Link href="/contact" className="font-semibold text-forest-700 underline underline-offset-2">Contact the office</Link>.
        </p>
      </div>
    </>
  )
}
