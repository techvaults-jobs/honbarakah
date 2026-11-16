import { submissionSchema, type Submission } from "@/lib/forms"

const subjects: Record<Submission["type"], string> = {
  volunteer: "New volunteer sign-up",
  contact: "New message from the website",
  newsletter: "New newsletter subscriber",
}

function toText(data: Submission) {
  return Object.entries(data)
    .filter(([k, v]) => k !== "type" && v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null)
  const parsed = submissionSchema.safeParse(json)
  if (!parsed.success) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const data = parsed.data
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL ?? "B.O.B 2027 Website <noreply@barakatodunuga.com>"

  // Without mail credentials (local development), log the submission instead of failing.
  if (!apiKey || !to) {
    console.info(`[${data.type}]`, toText(data))
    return Response.json({ ok: true })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      subject: subjects[data.type],
      text: toText(data),
      reply_to: "email" in data && data.email ? data.email : undefined,
    }),
  })

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text())
    return Response.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 })
  }

  return Response.json({ ok: true })
}
