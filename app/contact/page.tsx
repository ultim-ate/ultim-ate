import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact | Greek Steps",
  description:
    "Ai în minte o vacanță, cauți inspirație pentru o destinație sau te interesează un curs de limba greacă? Scrie-mi!",
}

export default function ContactPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen [--contact-field:#f4fbfb] [--contact-ink:#0a3436] font-sans text-[var(--contact-ink)]">
        <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--contact-surface)]/45" />
        <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-20 pt-36 lg:px-8 lg:pt-40">
          <header className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">Contact</h1>
            <p className="text-pretty text-lg leading-relaxed md:text-xl">
              Ai în minte o vacanță, cauți inspirație pentru o anumită destinație sau te interesează un curs de limba
              greacă?
            </p>
            <p className="text-pretty text-lg leading-relaxed md:text-xl">
              Completează formularul de mai jos și îți voi răspunde cu drag.
            </p>
          </header>
          <ContactForm />
        </div>
      </main>
    </>
  )
}
