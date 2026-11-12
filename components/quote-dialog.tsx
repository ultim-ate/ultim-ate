"use client"

import Link from "next/link"
import { useState, type FormEvent, type ReactNode } from "react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const QUOTE_ENDPOINT = "https://formsubmit.co/ajax/contact@greeksteps.ro"

type Status = "idle" | "sending" | "success" | "error"

const inputClass =
  "h-12 w-full rounded-md border border-border bg-background px-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

function Field({
  id,
  label,
  required,
  hint,
  className = "",
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
        {required && (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        )}
        {hint && <span className="ml-1 font-normal text-muted-foreground">({hint})</span>}
      </label>
      {children}
    </div>
  )
}

function todayIso() {
  return new Date().toISOString().slice(0, 10)
}

export function QuoteDialog({ trigger }: { trigger: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = Object.fromEntries(new FormData(form).entries())
    setStatus("sending")
    try {
      const response = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Cerere ofertă: ${data.destinatie} – ${data.nume}`,
          _template: "table",
          _captcha: "false",
          _replyto: data.email,
          "Nume complet": data.nume,
          Telefon: data.telefon,
          Email: data.email,
          Destinație: data.destinatie,
          Hotel: data.hotel || "-",
          "Dată de plecare": data.plecare,
          "Număr de nopți": data.nopti,
          Transport: data.transport,
          "Tip de masă": data.masa,
          "Număr de adulți": data.adulti,
          "Număr de copii": data.copii,
          "Buget (EUR)": data.buget || "-",
          Asigurare: data.asigurare,
          "Alte detalii": data.detalii || "-",
          _honey: data._honey,
        }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next)
        if (!next) setStatus("idle")
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-h-[92vh] overflow-y-auto bg-background p-6 text-foreground sm:max-w-5xl md:p-10">
        <div className="flex flex-col gap-3">
          <DialogTitle className="text-3xl font-bold text-foreground md:text-4xl">Cere o ofertă</DialogTitle>
          <span className="h-px w-full max-w-xl bg-destructive" aria-hidden="true" />
          <DialogDescription className="pt-3 text-base leading-relaxed text-muted-foreground">
            Completează formularul de mai jos cu detalii despre vacanța dorită
          </DialogDescription>
        </div>

        {status === "success" ? (
          <p role="status" className="rounded-md bg-secondary p-6 text-base leading-relaxed text-secondary-foreground">
            Mulțumim! Cererea ta a fost trimisă. Revenim cu o ofertă cât de curând.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <Field id="q-nume" label="Nume complet" required>
                <input id="q-nume" name="nume" required maxLength={120} autoComplete="name" placeholder="Nume complet" className={inputClass} />
              </Field>
              <Field id="q-telefon" label="Telefon" required>
                <input id="q-telefon" name="telefon" type="tel" required pattern="[+0-9\s().\-]{7,20}" autoComplete="tel" placeholder="07........" className={inputClass} />
              </Field>
              <Field id="q-email" label="Email" required>
                <input id="q-email" name="email" type="email" required maxLength={160} autoComplete="email" placeholder="Email" className={inputClass} />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
              <Field id="q-destinatie" label="Destinație" required>
                <input id="q-destinatie" name="destinatie" required maxLength={120} placeholder="ex: Grecia" className={inputClass} />
              </Field>
              <Field id="q-hotel" label="Hotel">
                <input id="q-hotel" name="hotel" maxLength={120} className={inputClass} />
              </Field>
              <Field id="q-plecare" label="Dată de plecare" required>
                <input id="q-plecare" name="plecare" type="date" required min={todayIso()} className={inputClass} />
              </Field>
              <Field id="q-nopti" label="Număr de nopți" required>
                <input id="q-nopti" name="nopti" required maxLength={20} placeholder="7, 14" className={inputClass} />
              </Field>
              <Field id="q-transport" label="Transport" required>
                <select id="q-transport" name="transport" required defaultValue="Individual" className={inputClass}>
                  <option>Individual</option>
                  <option>Avion</option>
                  <option>Autocar</option>
                </select>
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-5 md:grid-cols-6">
              <Field id="q-masa" label="Tip de masă" required hint="ex: All Inclusive, Demipensiune">
                <input id="q-masa" name="masa" required maxLength={60} placeholder="All Inclusive" className={inputClass} />
              </Field>
              <Field id="q-adulti" label="Număr de adulți" required>
                <input id="q-adulti" name="adulti" type="number" required min={1} max={50} placeholder="1 / 2 / 3 / ..." className={inputClass} />
              </Field>
              <Field id="q-copii" label="Număr de copii" required>
                <input id="q-copii" name="copii" type="number" required min={0} max={50} placeholder="0 / 1 / 2 / ..." className={inputClass} />
              </Field>
              <div className="hidden md:block" aria-hidden="true" />
              <Field id="q-buget" label="Buget (EUR)" hint="total estimat">
                <input id="q-buget" name="buget" type="number" min={0} placeholder="ex: 4000" className={inputClass} />
              </Field>
              <Field id="q-asigurare" label="Asigurare" required>
                <select id="q-asigurare" name="asigurare" required defaultValue="nu doresc asigurare" className={inputClass}>
                  <option>nu doresc asigurare</option>
                  <option>Asigurare medicală</option>
                  <option>Asigurare storno</option>
                  <option>Medicală + storno</option>
                </select>
              </Field>
            </div>

            <Field id="q-detalii" label="Alte detalii / Informații">
              <textarea
                id="q-detalii"
                name="detalii"
                rows={3}
                maxLength={2000}
                placeholder="Adaugă aici detalii suplimentare, preferințe sau cerințe speciale. Ex: pătuț pentru copil, pat matrimonial, hotel cu Aqua Park etc."
                className={`${inputClass} h-auto resize-y py-3 leading-relaxed`}
              />
            </Field>

            <label className="flex items-start gap-3 text-base leading-relaxed text-foreground">
              <input type="checkbox" name="acord" required className="mt-1.5 size-4 shrink-0 accent-primary" />
              <span>
                Sunt de acord ca datele mele cu caracter personal să fie prelucrate în vederea comunicării
                ofertei/informațiilor solicitate. Am citit{" "}
                <Link href="/info/termeni-si-conditii" target="_blank" className="text-destructive underline-offset-4 hover:underline">
                  Termeni și Condițiile
                </Link>{" "}
                și{" "}
                <Link href="/info/politica-de-confidentialitate" target="_blank" className="text-destructive underline-offset-4 hover:underline">
                  Politica de Confidențialitate
                </Link>
                .
              </span>
            </label>

            {status === "error" && (
              <p role="alert" className="text-center text-sm font-semibold text-destructive">
                Cererea nu a putut fi trimisă. Te rog încearcă din nou sau scrie-ne la contact@greeksteps.ro.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="self-center rounded-md bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {status === "sending" ? "Se trimite..." : "Trimite cererea"}
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
