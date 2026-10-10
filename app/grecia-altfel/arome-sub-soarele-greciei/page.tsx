import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { AromeStory } from "@/components/arome-story"

export const metadata: Metadata = {
  title: "Arome sub soarele Greciei | Greek Steps",
  description: "Gustul Greciei: ingrediente simple, meráki, vinuri locale și bucuria mesei împărțite în paréa.",
}

export default function AromePage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans">
        <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-20 pt-40 lg:px-8 lg:pt-52">
          <Link
            href="/grecia-altfel"
            className="text-sm font-semibold text-[var(--culture-heading)] underline-offset-4 hover:underline"
          >
            ← Grecia Altfel
          </Link>
          <h1 className="text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">Arome sub soarele Greciei</h1>
          <AromeStory />
        </div>
      </main>
    </>
  )
}
