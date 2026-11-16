import type { Metadata } from "next"
import { PageHero, CtaBand } from "@/components/site/blocks"
import { GalleryGrid } from "@/components/site/gallery-grid"
import { gallery } from "@/lib/content"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Barakat Odunuga-Bakare on the campaign trail, in the community and in office.",
  alternates: { canonical: "/gallery" },
}

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        eyebrow="Gallery"
        title={
          <>
            In the room, <span className="text-gold-300 italic">on the street.</span>
          </>
        }
        intro="Ward meetings, site visits, campaign moments and the people who make this movement."
        image="/images/leaders-group.jpg"
      />
      <section className="container-x py-20 sm:py-24">
        <GalleryGrid items={gallery} />
      </section>
      <CtaBand title="Want to be in the next photo?" body="Come out to a ward meeting, a town hall or a campaign event. Sign up and we will tell you when we are on your street." />
    </>
  )
}
