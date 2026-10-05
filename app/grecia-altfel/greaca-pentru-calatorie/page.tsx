import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { GreekTravelPhrases } from "@/components/greek-travel-phrases"

export const metadata: Metadata = {
  title: "Greacă pentru călătorie | Greek Steps",
  description: "Expresii grecești utile pentru călătorie, de la Kaliméra la Kaló taxídi, alături de Greek Steps.",
  openGraph: {
    title: "Greacă pentru călătorie | Greek Steps",
    description: "Câteva cuvinte în greacă pentru o călătorie mai aproape de Grecia.",
    siteName: "Greek Steps",
    type: "article",
  },
}

export default function GreekTravelPhrasesPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="mx-auto max-w-4xl px-6 pb-20 pt-32 font-sans lg:px-8">
        <Link href="/grecia-altfel" className="mb-6 inline-block text-sm text-[var(--culture-heading)] underline underline-offset-4">Înapoi la Grecia altfel</Link>
        <GreekTravelPhrases />
      </main>
    </>
  )
}
