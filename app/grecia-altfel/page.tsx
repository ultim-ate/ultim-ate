import type { Metadata } from "next"
import { Header } from "@/components/header"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Grecia altfel | Greek Steps",
  description: "7 curiozități cu parfum elen: descoperă limba, tradițiile și viața de zi cu zi din Grecia cu Greek Steps.",
  openGraph: {
    title: "Grecia altfel | Greek Steps",
    description: "Descoperă 7 curiozități cu parfum elen, de la tradiții la cuvinte grecești.",
    siteName: "Greek Steps",
    type: "article",
  },
}

export default function GreciaAltfelPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="mx-auto max-w-4xl px-6 pb-20 pt-32 font-sans lg:px-8">
        <h1 className="mb-6 text-2xl font-bold text-[var(--culture-heading)] md:text-3xl">Grecia altfel</h1>
        <Link href="/grecia-altfel/7-curiozitati-cu-parfum-elen" className="text-xl font-bold text-[var(--culture-heading)] underline-offset-4 hover:underline md:text-2xl">
          7 curiozități cu parfum elen
        </Link>
      </main>
    </>
  )
}
