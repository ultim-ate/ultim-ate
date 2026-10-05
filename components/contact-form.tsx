"use client"

import { useState, type FormEvent } from "react"

const CONTACT_EMAIL = "contact@greeksteps.ro"

const fields = [
  { name: "nume", label: "Nume", type: "text", autoComplete: "family-name" },
  { name: "prenume", label: "Prenume", type: "text", autoComplete: "given-name" },
  { name: "telefon", label: "Telefon", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Adresă de email", type: "email", autoComplete: "email" },
] as const

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const value = (key: string) => String(data.get(key) ?? "").trim()

    const subject = `Mesaj de la ${value("prenume")} ${value("nume")}`
    const body = [
      `Nume: ${value("nume")}`,
      `Prenume: ${value("prenume")}`,
      `Telefon: ${value("telefon")}`,
      `Email: ${value("email")}`,
    ].join("\n")

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-lg bg-[var(--course-surface)]/90 p-6 shadow-md md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-2">
            <label htmlFor={field.name} className="text-sm font-semibold text-[var(--culture-heading)]">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              required
              className="h-11 rounded-md border border-[var(--culture-heading)]/25 bg-[var(--course-surface)] px-3 text-base text-[var(--course-text)] outline-none transition focus:border-[var(--culture-heading)] focus:ring-2 focus:ring-[var(--culture-heading)]/20"
            />
          </div>
        ))}
      </div>

      <button
        type="submit"
        className="self-start rounded-md bg-[var(--culture-heading)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--course-surface)] transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--culture-heading)]"
      >
        Trimite
      </button>

      <p aria-live="polite" className="text-sm leading-relaxed">
        {sent ? "Mulțumesc! Se deschide aplicația de email pentru a trimite mesajul." : ""}
      </p>
    </form>
  )
}
