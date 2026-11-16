"use client"

import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2, Send } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { contactSchema, contactSubjects, submit, type ContactInput } from "@/lib/forms"
import { Field, inputClass } from "./volunteer-form"

export function ContactForm() {
  const [done, setDone] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: "contact", name: "", email: "", phone: "", subject: "", message: "" },
  })

  async function onSubmit(values: ContactInput) {
    try {
      await submit(values)
      reset()
      setDone(true)
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-forest-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-14 text-forest-600" />
        <h3 className="mt-5 text-3xl font-semibold text-forest-950">Message received.</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          Thank you for writing. Someone from the team will read your message and get back to you.
        </p>
        <Button variant="outline" className="mt-8 h-11 rounded-full px-6" onClick={() => setDone(false)}>
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <Field id="c-name" label="Full name" error={errors.name?.message}>
        <Input id="c-name" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} {...register("name")} />
      </Field>
      <Field id="c-email" label="Email" error={errors.email?.message}>
        <Input id="c-email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} {...register("email")} />
      </Field>
      <Field id="c-phone" label="Phone (optional)" error={errors.phone?.message}>
        <Input id="c-phone" type="tel" autoComplete="tel" className={inputClass} aria-invalid={!!errors.phone} {...register("phone")} />
      </Field>
      <Field id="c-subject" label="Subject" error={errors.subject?.message}>
        <Controller
          control={control}
          name="subject"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="c-subject" className={`${inputClass} w-full data-[size=default]:h-12`} aria-invalid={!!errors.subject}>
                <SelectValue placeholder="What is this about?" />
              </SelectTrigger>
              <SelectContent>
                {contactSubjects.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>
      <div className="sm:col-span-2">
        <Field id="c-message" label="Your message" error={errors.message?.message}>
          <Textarea id="c-message" rows={6} className="rounded-xl bg-white px-4 py-3 text-base" aria-invalid={!!errors.message} {...register("message")} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting} className="h-13 rounded-full bg-forest-700 px-10 text-base font-bold hover:bg-forest-800">
          {isSubmitting ? <Loader2 className="animate-spin" /> : <Send />}
          Send message
        </Button>
      </div>
    </form>
  )
}
