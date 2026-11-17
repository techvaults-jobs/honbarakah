"use client"

import { useState } from "react"
import { Controller, useForm, useWatch } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CheckCircle2, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { submit, volunteerRoles, volunteerSchema, type VolunteerInput } from "@/lib/forms"

export function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-semibold text-forest-950">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  )
}

export const inputClass = "h-12 rounded-[4px] border-input bg-white px-4 text-base shadow-none focus-visible:border-forest-600 focus-visible:ring-forest-600/15"

export function VolunteerForm() {
  const [done, setDone] = useState(false)
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<VolunteerInput>({
    resolver: zodResolver(volunteerSchema),
    defaultValues: { type: "volunteer", kind: "Volunteer", name: "", phone: "", email: "", ward: "", interest: "", message: "" },
  })

  const kind = useWatch({ control, name: "kind" })

  async function onSubmit(values: VolunteerInput) {
    try {
      await submit(values)
      reset({ ...values, name: "", phone: "", email: "", ward: "", interest: "", message: "" })
      setDone(true)
    } catch (err) {
      toast.error((err as Error).message)
    }
  }

  if (done) {
    return (
      <div className="flex flex-col items-center rounded-md bg-forest-50 px-6 py-14 text-center">
        <CheckCircle2 className="size-14 text-forest-600" />
        <h3 className="mt-5 text-4xl text-forest-950">{kind === "Supporter" ? "You are on the list." : "Welcome to the team."}</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          {kind === "Supporter"
            ? "Thank you for standing with Barakat. You will hear about town halls, ward meetings and election day plans in your area."
            : "Thank you for stepping forward. A coordinator from your ward will reach out to you within a few days."}
        </p>
        <Button variant="outline" className="mt-8 h-11 rounded-[4px] px-6 font-display text-base font-bold uppercase" onClick={() => setDone(false)}>
          Register someone else
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5 sm:grid-cols-2">
      <Controller
        control={control}
        name="kind"
        render={({ field }) => (
          <div role="radiogroup" aria-label="Register as" className="grid grid-cols-2 gap-1.5 rounded-[6px] bg-forest-950/5 p-1.5 sm:col-span-2">
            {(["Volunteer", "Supporter"] as const).map((k) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={field.value === k}
                onClick={() => field.onChange(k)}
                className={cn(
                  "rounded-[4px] px-3 py-3 text-left transition-all",
                  field.value === k ? "bg-white shadow-md shadow-forest-950/10" : "hover:bg-white/50"
                )}
              >
                <span className={cn("block font-display text-lg font-bold uppercase", field.value === k ? "text-forest-700" : "text-forest-950/70")}>
                  {k === "Volunteer" ? "Volunteer" : "Supporter"}
                </span>
                <span className="block text-xs leading-snug text-muted-foreground sm:text-sm">
                  {k === "Volunteer" ? "Give time to the campaign" : "Stand with us and stay informed"}
                </span>
              </button>
            ))}
          </div>
        )}
      />
      <Field id="v-name" label="Full name" error={errors.name?.message}>
        <Input id="v-name" autoComplete="name" className={inputClass} aria-invalid={!!errors.name} {...register("name")} />
      </Field>
      <Field id="v-phone" label="Phone number" error={errors.phone?.message}>
        <Input id="v-phone" type="tel" autoComplete="tel" placeholder="0803 000 0000" className={inputClass} aria-invalid={!!errors.phone} {...register("phone")} />
      </Field>
      <Field id="v-email" label="Email (optional)" error={errors.email?.message}>
        <Input id="v-email" type="email" autoComplete="email" className={inputClass} aria-invalid={!!errors.email} {...register("email")} />
      </Field>
      <Field id="v-ward" label="Ward or street" error={errors.ward?.message}>
        <Input id="v-ward" placeholder="e.g. Akinhanmi-Cole, Ward E1" className={inputClass} aria-invalid={!!errors.ward} {...register("ward")} />
      </Field>
      <div className={cn("sm:col-span-2", kind === "Supporter" && "hidden")}>
        <Field id="v-interest" label="How would you like to help?" error={errors.interest?.message}>
          <Controller
            control={control}
            name="interest"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="v-interest" className={`${inputClass} w-full data-[size=default]:h-12`} aria-invalid={!!errors.interest}>
                  <SelectValue placeholder="Choose one" />
                </SelectTrigger>
                <SelectContent>
                  {volunteerRoles.map((r) => (
                    <SelectItem key={r} value={r}>
                      {r}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="v-message" label="Anything else we should know? (optional)">
          <Textarea id="v-message" rows={4} className="rounded-[4px] bg-white px-4 py-3 text-base" {...register("message")} />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" disabled={isSubmitting} className="h-14 w-full rounded-[4px] bg-forest-700 font-display text-lg font-bold tracking-wide uppercase hover:bg-forest-600 sm:w-auto sm:px-10">
          {isSubmitting && <Loader2 className="animate-spin" />}
          {kind === "Supporter" ? "Add me as a supporter" : "Count me in"}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          We only use your details to coordinate campaign activity, as set out in our privacy policy. We never sell or share them.
        </p>
      </div>
    </form>
  )
}
