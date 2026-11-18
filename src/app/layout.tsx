import type { Metadata, Viewport } from "next"
import { IBM_Plex_Serif, Mrs_Saint_Delafield, Red_Hat_Display } from "next/font/google"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"
import { MobileActionBar } from "@/components/site/mobile-action-bar"
import { Toaster } from "@/components/ui/sonner"
import { site } from "@/lib/site"
import "./globals.css"

const display = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const body = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const signature = Mrs_Saint_Delafield({
  variable: "--font-saint",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.shortName} | ${site.constituency}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Barakat Odunuga-Bakare",
    "Barakat Odunuga",
    "BOB 2027",
    "Surulere Constituency 1",
    "Lagos State House of Assembly",
    "APC Surulere",
    "Surulere",
    "Lagos",
  ],
  authors: [{ name: "B.O.B 2027 Campaign Organisation" }],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: site.name,
    title: `${site.name}, ${site.tagline}`,
    description: site.description,
    images: [{ url: "/images/bob-2027-poster.jpg", width: 968, height: 1280, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}, ${site.tagline}`,
    description: site.description,
    images: ["/images/bob-2027-poster.jpg"],
  },
  alternates: { canonical: "/" },
}

export const viewport: Viewport = {
  themeColor: "#0b5a2e",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Barakat Olawunmi Odunuga-Bakare",
  alternateName: ["Barakat Odunuga-Bakare", "B.O.B"],
  honorificPrefix: "Hon. Barr.",
  jobTitle: "APC Candidate, Lagos State House of Assembly, Surulere Constituency I",
  birthDate: "1986-03-10",
  birthPlace: "Surulere, Lagos, Nigeria",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Bedfordshire" },
    { "@type": "EducationalOrganization", name: "Nigerian Law School" },
  ],
  affiliation: { "@type": "PoliticalParty", name: "All Progressives Congress" },
  url: site.url,
  image: `${site.url}/images/portrait-green.jpg`,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" data-scroll-behavior="smooth" suppressHydrationWarning className={`${display.variable} ${body.variable} ${signature.variable} antialiased`}>
      <body className="flex min-h-svh flex-col bg-cream">
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-forest-800 px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <Toaster position="top-center" theme="light" richColors />
      </body>
    </html>
  )
}
