import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Greek Steps",
  description:
    "Scrie-ne pentru o vacanță în Grecia, inspirație pentru o destinație sau un curs de limba greacă.",
}

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="min-h-screen bg-[var(--contact-surface)] font-sans text-[var(--course-text)]">
        <div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 pb-20 pt-32 lg:px-8">
          <h1 className="text-2xl font-bold text-[var(--culture-heading)] md:text-3xl">Contact</h1>
          <div className="flex flex-col gap-3 text-lg leading-relaxed text-pretty">
            <p>
              Ai în minte o vacanță, cauți inspirație pentru o anumită destinație sau te interesează un curs de limba
              greacă?
            </p>
            <p>Completează formularul de mai jos și îți voi răspunde cu drag.</p>
          </div>
          <ContactForm />
        </div>
      </main>
    </>
  )
}
