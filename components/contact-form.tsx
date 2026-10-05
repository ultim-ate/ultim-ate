"use client"

import { useActionState } from "react"
import { submitContact, type ContactState } from "@/app/contact/actions"

const initialState: ContactState = { status: "idle" }

const fields = [
  { name: "nume", label: "Nume", type: "text", autoComplete: "family-name" },
  { name: "prenume", label: "Prenume", type: "text", autoComplete: "given-name" },
  { name: "telefon", label: "Număr de telefon", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Adresă de email", type: "email", autoComplete: "email" },
] as const

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState)

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-md bg-[var(--contact-field)] p-6 text-base leading-relaxed text-[var(--contact-ink)]">
        {state.message}
      </p>
    )
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => {
          const error = state.errors?.[field.name]
          return (
            <div key={field.name} className="flex flex-col gap-2">
              <label htmlFor={field.name} className="text-sm font-semibold uppercase tracking-wider">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${field.name}-error` : undefined}
                className="h-11 rounded-md border-2 border-transparent bg-[var(--contact-field)] px-4 text-base text-[var(--contact-ink)] outline-none transition-colors focus:border-[var(--contact-ink)] aria-[invalid=true]:border-destructive"
              />
              {error && (
                <p id={`${field.name}-error`} className="text-sm font-semibold">
                  {error}
                </p>
              )}
            </div>
          )
        })}
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="text-sm font-semibold">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="mt-2 h-11 self-start rounded-md bg-[var(--contact-ink)] px-8 text-sm font-semibold uppercase tracking-wider text-[var(--contact-field)] transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {isPending ? "Se trimite..." : "Trimite"}
      </button>
    </form>
  )
}
