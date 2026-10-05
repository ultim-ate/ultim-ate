import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { GreciaCuriosities } from "@/components/grecia-curiosities"

export const metadata: Metadata = {
  title: "7 Curiozități cu parfum elen | Greek Steps",
  description: "Descoperă limba, tradițiile și viața de zi cu zi din Grecia cu Greek Steps.",
  openGraph: {
    title: "7 Curiozități cu parfum elen | Greek Steps",
    description: "Descoperă limba, tradițiile și viața de zi cu zi din Grecia.",
    siteName: "Greek Steps",
    type: "article",
  },
}

export default function CuriositiesPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="mx-auto max-w-4xl px-6 pb-20 pt-32 font-sans lg:px-8">
        <Link href="/grecia-altfel" className="mb-6 inline-block text-sm text-[var(--culture-heading)] underline underline-offset-4">
          Înapoi la Grecia altfel
        </Link>
        <GreciaCuriosities />
      </main>
    </>
  )
}
