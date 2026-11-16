import { z } from "zod"

const phone = z
  .string()
  .trim()
  .regex(/^\+?[0-9\s-]{10,16}$/, "Enter a valid phone number")

export const volunteerSchema = z.object({
  type: z.literal("volunteer"),
  name: z.string().trim().min(2, "Tell us your name"),
  phone,
  email: z.union([z.literal(""), z.email("Enter a valid email")]),
  ward: z.string().trim().min(2, "Which ward or street do you live in?"),
  interest: z.string().min(1, "Pick how you want to help"),
  message: z.string().trim().max(1000).optional(),
})

export const contactSchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(2, "Tell us your name"),
  email: z.email("Enter a valid email"),
  phone: z.union([z.literal(""), phone]),
  subject: z.string().min(1, "Choose a subject"),
  message: z.string().trim().min(10, "A little more detail helps us respond").max(2000),
})

export const newsletterSchema = z.object({
  type: z.literal("newsletter"),
  email: z.email("Enter a valid email"),
})

export const submissionSchema = z.discriminatedUnion("type", [volunteerSchema, contactSchema, newsletterSchema])

export type VolunteerInput = z.infer<typeof volunteerSchema>
export type ContactInput = z.infer<typeof contactSchema>
export type Submission = z.infer<typeof submissionSchema>

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
  "Partnership or endorsement",
  "Idea for Surulere",
  "Something else",
]

export async function submit(data: Submission) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error ?? "Something went wrong. Please try again.")
  }
}
