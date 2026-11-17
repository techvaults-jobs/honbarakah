import { submissionSchema, type Submission, type SubmissionType } from "@/lib/forms"

const subjects: Record<SubmissionType, string> = {
  volunteer: "New volunteer or supporter",
  contact: "New message from the website",
  newsletter: "New newsletter subscriber",
  issue: "Community issue reported",
  idea: "New idea for Surulere",
  feedback: "Constituency question or feedback",
  agent: "New election agent registration",
  report: "Election field report",
  support: "Support or partnership offer",
}

// Submissions people may need to follow up on get a reference number.
const refPrefix: Partial<Record<SubmissionType, string>> = {
  issue: "ISS",
  idea: "IDE",
  feedback: "FDB",
  agent: "AGT",
  report: "RPT",
  support: "SUP",
}

function toText(data: Submission, ref?: string) {
  const lines = Object.entries(data)
    .filter(([k, v]) => k !== "type" && v !== "" && v !== undefined)
    .map(([k, v]) => `${k}: ${v}`)
  return (ref ? [`reference: ${ref}`, ...lines] : lines).join("\n")
}

/** Each form can go to its own inbox, e.g. AGENT_TO_EMAIL, falling back to CONTACT_TO_EMAIL. */
function inboxFor(type: SubmissionType) {
  return process.env[`${type.toUpperCase()}_TO_EMAIL`] ?? process.env.CONTACT_TO_EMAIL
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null)
  const parsed = submissionSchema.safeParse(json)
  if (!parsed.success) {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 })
  }

  const data = parsed.data
  const prefix = refPrefix[data.type]
  const ref = prefix ? `${prefix}-${crypto.randomUUID().replace(/-/g, "").slice(0, 6).toUpperCase()}` : undefined
  const apiKey = process.env.RESEND_API_KEY
  const to = inboxFor(data.type)
  const from = process.env.CONTACT_FROM_EMAIL ?? "B.O.B 2027 Website <noreply@barakatodunuga.com>"

  // Without mail credentials (local development), log the submission instead of failing.
  if (!apiKey || !to) {
    console.info(`[${data.type}]`, toText(data, ref))
    return Response.json({ ok: true, ref })
  }

  const urgent = data.type === "report" && data.urgency.startsWith("Urgent")
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: to.split(",").map((s) => s.trim()),
      subject: `${urgent ? "URGENT: " : ""}${subjects[data.type]}${ref ? ` (${ref})` : ""}`,
      text: toText(data, ref),
      reply_to: "email" in data && data.email ? data.email : undefined,
    }),
  })

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text())
    return Response.json({ error: "We could not send your message. Please try again shortly." }, { status: 502 })
  }

  return Response.json({ ok: true, ref })
}
