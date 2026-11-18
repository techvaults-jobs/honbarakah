"use client"

import Link from "next/link"
import { useState } from "react"
import { Controller, useForm, type FieldValues, type Path } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Copy, Loader2, Send } from "lucide-react"
import { toast } from "sonner"
import type { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  agentExperience,
  agentSchema,
  feedbackSchema,
  feedbackTopics,
  ideaAreas,
  ideaSchema,
  issueCategories,
  issueSchema,
  pvcOptions,
  reportSchema,
  reportTypes,
  submit,
  supportFocus,
  supportSchema,
  supportTypes,
  urgencyLevels,
  type Submission,
} from "@/lib/forms"
import { cn } from "@/lib/utils"
import { Field, inputClass } from "./volunteer-form"

type FieldDef = {
  name: string
  label: string
  kind?: "text" | "tel" | "email" | "select" | "textarea" | "checkbox"
  options?: string[]
  placeholder?: string
  autoComplete?: string
  full?: boolean
}

type FormDef = {
  schema: z.ZodType<FieldValues, FieldValues>
  fields: FieldDef[]
  submitLabel: string
  success: { title: string; body: string; again: string }
  note?: string
}

const contactFields = (phoneOptional = true): FieldDef[] => [
  { name: "name", label: "Full name", autoComplete: "name" },
  { name: "phone", label: phoneOptional ? "Phone (optional)" : "Phone number", kind: "tel", autoComplete: "tel", placeholder: "0803 000 0000" },
  { name: "email", label: "Email (optional)", kind: "email", autoComplete: "email" },
]

const defs = {
  issue: {
    schema: issueSchema,
    fields: [
      ...contactFields(false),
      { name: "ward", label: "Ward", placeholder: "e.g. Akinhanmi-Cole, Ward E1" },
      { name: "location", label: "Street or landmark", placeholder: "Where exactly is the problem?" },
      { name: "category", label: "Kind of issue", kind: "select", options: issueCategories },
      { name: "message", label: "What is happening?", kind: "textarea", full: true, placeholder: "How long has it been going on, and who is affected?" },
    ],
    submitLabel: "Report the issue",
    success: {
      title: "Issue logged.",
      body: "The constituency desk has your report. Keep your reference number. Quote it whenever you follow up and we will know exactly where things stand.",
      again: "Report another issue",
    },
    note: "For emergencies, call the Lagos State emergency lines 112 or 767 first.",
  },
  idea: {
    schema: ideaSchema,
    fields: [
      { name: "name", label: "Full name", autoComplete: "name" },
      { name: "ward", label: "Ward or street", placeholder: "Where do you live?" },
      { name: "phone", label: "Phone (optional)", kind: "tel", autoComplete: "tel" },
      { name: "email", label: "Email (optional)", kind: "email", autoComplete: "email" },
      { name: "area", label: "Your idea is about", kind: "select", options: ideaAreas, full: true },
      { name: "message", label: "Your idea", kind: "textarea", full: true, placeholder: "What should change, and how would it help your street?" },
    ],
    submitLabel: "Send my idea",
    success: {
      title: "Thank you. Idea received.",
      body: "Every idea is read by the policy team and the best ones are brought to town halls for residents to shape together.",
      again: "Share another idea",
    },
  },
  feedback: {
    schema: feedbackSchema,
    fields: [
      { name: "name", label: "Full name", autoComplete: "name" },
      { name: "email", label: "Email", kind: "email", autoComplete: "email" },
      { name: "phone", label: "Phone (optional)", kind: "tel", autoComplete: "tel" },
      { name: "topic", label: "Topic", kind: "select", options: feedbackTopics },
      { name: "message", label: "Your message", kind: "textarea", full: true, placeholder: "If you are following up, include your reference number." },
    ],
    submitLabel: "Send to the office",
    success: {
      title: "Message received.",
      body: "The constituency desk will respond by email. If this is a follow-up, we will check it against your earlier reference.",
      again: "Send another message",
    },
  },
  agent: {
    schema: agentSchema,
    fields: [
      ...contactFields(false),
      { name: "ward", label: "Ward you vote in", placeholder: "e.g. Ward E1" },
      { name: "pollingUnit", label: "Polling unit name or code", placeholder: "As printed on your PVC", full: true },
      { name: "pvc", label: "Your PVC", kind: "select", options: pvcOptions },
      { name: "experience", label: "Experience", kind: "select", options: agentExperience },
      {
        name: "consent",
        label: "I agree that the campaign may verify these details with my ward coordinator and contact me about agent training and assignment.",
        kind: "checkbox",
        full: true,
      },
    ],
    submitLabel: "Register as an agent",
    success: {
      title: "Registration received.",
      body: "Your ward coordinator will call to verify your details. Once verified you will get your agent code, your polling unit assignment and a date for training.",
      again: "Register another agent",
    },
  },
  report: {
    schema: reportSchema,
    fields: [
      { name: "agentCode", label: "Agent code", placeholder: "Issued after verification" },
      { name: "phone", label: "Your phone number", kind: "tel", autoComplete: "tel" },
      { name: "ward", label: "Ward" },
      { name: "pollingUnit", label: "Polling unit name or code" },
      { name: "reportType", label: "What are you reporting?", kind: "select", options: reportTypes },
      { name: "urgency", label: "Urgency", kind: "select", options: urgencyLevels },
      { name: "message", label: "What did you see?", kind: "textarea", full: true, placeholder: "Times, figures and names of officials where you have them." },
    ],
    submitLabel: "Send field report",
    success: {
      title: "Report filed.",
      body: "The situation room has your report. If you marked it urgent, a supervisor will call you shortly. Stay at your post and stay safe.",
      again: "File another report",
    },
  },
  support: {
    schema: supportSchema,
    fields: [
      { name: "name", label: "Full name", autoComplete: "name" },
      { name: "organisation", label: "Organisation (optional)", autoComplete: "organization" },
      { name: "email", label: "Email", kind: "email", autoComplete: "email" },
      { name: "phone", label: "Phone number", kind: "tel", autoComplete: "tel" },
      { name: "supportType", label: "How would you like to help?", kind: "select", options: supportTypes },
      { name: "focus", label: "Area of interest", kind: "select", options: supportFocus },
      { name: "message", label: "Tell us more", kind: "textarea", full: true, placeholder: "What you would like to provide, sponsor or build with us." },
    ],
    submitLabel: "Start the conversation",
    success: {
      title: "Thank you for stepping up.",
      body: "The partnerships desk will contact you through the official office channels to agree the details. Keep your reference number for that conversation.",
      again: "Send another offer",
    },
  },
} satisfies Record<string, FormDef>

export type PortalFormKey = keyof typeof defs

export function PortalForm({ form, className }: { form: PortalFormKey; className?: string }) {
  const def: FormDef = defs[form]
  const [ref, setRef] = useState<string | null>(null)
  const defaults = Object.fromEntries(def.fields.map((f) => [f.name, f.kind === "checkbox" ? false : ""]))
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FieldValues>({
    resolver: zodResolver(def.schema),
    defaultValues: { type: form, ...defaults },
  })

  async function onSubmit(values: FieldValues) {
    try {
      const res = await submit(values as Submission)
      reset()
      setRef(res.ref ?? "")
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  if (ref !== null) {
    return (
      <div className={cn("flex flex-col items-center rounded-md bg-forest-50 px-6 py-12 text-center", className)}>
        <CheckCircle2 className="size-14 text-forest-600" />
        <h3 className="mt-5 text-3xl text-forest-950">{def.success.title}</h3>
        {ref && (
          <button
            type="button"
            onClick={() => navigator.clipboard?.writeText(ref).then(() => toast.success("Reference copied"))}
            className="mt-5 inline-flex items-center gap-3 rounded-[4px] border-2 border-dashed border-forest-600/40 bg-white px-5 py-3 font-sans text-2xl font-bold tracking-[0.12em] text-forest-800"
          >
            {ref}
            <Copy className="size-4 text-forest-600" />
          </button>
        )}
        <p className="mt-4 max-w-md text-muted-foreground">{def.success.body}</p>
        <Button variant="outline" className="mt-8 h-11 rounded-[4px] px-6 font-sans text-base font-bold uppercase" onClick={() => setRef(null)}>
          {def.success.again}
        </Button>
      </div>
    )
  }

  const err = (name: string) => errors[name]?.message as string | undefined

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("grid gap-5 sm:grid-cols-2", className)}>
      {def.fields.map((f) => {
        const id = `${form}-${f.name}`
        const name = f.name as Path<FieldValues>
        const invalid = !!errors[f.name]
        const wrap = (node: React.ReactNode) => (
          <div key={f.name} className={cn(f.full && "sm:col-span-2")}>
            {node}
          </div>
        )

        if (f.kind === "checkbox") {
          return wrap(
            <div>
              <label htmlFor={id} className="flex cursor-pointer gap-3 rounded-[4px] border border-border bg-white p-4 text-sm leading-relaxed text-forest-950/80">
                <input id={id} type="checkbox" className="mt-0.5 size-5 shrink-0 accent-forest-700" aria-invalid={invalid} {...register(name)} />
                {f.label}
              </label>
              {err(f.name) && <p className="mt-2 text-sm text-destructive">{err(f.name)}</p>}
            </div>
          )
        }

        return wrap(
          <Field id={id} label={f.label} error={err(f.name)}>
            {f.kind === "select" ? (
              <Controller
                control={control}
                name={name}
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id={id} className={`${inputClass} w-full data-[size=default]:h-12`} aria-invalid={invalid}>
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      {f.options!.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            ) : f.kind === "textarea" ? (
              <Textarea id={id} rows={5} placeholder={f.placeholder} className="rounded-[4px] bg-white px-4 py-3 text-base" aria-invalid={invalid} {...register(name)} />
            ) : (
              <Input
                id={id}
                type={f.kind ?? "text"}
                autoComplete={f.autoComplete}
                placeholder={f.placeholder}
                className={inputClass}
                aria-invalid={invalid}
                {...register(name)}
              />
            )}
          </Field>
        )
      })}
      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-14 w-full rounded-[4px] bg-forest-700 font-sans text-lg font-bold tracking-wide uppercase hover:bg-forest-600 sm:w-auto sm:px-10"
        >
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          {def.submitLabel}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          {def.note && <span className="mb-1 block font-semibold text-forest-950/80">{def.note}</span>}
          Your details are handled under our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-forest-700">
            privacy policy
          </Link>
          . We never sell or share them.
        </p>
      </div>
    </form>
  )
}
