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

export type NavLink = { href: string; label: string; note?: string }
export type NavItem = NavLink & { children?: NavLink[] }

export const nav: NavItem[] = [
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "Her story", note: "Biography, education and journey" },
      { href: "/agenda", label: "Vision and agenda", note: "Six priorities for Surulere" },
      { href: "/record", label: "Public-service record", note: "Offices, terms and results" },
      { href: "/team", label: "The team", note: "The people behind the office" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/constituency", label: "Constituency" },
  { href: "/election-2027", label: "Election 2027" },
  {
    href: "/news",
    label: "Media",
    children: [
      { href: "/news", label: "News and statements", note: "Updates, speeches and press" },
      { href: "/events", label: "Events", note: "Town halls, rallies and key dates" },
      { href: "/gallery", label: "Gallery", note: "Photos from the trail" },
    ],
  },
  {
    href: "/get-involved",
    label: "Get Involved",
    children: [
      { href: "/get-involved", label: "Volunteers and supporters", note: "Join a ward team" },
      { href: "/support", label: "Support and partnership", note: "Fund, supply or sponsor a project" },
      { href: "/contact", label: "Contact the office", note: "Media, invitations and enquiries" },
    ],
  },
]

/** Every page in the menu, flattened, for the footer and sitemap. */
export const allPages: NavLink[] = nav.flatMap((item) => item.children ?? [item])
