import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { GreciaTraditions } from "@/components/grecia-traditions"

export const metadata: Metadata = {
  title: "Tradiții care merg mai departe | Greek Steps",
  description: "Descoperă tradițiile Greciei, de la nunți și botezuri la sărbători locale, alături de Greek Steps.",
  openGraph: {
    title: "Tradiții care merg mai departe | Greek Steps",
    description: "Descoperă tradițiile și sărbătorile Greciei.",
    siteName: "Greek Steps",
    type: "article",
  },
}

export default function TraditionsPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="mx-auto max-w-4xl px-6 pb-20 pt-32 font-sans lg:px-8">
        <Link href="/grecia-altfel" className="mb-6 inline-block text-sm text-[var(--culture-heading)] underline underline-offset-4">Înapoi la Grecia altfel</Link>
        <GreciaTraditions />
      </main>
    </>
  )
}
