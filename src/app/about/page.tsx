import type { Metadata } from "next"
import Image from "next/image"
import { Crown, GraduationCap, Handshake, Scale, Users, Sparkles } from "lucide-react"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { Reveal } from "@/components/site/reveal"
import { Eyebrow, SectionHeading } from "@/components/site/section-heading"
import { education, journey } from "@/lib/content"

export const metadata: Metadata = {
  title: "About Barakat",
  description:
    "The story of Hon. (Barr.) Barakat Odunuga-Bakare: born in Surulere, trained as a lawyer in the UK and Nigeria, two-term councillor and former Special Adviser on Housing to the Lagos State Governor.",
  alternates: { canonical: "/about" },
}

const values = [
  { icon: Users, title: "People first", body: "Every decision starts with the resident who has to live with it." },
  { icon: Scale, title: "Rule of law", body: "A lawyer by training, she believes good laws protect ordinary people best." },
  { icon: Handshake, title: "Loyalty", body: "In 2022 she stepped down for the party. She keeps her word, even when it costs her." },
  { icon: Sparkles, title: "Inclusion", body: "Women and young people belong at the table where decisions are made." },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About Barakat"
        title={
          <>
            Rooted in Surulere. <span className="text-gold-400">Ready for more.</span>
          </>
        }
        intro="Lawyer, legislator, cabinet member and lifelong Surulere resident. This is the woman asking for your vote."
        image="/images/portrait-gele-mono.jpg"
      />

      {/* Story */}
      <section className="container-x grid gap-14 py-24 sm:py-32 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-md">
            <Image src="/images/portrait-poise.jpg" alt="Barakat Odunuga-Bakare in a black dress and pearls" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover object-top" />
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
            {[
              ["Full name", "Barakat Olawunmi Odunuga-Bakare"],
              ["Born", "March 10, 1986, Surulere"],
              ["Profession", "Legal practitioner"],
              ["Party", "All Progressives Congress"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-border bg-white p-4">
                <dt className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">{k}</dt>
                <dd className="mt-1 font-semibold text-forest-950">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Her story"
            title={
              <>
                A Lagosian through and through, <span className="text-forest-600">shaped by Surulere.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Barakat Olawunmi Odunuga-Bakare was born on March 10, 1986, in Surulere Local Government Area of Lagos State. Her roots run deep in Lagos Island. She descends from the Oshodi, Olorogun Adodo and Onisemo royal families of Isale Eko.
            </p>
            <p>
              She started school at Mainland Preparatory Private School on Bank-Olemoh, Surulere, then attended Anglican Secondary School, Akinhanmi, and Lagos State Model College, Kankon. She left for London to take her A-Levels in Law, History, Politics and Psychology at the College of North East London.
            </p>
            <p>
              At the University of Bedfordshire she earned a Bachelor of Laws, then stayed on for a Master&apos;s in International Commercial Law. She came home to complete the Nigerian Law School and was called to the Nigerian Bar.
            </p>
            <blockquote className="my-10 border-l-4 border-gold-500 bg-gold-100/60 py-6 pr-6 pl-7 font-display text-3xl leading-[1] font-bold uppercase text-forest-900">
              Leadership is not defined by titles alone. It is defined by service, commitment and visible impact on people&apos;s lives.
            </blockquote>
            <p>
              In 2017 she won the APC ticket and the election for Akinhanmi-Cole Ward (E1). A year later her colleagues elected her Leader of the Surulere Legislative Arm. Voters returned her in 2021, and she kept the leadership. She also served as Vice Chairman of the Lagos State Councillors&apos; Forum and Legal Adviser to the Female Councillors&apos; Forum.
            </p>
            <p>
              In the council she sponsored and passed more than 27 bye-laws. Some improved welfare and living standards. Others strengthened the council&apos;s revenue so it could do more for residents. Outside the chamber, she lit streets, paid exam fees, backed women in business and fed families through the pandemic.
            </p>
            <p>
              In September 2023, Governor Babajide Sanwo-Olu appointed her Special Adviser on Housing and swore her into the Lagos State Executive Council. She supervised LASRERA, led a crackdown on land fraud and spoke up for tenants facing unfair rent hikes. She resigned in 2026 to run for the House of Assembly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-x">
          <SectionHeading align="center" eyebrow="What she stands for" title="The values behind the work" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="rounded-md border border-border bg-cream p-8">
                <span className="grid size-14 place-items-center rounded-md bg-forest-700 text-gold-300">
                  <v.icon className="size-7" />
                </span>
                <h3 className="mt-6 text-[1.75rem] text-forest-950">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section id="journey" className="scroll-mt-24 bg-forest-950 py-24 text-white sm:py-32">
        <div className="container-x">
          <SectionHeading light align="center" eyebrow="Timeline" title={<>The journey <span className="text-gold-400">so far</span></>} />
          <ol className="relative mx-auto mt-16 max-w-4xl before:absolute before:top-0 before:bottom-0 before:left-[1.1rem] before:w-px before:bg-white/15 sm:before:left-1/2">
                        {journey.map((m, i) => (
              <Reveal as="li" key={m.year + m.title} delay={0.05} className="relative grid gap-2 pb-14 pl-14 sm:grid-cols-2 sm:gap-16 sm:pl-0">
                  <span className="absolute top-1 left-0 grid size-9 place-items-center rounded-full border-4 border-forest-950 bg-gold-400 sm:left-1/2 sm:-translate-x-1/2">
                    {i === 0 ? <Crown className="size-3.5 text-forest-950" /> : m.year === "Education" ? <GraduationCap className="size-3.5 text-forest-950" /> : null}
                  </span>
                  <div className={i % 2 ? "sm:order-2" : "sm:text-right"}>
                    <p className="font-display text-4xl font-bold text-gold-300">{m.year}</p>
                  </div>
                  <div className={i % 2 ? "sm:text-right" : ""}>
                    <h3 className="text-[1.75rem]">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-white/65">{m.body}</p>
                  </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Education */}
      <section className="container-x py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <Eyebrow>Education</Eyebrow>
            <h2 className="mt-4 text-3xl text-forest-950 sm:text-4xl">
              Trained in two legal traditions.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              English common law at Bedfordshire, Nigerian practice at the Law School. That mix shapes how she reads a bill and how she defends a resident.
            </p>
          </div>
          <ul className="divide-y divide-border rounded-md border border-border bg-white">
            {education.map((e) => (
              <li key={e.school + e.detail} className="flex flex-col gap-1 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="font-semibold text-forest-950">{e.school}</p>
                  <p className="text-sm text-muted-foreground">{e.place}</p>
                </div>
                <span className="w-fit rounded-[3px] bg-forest-50 px-3 py-1.5 font-sans text-sm font-bold tracking-wide text-forest-700 uppercase">{e.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Stand with a candidate who has already delivered." />
    </>
  )
}
