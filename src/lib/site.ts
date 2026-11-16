export const site = {
  name: "Hon. Barakat Odunuga-Bakare",
  shortName: "B.O.B 2027",
  fullTitle: "Hon. (Barr.) Barakat Odunuga-Bakare",
  role: "APC Candidate, Lagos State House of Assembly",
  constituency: "Surulere Constituency I",
  tagline: "The Voice of Hope",
  motto: "Bold. Oratorical. Beautiful.",
  rallyLine: "Together, we can do more.",
  url: "https://www.barakatodunuga.com",
  description:
    "Official campaign website of Hon. (Barr.) Barakat Odunuga-Bakare, APC candidate for the Lagos State House of Assembly, Surulere Constituency I. Lawyer, two-term councillor and former Special Adviser on Housing to the Governor of Lagos State.",
  // Confirm against the final INEC timetable before launch.
  election: {
    date: "2027-03-06T08:00:00+01:00",
    label: "Lagos State House of Assembly Election",
  },
  contact: {
    email: "info@barakatodunuga.com",
    // Leave empty until the campaign approves a public line.
    phone: "" as string,
    office: "Campaign Office, Surulere, Lagos State",
  },
  // Add handles as the media team confirms them. Empty entries are hidden.
  socials: {
    facebook: "",
    instagram: "",
    x: "",
    tiktok: "",
    youtube: "",
  },
} as const

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/record", label: "Track Record" },
  { href: "/agenda", label: "Agenda" },
  { href: "/news", label: "News" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const
