import {
  BookOpen,
  Briefcase,
  Droplets,
  Gavel,
  HeartHandshake,
  Home,
  Landmark,
  Lightbulb,
  Scale,
  ShieldAlert,
  Wheat,
  type LucideIcon,
} from "lucide-react"

/*
 * Long-term public-service record.
 *
 * Offices are the spine of the archive: every project points at the office it was
 * delivered under. When Barakat takes up a new office, add it here and tag new
 * projects with its slug. Nothing else needs rebuilding.
 */

export type Office = {
  slug: string
  title: string
  short: string
  body: string
  period: string
  kind: "Elected" | "Appointed" | "Party" | "Candidacy"
  current?: boolean
  highlights: string[]
}

export const offices: Office[] = [
  {
    slug: "candidate-2027",
    short: "Candidate 2027",
    title: "APC Candidate, Lagos State House of Assembly",
    body: "Surulere Constituency I",
    period: "2026 to date",
    kind: "Candidacy",
    current: true,
    highlights: [
      "Declared her bid on January 1, 2026 and resigned from the state cabinet",
      "Toured every ward and emerged as the party's candidate",
      "Opened the B.O.B 2027 campaign offices on August 20, 2026",
    ],
  },
  {
    slug: "special-adviser-housing",
    short: "Special Adviser on Housing",
    title: "Special Adviser on Housing to the Governor of Lagos State",
    body: "Lagos State Executive Council",
    period: "September 2023 to 2026",
    kind: "Appointed",
    highlights: [
      "Supervised LASRERA, the Lagos State Real Estate Regulatory Authority",
      "Oversaw the handling of thousands of real estate fraud complaints",
      "Pushed for mandatory registration and licensing of practitioners",
    ],
  },
  {
    slug: "campaign-secretary-2023",
    short: "Campaign Secretary",
    title: "Campaign Secretary, TGSEE",
    body: "2023 general election campaign",
    period: "2022 to 2023",
    kind: "Party",
    highlights: [
      "Coordinated the campaign behind victories for Tinubu, Sanwo-Olu, Gbajabiamila, Eshilokun and Elliot",
      "Chaired the Logistics Committee of the Wasiu Eshilokun Campaign Council",
    ],
  },
  {
    slug: "councillor-ward-e1",
    short: "Councillor, Ward E1",
    title: "Councillor, Akinhanmi-Cole Ward (E1)",
    body: "Surulere Local Government",
    period: "Elected 2017, re-elected 2021",
    kind: "Elected",
    highlights: [
      "Leader of the Surulere Legislative Arm from 2018, retained in 2021",
      "Vice Chairman, Lagos State Councillors' Forum",
      "Legal Adviser, Female Councillors' Forum",
    ],
  },
]

export const projectCategories = [
  "Infrastructure",
  "Legislation",
  "Education",
  "Economic empowerment",
  "Welfare",
  "Housing and property",
] as const

export type ProjectCategory = (typeof projectCategories)[number]
export type ProjectStatus = "Delivered" | "Ongoing" | "Planned"

export type Project = {
  slug: string
  title: string
  summary: string
  body: string[]
  category: ProjectCategory
  office: Office["slug"]
  period: string
  location: string
  beneficiaries: string
  status: ProjectStatus
  icon: LucideIcon
  /** Add photo paths under /public as the media team supplies them. */
  photos?: { src: string; alt: string }[]
  /** Reports, letters or gazettes that back the record up. */
  documents?: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: "street-lighting-ward-e1",
    title: "Street lighting for Ward E1",
    summary: "Lit streets that made Akinhanmi-Cole safer and busier after dark.",
    body: [
      "Dark streets send residents hurrying home, push shops to close early and give cover to crime.",
      "As councillor she facilitated street lighting projects across the ward. Lighting stays one of her first commitments because safe streets change how a community lives, trades and moves at night.",
    ],
    category: "Infrastructure",
    office: "councillor-ward-e1",
    period: "Councillor years",
    location: "Akinhanmi-Cole, Ward E1",
    beneficiaries: "Residents, traders and commuters in Ward E1",
    status: "Delivered",
    icon: Lightbulb,
  },
  {
    slug: "surulere-bye-laws",
    title: "27+ bye-laws for Surulere",
    summary: "Local laws that improved residents' welfare and raised the council's revenue.",
    body: [
      "Over her time in the Surulere Legislative Arm, Barakat sponsored and passed more than 27 bye-laws for the local government.",
      "From 2018 she led the chamber that debated and passed them. The laws improved residents' welfare and strengthened the council's internally generated revenue, giving it more room to deliver services.",
    ],
    category: "Legislation",
    office: "councillor-ward-e1",
    period: "2017 onwards",
    location: "Surulere Local Government",
    beneficiaries: "Every resident of Surulere LGA",
    status: "Delivered",
    icon: Scale,
  },
  {
    slug: "jamb-forms-learning-materials",
    title: "Free JAMB forms and learning materials",
    summary: "Exam forms and books for students from low-income homes.",
    body: [
      "Bright students were stalling at the exam gate because their families could not afford registration. She paid for JAMB forms and handed out learning materials so cost would not decide who sat the exam.",
      "That experience shapes her education agenda: fix school budgets and policy so families do not depend on one-off support.",
    ],
    category: "Education",
    office: "councillor-ward-e1",
    period: "Councillor years",
    location: "Ward E1 and wider Surulere",
    beneficiaries: "Secondary school students from low-income homes",
    status: "Delivered",
    icon: BookOpen,
  },
  {
    slug: "women-business-start-up",
    title: "Start-up support for women in business",
    summary: "Seed support that helped women start and grow small businesses.",
    body: [
      "Women traders and artisans keep Surulere's economy moving. Barakat provided business start-up support to women in the constituency and helped open employment opportunities for constituents.",
    ],
    category: "Economic empowerment",
    office: "councillor-ward-e1",
    period: "Councillor years",
    location: "Surulere",
    beneficiaries: "Women traders, artisans and job seekers",
    status: "Delivered",
    icon: Briefcase,
  },
  {
    slug: "food-relief",
    title: "Food relief through lockdown and Ramadan",
    summary: "Palliatives for families during the COVID-19 lockdown and successive Ramadan seasons.",
    body: [
      "When the COVID-19 lockdown shut markets and stopped daily earnings, she distributed food relief to families in the constituency. The support continued through successive Ramadan seasons.",
    ],
    category: "Welfare",
    office: "councillor-ward-e1",
    period: "2020 onwards",
    location: "Surulere",
    beneficiaries: "Vulnerable households",
    status: "Delivered",
    icon: Wheat,
  },
  {
    slug: "olode-okuta-demolitions",
    title: "Demolitions halted in Olode-Okuta",
    summary: "An intervention that kept residents in their homes.",
    body: [
      "Families in Olode-Okuta faced demolition of their homes. Barakat intervened and the demolitions were stopped.",
      "Her housing agenda builds on this: urban renewal should happen with fair process and real protection for residents.",
    ],
    category: "Housing and property",
    office: "councillor-ward-e1",
    period: "Councillor years",
    location: "Olode-Okuta, Surulere",
    beneficiaries: "Affected households in Olode-Okuta",
    status: "Delivered",
    icon: Home,
  },
  {
    slug: "alhaji-masha-drainage",
    title: "Drainage clearance on Alhaji Masha Road",
    summary: "Cleared channels to cut flooding along a busy corridor.",
    body: [
      "Blocked drains turned Alhaji Masha Road into a flood risk every rainy season. She secured the clearing of the drainage channels along the road.",
    ],
    category: "Infrastructure",
    office: "councillor-ward-e1",
    period: "Councillor years",
    location: "Alhaji Masha Road, Surulere",
    beneficiaries: "Residents, shops and road users along the corridor",
    status: "Delivered",
    icon: Droplets,
  },
  {
    slug: "direct-constituent-support",
    title: "Direct support for constituents",
    summary: "Financial and social support for hundreds of residents in hard seasons.",
    body: [
      "Beyond projects, she has supported hundreds of constituents financially and socially through difficult seasons.",
    ],
    category: "Welfare",
    office: "councillor-ward-e1",
    period: "Ongoing",
    location: "Surulere",
    beneficiaries: "Hundreds of individual constituents",
    status: "Ongoing",
    icon: HeartHandshake,
  },
  {
    slug: "lasrera-surulere-office",
    title: "LASRERA satellite office in Surulere",
    summary: "Property protection brought closer to residents.",
    body: [
      "Residents with real estate complaints once had to travel across Lagos to be heard. Barakat contributed to the establishment of a LASRERA satellite office in Surulere so buyers and tenants could get help closer to home.",
    ],
    category: "Housing and property",
    office: "special-adviser-housing",
    period: "2023 to 2026",
    location: "Surulere",
    beneficiaries: "Tenants, buyers and landlords in Surulere and nearby LGAs",
    status: "Delivered",
    icon: Landmark,
  },
  {
    slug: "land-fraud-crackdown",
    title: "The crackdown on land fraud",
    summary: "Thousands of complaints handled, many resolved and others prosecuted.",
    body: [
      "Under her supervision of LASRERA, thousands of real estate complaints were addressed. Many were resolved and others went to prosecution, working alongside agencies like the EFCC.",
      "She also spoke out against arbitrary rent increases and urged residents to report exploitative landlords and agents.",
    ],
    category: "Housing and property",
    office: "special-adviser-housing",
    period: "2023 to 2026",
    location: "Lagos State",
    beneficiaries: "Victims of land and rent fraud across Lagos",
    status: "Delivered",
    icon: ShieldAlert,
  },
  {
    slug: "practitioner-registration",
    title: "Registration of real estate practitioners",
    summary: "A push to license every agent and developer in Lagos.",
    body: [
      "Fake agents thrive where nobody is licensed. She pushed for the mandatory registration and licensing of real estate practitioners so residents can check who they are dealing with.",
    ],
    category: "Housing and property",
    office: "special-adviser-housing",
    period: "2023 to 2026",
    location: "Lagos State",
    beneficiaries: "Property buyers and tenants",
    status: "Delivered",
    icon: Gavel,
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function officeTitle(slug: string) {
  return offices.find((o) => o.slug === slug)?.title ?? ""
}

export function officeShort(slug: string) {
  return offices.find((o) => o.slug === slug)?.short ?? ""
}

/*
 * The team. Only publish people and contact routes the office has approved.
 * Add a `photo` path once a headshot is supplied.
 */
export type TeamMember = {
  name: string
  role: string
  bio: string
  responsibilities: string[]
  contact: { label: string; href: string }
  photo?: string
}

export const team: TeamMember[] = [
  {
    name: "Korede Alabi",
    role: "Chief Media Aide",
    bio: "Korede leads media and communications for Hon. Barakat Odunuga-Bakare, and is the first point of contact for journalists and media organisations.",
    responsibilities: ["Press statements and briefings", "Interview and appearance requests", "Official photographs and campaign media"],
    contact: { label: "Send a media request", href: "/contact" },
  },
]

export type Desk = { title: string; body: string; route: { label: string; href: string } }

export const desks: Desk[] = [
  {
    title: "Constituency Desk",
    body: "Logs community issues, ideas and enquiries from residents, routes them to the right agency and reports back.",
    route: { label: "Open the desk", href: "/constituency" },
  },
  {
    title: "Media and Communications",
    body: "Statements, speeches, interviews, photography and accreditation for journalists.",
    route: { label: "Media request", href: "/contact" },
  },
  {
    title: "Mobilisation and Volunteers",
    body: "Ward teams, volunteers and supporters across Surulere Constituency I.",
    route: { label: "Join a ward team", href: "/get-involved" },
  },
  {
    title: "Election Operations",
    body: "Agent recruitment, verification, training and the election day situation room.",
    route: { label: "Become an agent", href: "/election-2027" },
  },
  {
    title: "Partnerships",
    body: "Works with individuals and organisations who want to fund, supply or sponsor projects.",
    route: { label: "Partner with us", href: "/support" },
  },
  {
    title: "Legal and Compliance",
    body: "Keeps the campaign and its support in line with the Electoral Act and data protection law.",
    route: { label: "Read our privacy policy", href: "/privacy" },
  },
]
