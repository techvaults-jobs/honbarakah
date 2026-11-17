import {
  Building2,
  GraduationCap,
  Rocket,
  HandCoins,
  ShieldCheck,
  Leaf,
  Scale,
  Lightbulb,
  HeartHandshake,
  BookOpen,
  Briefcase,
  Wheat,
  Home,
  Droplets,
  Landmark,
  type LucideIcon,
} from "lucide-react"

export const stats = [
  { value: 27, suffix: "+", label: "Bye-laws sponsored and passed in Surulere" },
  { value: 2, suffix: "", label: "Terms as elected Councillor, Ward E1" },
  { value: 9, suffix: "+", label: "Years in elected and appointed office" },
  { value: 1000, suffix: "s", label: "Real estate complaints handled under her watch" },
]

export const credentials = [
  "LL.B, University of Bedfordshire",
  "LL.M International Commercial Law",
  "Barrister and Solicitor of the Supreme Court of Nigeria",
  "Two-term Councillor, Akinhanmi-Cole Ward (E1)",
  "Former Leader, Surulere Legislative Arm",
  "Former Special Adviser on Housing to the Lagos State Governor",
  "Born and raised in Surulere",
]

export type Pillar = {
  slug: string
  icon: LucideIcon
  image: string
  title: string
  summary: string
  why: string
  plans: string[]
}

export const pillars: Pillar[] = [
  {
    slug: "housing",
    image: "/images/site-walk.jpg",
    icon: Building2,
    title: "Housing and Urban Renewal",
    summary:
      "Fair rent, safe property deals and planned neighbourhoods. This is the field she has worked in at the highest level of the state.",
    why: "Rent in Surulere keeps rising faster than incomes, and too many families have lost savings to fake land agents. Barakat spent two years supervising LASRERA, the agency that regulates real estate in Lagos. She knows where the law is weak because she has seen the cases.",
    plans: [
      "Push for stronger tenancy laws that check arbitrary rent increases and abusive agency fees",
      "Back the registration and licensing of every estate agent and developer operating in the constituency",
      "Support digital land records so title documents move faster and cost less",
      "Bring affordable home ownership, rent-to-own and joint venture schemes within reach of Surulere residents",
    ],
  },
  {
    slug: "education",
    image: "/images/teachers-day.jpg",
    icon: GraduationCap,
    title: "Quality Education",
    summary:
      "Better public schools, exam support and learning materials, so no child in Surulere is held back by the cost of school.",
    why: "As a councillor she paid for JAMB forms and handed out learning materials because she saw bright students stall at the exam gate. Those gestures helped. A lawmaker can do far more by fixing budgets and policy.",
    plans: [
      "Advocate for the upgrade of public primary and secondary schools across the constituency",
      "Expand support for JAMB, WAEC and NECO registration for students from low-income homes",
      "Champion teacher welfare and continuous training",
      "Promote digital literacy and coding clubs in public schools",
    ],
  },
  {
    slug: "youth",
    image: "/images/volunteers-jersey.jpg",
    icon: Rocket,
    title: "Youth Empowerment",
    summary:
      "Skills, jobs and room to lead. Surulere has talent in sport, creative work and tech, and it needs opportunity to match.",
    why: "Surulere is home to the National Stadium and a generation of creatives and entrepreneurs. Young people here do not lack ambition. They lack access. She has created jobs before and wants to scale that through law and partnerships.",
    plans: [
      "Partner with the private sector on skills acquisition and apprenticeship programmes",
      "Support sports development and grassroots talent pathways",
      "Push for youth inclusion in community and local government decisions",
      "Connect young entrepreneurs to state funding windows and mentorship",
    ],
  },
  {
    slug: "economy",
    image: "/images/stakeholders-anthem.jpg",
    icon: HandCoins,
    title: "Economic Inclusion",
    summary:
      "Support for women traders, artisans and small businesses, the people who keep Surulere's economy moving every day.",
    why: "She has already helped women start businesses with start-up support. Markets, artisans and small shops carry this constituency, and they deserve access to credit, fair levies and a voice in policy.",
    plans: [
      "Advocate for access to low-interest credit for women and small business owners",
      "Work with artisan and trader associations on fair, harmonised levies",
      "Champion business start-up support for women and young entrepreneurs",
      "Promote market upgrades and better trading conditions",
    ],
  },
  {
    slug: "security",
    image: "/images/leaders-group.jpg",
    icon: ShieldCheck,
    title: "Community Security",
    summary:
      "Lit streets, active community watch and strong ties between residents, CDAs and security agencies.",
    why: "Street lighting was one of her first projects as a councillor because safe streets change how people live after dark. Security starts with knowing your streets and the people who look after them.",
    plans: [
      "Push for the expansion of street lighting across all wards",
      "Support collaboration between CDAs, neighbourhood watch and the police",
      "Advocate for youth engagement programmes that reduce street crime",
      "Strengthen emergency response and reporting channels",
    ],
  },
  {
    slug: "growth",
    image: "/images/site-inspection.jpg",
    icon: Leaf,
    title: "Sustainable Growth",
    summary:
      "Clean drains, better roads and planning that keeps Surulere livable for the next generation.",
    why: "She secured the clearing of drainage along Alhaji Masha Road and stopped demolitions in Olode-Okuta. Small interventions like these protect homes and livelihoods. Done at scale, they shape the future of a community.",
    plans: [
      "Advocate for regular drainage maintenance and flood control",
      "Support road rehabilitation and inner-street repairs",
      "Promote green spaces and environmental sanitation",
      "Ensure fair process and resident protection in urban renewal projects",
    ],
  },
]

export type RecordItem = { icon: LucideIcon; title: string; body: string }

export const communityRecord: RecordItem[] = [
  {
    icon: Lightbulb,
    title: "Street lighting",
    body: "Facilitated street lighting projects that made Ward E1 safer and busier after dark.",
  },
  {
    icon: Scale,
    title: "27+ bye-laws",
    body: "Sponsored and passed more than 27 bye-laws that improved residents' welfare and raised the council's internally generated revenue.",
  },
  {
    icon: BookOpen,
    title: "Learning support",
    body: "Provided learning materials and free JAMB forms for students from low-income homes.",
  },
  {
    icon: Briefcase,
    title: "Women in business",
    body: "Gave women business start-up support and helped open employment opportunities for constituents.",
  },
  {
    icon: Wheat,
    title: "Food palliatives",
    body: "Distributed food relief during the COVID-19 lockdown and through successive Ramadan seasons.",
  },
  {
    icon: Home,
    title: "Halted demolitions",
    body: "Intervened to stop demolitions in Olode-Okuta and protect residents' homes.",
  },
  {
    icon: Droplets,
    title: "Drainage clearance",
    body: "Secured the clearing of drainage channels along Alhaji Masha Road to reduce flooding.",
  },
  {
    icon: Landmark,
    title: "LASRERA in Surulere",
    body: "Contributed to the establishment of a LASRERA satellite office in Surulere, bringing property protection closer to residents.",
  },
  {
    icon: HeartHandshake,
    title: "Direct support",
    body: "Supported hundreds of constituents financially and socially through difficult seasons.",
  },
]

export const housingRecord = [
  {
    title: "Real estate regulation",
    body: "Supervised the Lagos State Real Estate Regulatory Authority (LASRERA) and pushed for the mandatory registration and licensing of practitioners.",
  },
  {
    title: "War on land fraud",
    body: "Thousands of complaints were addressed under her watch. Many were resolved and others went to prosecution, working alongside agencies like the EFCC.",
  },
  {
    title: "Tenant protection",
    body: "Spoke out against arbitrary rent increases, called for stronger tenancy enforcement and urged residents to report exploitative landlords and agents.",
  },
  {
    title: "Housing delivery",
    body: "Represented the state on affordable home ownership, rent-to-own, joint venture housing and smart city models.",
  },
  {
    title: "Policy reform",
    body: "Advocated digital land administration, harmonised taxes and charges to lower building costs, and stronger public-private partnerships.",
  },
]

export type Milestone = { year: string; title: string; body: string }

export const journey: Milestone[] = [
  {
    year: "1986",
    title: "Born in Surulere",
    body: "Born on March 10 into the Oshodi, Olorogun Adodo and Onisemo royal families of Isale Eko.",
  },
  {
    year: "Education",
    title: "From Bank-Olemoh to Bedfordshire",
    body: "Mainland Preparatory School, Anglican Secondary School Akinhanmi and Lagos State Model College Kankon. A-Levels at the College of North East London, then LL.B and LL.M at the University of Bedfordshire, and the Nigerian Law School.",
  },
  {
    year: "2017",
    title: "Elected Councillor, Ward E1",
    body: "Won the APC ticket and the election for Akinhanmi-Cole Ward, Surulere.",
  },
  {
    year: "2018",
    title: "Leader of the Legislative Arm",
    body: "Elected Leader of the Surulere Local Government Legislative Arm. She also served as Vice Chairman of the Lagos State Councillors' Forum and Legal Adviser to the Female Councillors' Forum.",
  },
  {
    year: "2021",
    title: "Re-elected, leadership retained",
    body: "Returned by the people of Ward E1 for a second term and kept her position as Leader.",
  },
  {
    year: "2022",
    title: "Party first",
    body: "Contested for the House of Assembly seat and stepped down in line with the party's directive.",
  },
  {
    year: "2023",
    title: "Campaign Secretary, then Cabinet",
    body: "Served as TGSEE Campaign Secretary and chaired logistics for the Wasiu Eshilokun Campaign Council. Sworn in as Special Adviser on Housing to Governor Babajide Sanwo-Olu on September 13.",
  },
  {
    year: "2026",
    title: "The people's candidate",
    body: "Declared her bid on January 1, resigned from the cabinet, toured every ward and emerged as the APC candidate for Surulere Constituency I.",
  },
]

export const education = [
  { school: "Mainland Preparatory Private School", place: "Bank-Olemoh, Surulere", detail: "Primary" },
  { school: "Anglican Secondary School", place: "Akinhanmi, Surulere", detail: "Secondary" },
  { school: "Lagos State Model College", place: "Kankon, Badagry", detail: "Secondary" },
  { school: "College of North East London", place: "London, UK", detail: "A-Levels: Law, History, Politics, Psychology" },
  { school: "University of Bedfordshire", place: "United Kingdom", detail: "LL.B, Bachelor of Laws" },
  { school: "University of Bedfordshire", place: "United Kingdom", detail: "LL.M, International Commercial Law" },
  { school: "Nigerian Law School", place: "Nigeria", detail: "Called to the Nigerian Bar" },
]

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  category: "Portraits" | "Campaign" | "Community" | "Office"
  w: number
  h: number
}

export const gallery: GalleryItem[] = [
  { src: "/images/portrait-green.jpg", alt: "Barakat Odunuga-Bakare in a black blazer with arms folded", caption: "Official campaign portrait", category: "Portraits", w: 720, h: 1080 },
  { src: "/images/stakeholders-anthem.jpg", alt: "Barakat Odunuga-Bakare with party leaders during the national anthem", caption: "With party leaders at a stakeholders' engagement", category: "Campaign", w: 1280, h: 854 },
  { src: "/images/with-governor.jpg", alt: "Barakat Odunuga-Bakare presenting a document to Governor Babajide Sanwo-Olu", caption: "With Governor Babajide Sanwo-Olu", category: "Office", w: 1080, h: 720 },
  { src: "/images/site-inspection.jpg", alt: "Officials in hard hats and reflective vests at a stadium inspection", caption: "On a site inspection in Surulere", category: "Office", w: 958, h: 639 },
  { src: "/images/portrait-gele-mono.jpg", alt: "Barakat Odunuga-Bakare in a black and white gele", caption: "Proud daughter of Lagos", category: "Portraits", w: 1280, h: 1194 },
  { src: "/images/leaders-group.jpg", alt: "Large group of party leaders posing outside a white building", caption: "With Surulere party leaders and stakeholders", category: "Campaign", w: 1280, h: 853 },
  { src: "/images/volunteers-jersey.jpg", alt: "Supporters holding up a black volunteer jersey", caption: "Volunteer jersey unveiling at the campaign office", category: "Campaign", w: 1280, h: 852 },
  { src: "/images/stakeholders-meeting.jpg", alt: "A party leader addressing a stakeholders meeting", caption: "Ward consultation with grassroots leaders", category: "Community", w: 1080, h: 709 },
  { src: "/images/portrait-smile.jpg", alt: "Barakat Odunuga-Bakare smiling in a black dress and pearls", caption: "Studio portrait", category: "Portraits", w: 720, h: 1080 },
  { src: "/images/site-walk.jpg", alt: "Officials walking through a facility in reflective vests", caption: "Walking the site with engineers and stakeholders", category: "Office", w: 1080, h: 941 },
  { src: "/images/campaign-office-team.jpg", alt: "Barakat Odunuga-Bakare seated with campaign team members", caption: "With the team at the campaign office", category: "Campaign", w: 1280, h: 854 },
  { src: "/images/council-certificates.jpg", alt: "A large group holding certificates inside a council chamber", caption: "Certificate presentation at a government chamber", category: "Office", w: 1080, h: 628 },
  { src: "/images/with-party-elder.jpg", alt: "Barakat Odunuga-Bakare with a party elder holding an envelope", caption: "Receiving the blessing of a party elder", category: "Campaign", w: 1080, h: 720 },
  { src: "/images/office-visit.jpg", alt: "Barakat Odunuga-Bakare shaking hands with an official in his office", caption: "Courtesy visit", category: "Community", w: 810, h: 1080 },
  { src: "/images/nomination-form.jpg", alt: "Barakat Odunuga-Bakare with an elder holding a 2026 nomination form", caption: "Presenting her 2026 nomination form", category: "Campaign", w: 810, h: 1080 },
  { src: "/images/portrait-gele-peach.jpg", alt: "Barakat Odunuga-Bakare in a peach traditional outfit and gele", caption: "In traditional attire", category: "Portraits", w: 1274, h: 1280 },
  { src: "/images/portrait-poise.jpg", alt: "Barakat Odunuga-Bakare in a black dress with hands clasped", caption: "Studio portrait", category: "Portraits", w: 720, h: 1080 },
]

export type NewsItem = {
  slug: string
  title: string
  date?: string
  category: "Campaign" | "Press" | "Statement"
  excerpt: string
  image: string
  source?: { name: string; url: string }
  body?: string[]
  quote?: string
}

export const news: NewsItem[] = [
  {
    slug: "campaign-offices-commissioned",
    title: "Surulere turns out as B.O.B 2027 campaign offices open",
    date: "2026-08-20",
    category: "Campaign",
    excerpt:
      "Lawmakers, council executives, party elders, religious leaders and artisans joined the commissioning of the campaign offices for Surulere Constituency I.",
    image: "/images/campaign-office-team.jpg",
    quote:
      "This commissioning is not merely the opening of physical structures. It represents the beginning of a renewed commitment to grassroots engagement, inclusive representation, effective service, and a shared vision for a greater Surulere Constituency 1.",
    body: [
      "The campaign of Hon. (Barr.) Barakat Odunuga-Bakare formally opened its offices in Surulere on Thursday, August 20, 2026, giving supporters across Constituency I a home base for the race to the Lagos State House of Assembly.",
      "The event drew a wide cross-section of the party and the community. Among those present were the Member representing Surulere I in the House of Representatives, Hon. Fuad Kayode Laguda; the Executive Chairman of Surulere Local Government, Hon. Sulaimon Bamidele Yusuf; the Vice Chairman, Hon. (Prince) Adewale Muiz Dosunmu; and the LGA party executives led by the Chairman, Hon. Sherif Balogun.",
      "The Surulere apex leaders under Rt. Hon. Pa Fashina, the 11th Legislative Assembly led by Hon. Hakeem Olayiwola, ward chairmen led by Hon. Bayo Gafar, the CDC Chairman, Mr. Wemimo Odumosu, and representatives of the Council of Imams, CAN and Surulere Artisans were also in attendance.",
      "In a message of appreciation after the event, the campaign thanked everyone who came out. \"We do not take your presence, support, prayers, and goodwill for granted,\" it said. \"Every handshake, every word of encouragement, every prayer, and every act of solidarity has strengthened our resolve to continue this journey together.\"",
      "The offices will coordinate ward mobilisation, volunteer activity and community outreach for the rest of the campaign.",
    ],
  },
  {
    slug: "official-declaration",
    title: "Odunuga-Bakare makes it official at The Stable, Bode Thomas",
    date: "2026-05-17",
    category: "Campaign",
    excerpt:
      "Supporters gathered on Bode Thomas Street as Barakat Odunuga-Bakare formally declared for the Surulere Constituency I seat under the banner Àjùmọ̀ṣe, Àjùmọ̀jẹ.",
    image: "/images/declaration-poster.jpg",
    body: [
      "Hon. (Barr.) Barakat Odunuga-Bakare formally declared her candidacy for the Lagos State House of Assembly, Surulere Constituency I, at The Stable (Union Bank), 41 Bode Thomas Street, Surulere.",
      "The declaration ran under the banner Àjùmọ̀ṣe, Àjùmọ̀jẹ, a Yoruba call that means what we build together, we share together. It captures the idea at the centre of her campaign: that progress in Surulere has to be shared by everyone who works for it.",
      "The event came months after she first announced her interest on January 1, 2026, and after she stepped down as Special Adviser on Housing to Governor Babajide Sanwo-Olu to focus on the race.",
      "Her campaign rests on a record built over nine years as a two-term councillor, Leader of the Surulere Legislative Arm and member of the state cabinet, and on six priorities: housing, education, youth opportunity, economic inclusion, community security and sustainable growth.",
    ],
  },
  {
    slug: "stakeholders-endorse-after-ward-tour",
    title: "APC leaders back Odunuga-Bakare after week-long ward consultation",
    category: "Press",
    excerpt:
      "Prominent political stakeholders in Surulere 1 threw their weight behind her aspiration at the end of a week-long tour of every ward in the constituency.",
    image: "/images/leaders-group.jpg",
    source: { name: "Punch", url: "https://punchng.com/apc-leaders-back-ex-sanwo-olu-for-lagos-assembly-seat/" },
  },
  {
    slug: "surulere-groups-back-odunuga-bakare",
    title: "Surulere groups back Odunuga-Bakare for Constituency 1",
    category: "Press",
    excerpt:
      "Community and political groups across Surulere declared their support for her bid to represent the constituency in the Lagos State House of Assembly.",
    image: "/images/stakeholders-anthem.jpg",
    source: { name: "The Nation", url: "https://thenationonlineng.net/surulere-groups-back-odunuga-bakare-for-surulere-constituency-1/" },
  },
  {
    slug: "vanguard-coverage",
    title: "Vanguard reports on the Odunuga-Bakare campaign",
    category: "Press",
    excerpt: "Coverage of the campaign from Vanguard News on X.",
    image: "/images/stakeholders-meeting.jpg",
    source: { name: "Vanguard", url: "https://x.com/vanguardngrnews/status/2054874389678547434" },
  },
  {
    slug: "declaration-of-interest",
    title: "A new year, a new mission: Barakat declares her interest",
    date: "2026-01-01",
    category: "Statement",
    excerpt:
      "On the first day of 2026, Barakat Odunuga-Bakare announced that she would seek to represent Surulere Constituency I in the Lagos State House of Assembly.",
    image: "/images/portrait-green.jpg",
    body: [
      "On January 1, 2026, Barr. Barakat Odunuga-Bakare announced her intention to contest for the Surulere Constituency I seat in the Lagos State House of Assembly under the All Progressives Congress.",
      "The announcement marked the next step in a political career that began in 2017, when she won the councillorship of Akinhanmi-Cole Ward (E1). She went on to lead the Surulere Legislative Arm, sponsor more than 27 bye-laws, and serve in the Lagos State Executive Council as Special Adviser on Housing.",
      "Her stated priorities are stronger legislation on housing and urban development, wider access to quality education, youth empowerment, economic inclusion, community security and sustainable growth for every resident of the constituency.",
    ],
  },
]

export function getNews(slug: string) {
  return news.find((n) => n.slug === slug)
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  }).format(new Date(iso))
}

export type CampaignEvent = {
  date: string
  time?: string
  title: string
  venue: string
  body: string
  tag: string
  href?: string
}

// Keep this list to confirmed dates only. Upcoming rallies and town halls go here as the team fixes them.
export const events: CampaignEvent[] = [
  {
    date: "2027-03-06",
    time: "8:00 AM",
    title: "Lagos State House of Assembly Election",
    venue: "Your polling unit, Surulere Constituency I",
    body: "The day it all counts. Bring your PVC, vote early and stay to see the results announced.",
    tag: "Election Day",
    href: "/get-involved#vote",
  },
  {
    date: "2026-08-20",
    title: "Commissioning of the Campaign Offices",
    venue: "Surulere, Lagos",
    body: "Party leaders, lawmakers, artisans and religious leaders opened the B.O.B 2027 campaign offices.",
    tag: "Campaign",
    href: "/news/campaign-offices-commissioned",
  },
  {
    date: "2026-05-17",
    time: "10:00 AM",
    title: "Official Declaration",
    venue: "The Stable (Union Bank), 41 Bode Thomas Street, Surulere",
    body: "Barakat formally declared for Surulere Constituency I under the banner Àjùmọ̀ṣe, Àjùmọ̀jẹ.",
    tag: "Declaration",
    href: "/news/official-declaration",
  },
  {
    date: "2026-01-01",
    title: "Declaration of Interest",
    venue: "Surulere, Lagos",
    body: "On the first day of the year, she announced her bid to represent Surulere in the Assembly.",
    tag: "Announcement",
    href: "/news/declaration-of-interest",
  },
]

export const posters = [
  { src: "/images/bob-2027-poster.jpg", alt: "B.O.B 2027 campaign poster: Support and vote Hon. Barakat Odunuga-Bakare", w: 968, h: 1280 },
  { src: "/images/declaration-poster.jpg", alt: "Official declaration poster for Hon. (Barr.) Barakat Odunuga-Bakare", w: 554, h: 554 },
  { src: "/images/appreciation-flyer.jpg", alt: "Appreciation message after the commissioning of the campaign offices", w: 1073, h: 1280 },
  { src: "/images/independence-day.jpg", alt: "Independence Day message from Hon. Barakat Odunuga-Bakare", w: 1254, h: 1254 },
  { src: "/images/teachers-day.jpg", alt: "Teachers' Day message from Hon. Barakat Odunuga-Bakare", w: 896, h: 1200 },
]

export function dateParts(iso: string) {
  const d = new Date(iso + "T12:00:00+01:00")
  const f = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat("en-GB", { ...o, timeZone: "Africa/Lagos" }).format(d)
  return { day: f({ day: "2-digit" }), month: f({ month: "short" }), year: f({ year: "numeric" }), weekday: f({ weekday: "long" }) }
}
