import { z } from "zod"

const phone = z
  .string()
  .trim()
  .regex(/^\+?[0-9\s-]{10,16}$/, "Enter a valid phone number")

const optionalEmail = z.union([z.literal(""), z.email("Enter a valid email")])
const optionalPhone = z.union([z.literal(""), phone])
const name = z.string().trim().min(2, "Tell us your name")
const ward = z.string().trim().min(2, "Which ward or street do you live in?")
const choose = (msg: string) => z.string().min(1, msg)

export const volunteerSchema = z.object({
  type: z.literal("volunteer"),
  kind: z.enum(["Volunteer", "Supporter"]),
  name,
  phone,
  email: optionalEmail,
  ward,
  interest: z.string(),
  message: z.string().trim().max(1000).optional(),
}).refine((v) => v.kind === "Supporter" || v.interest.length > 0, {
  path: ["interest"],
  message: "Pick how you want to help",
})

export const contactSchema = z.object({
  type: z.literal("contact"),
  name,
  email: z.email("Enter a valid email"),
  phone: optionalPhone,
  subject: choose("Choose a subject"),
  message: z.string().trim().min(10, "A little more detail helps us respond").max(2000),
})

export const newsletterSchema = z.object({
  type: z.literal("newsletter"),
  email: z.email("Enter a valid email"),
})

export const issueSchema = z.object({
  type: z.literal("issue"),
  name,
  phone,
  email: optionalEmail,
  ward,
  location: z.string().trim().min(3, "Give a street name or landmark"),
  category: choose("Pick the kind of issue"),
  message: z.string().trim().min(15, "Describe the issue so the right desk can act on it").max(2000),
})

export const ideaSchema = z.object({
  type: z.literal("idea"),
  name,
  phone: optionalPhone,
  email: optionalEmail,
  ward,
  area: choose("Pick the area your idea touches"),
  message: z.string().trim().min(15, "Tell us a little more about your idea").max(2000),
})

export const feedbackSchema = z.object({
  type: z.literal("feedback"),
  name,
  email: z.email("Enter a valid email"),
  phone: optionalPhone,
  topic: choose("Pick a topic"),
  message: z.string().trim().min(10, "A little more detail helps us respond").max(2000),
})

export const agentSchema = z.object({
  type: z.literal("agent"),
  name,
  phone,
  email: optionalEmail,
  ward: z.string().trim().min(2, "Which ward do you vote in?"),
  pollingUnit: z.string().trim().min(2, "Enter your polling unit name or code"),
  pvc: choose("Tell us about your PVC"),
  experience: choose("Pick one"),
  consent: z.literal(true, { error: "Please confirm so we can verify your details" }),
})

export const reportSchema = z.object({
  type: z.literal("report"),
  agentCode: z.string().trim().min(4, "Enter the agent code you were issued"),
  phone,
  ward: z.string().trim().min(2, "Enter your ward"),
  pollingUnit: z.string().trim().min(2, "Enter your polling unit name or code"),
  reportType: choose("What are you reporting?"),
  urgency: choose("How urgent is it?"),
  message: z.string().trim().min(10, "Describe what you saw").max(2000),
})

export const supportSchema = z.object({
  type: z.literal("support"),
  name,
  organisation: z.string().trim().max(120).optional(),
  email: z.email("Enter a valid email"),
  phone,
  supportType: choose("Pick how you want to support"),
  focus: choose("Pick an area"),
  message: z.string().trim().min(10, "Tell us a little about what you have in mind").max(2000),
})

export const submissionSchema = z.discriminatedUnion("type", [
  volunteerSchema,
  contactSchema,
  newsletterSchema,
  issueSchema,
  ideaSchema,
  feedbackSchema,
  agentSchema,
  reportSchema,
  supportSchema,
])

export type VolunteerInput = z.infer<typeof volunteerSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type Submission = z.infer<typeof submissionSchema>
export type SubmissionType = Submission["type"]

export const volunteerRoles = [
  "Ward mobilisation",
  "Door-to-door canvassing",
  "Social media and content",
  "Polling unit agent",
  "Events and logistics",
  "Women and youth outreach",
]

export const contactSubjects = [
  "Community issue or request",
  "Media and press",
  "Invite Barakat to an event",
  "Partnership or endorsement",
  "Idea for Surulere",
  "Something else",
]

export const issueCategories = [
  "Roads and drainage",
  "Street lighting",
  "Security",
  "Housing, rent or land",
  "Schools and education",
  "Health",
  "Water and sanitation",
  "Markets and trading",
  "Something else",
]

export const ideaAreas = [
  "Housing and urban renewal",
  "Education",
  "Youth and jobs",
  "Women, traders and small business",
  "Security",
  "Environment and infrastructure",
  "Something else",
]

export const feedbackTopics = ["A question for the office", "Feedback on our work", "Follow-up on a report", "Something else"]

export const pvcOptions = ["Yes, I have collected my PVC", "I registered but have not collected it", "I have not registered"]

export const agentExperience = ["First time", "I have served as an agent before", "I have served as a supervisor or coordinator"]

export const reportTypes = ["Polls opened", "Accreditation and voting", "Result announced", "Incident", "Other update"]

export const urgencyLevels = ["Routine update", "Needs attention today", "Urgent: act now"]

export const supportTypes = [
  "Fund a project",
  "Provide materials or services",
  "Sponsor an intervention",
  "Partner with the office",
  "Something else",
]

export const supportFocus = [...ideaAreas.slice(0, -1), "Wherever it is needed most"]

export async function submit(data: Submission): Promise<{ ref?: string }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(body.error ?? "Something went wrong. Please try again.")
  return body
}
