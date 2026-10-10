import type { Metadata } from "next"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Din Călătoriile Mele | Greek Steps",
  description:
    "Fotografii, impresii și recomandări personale din destinațiile descoperite de Greek Steps.",
}

export default function DinCalatoriileMelePage() {
  return (
    <>
      <Header solid />
      <main
        lang="ro"
        className="min-h-screen [--travel-ink:#0a3436] [--travel-surface:#2bb5b2] bg-[var(--travel-surface)] font-sans text-[var(--travel-ink)]"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-40 lg:px-8 lg:pt-52">
          <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">Din Călătoriile Mele</h1>
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Călătoriile lasă urme diferite: o lumină, un gust, o stradă, un loc în care ai vrea să revii. Aici adun
            fotografii, impresii și recomandări din destinații pe care le-am descoperit personal.
          </p>
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Nu sunt ghiduri clasice, ci perspective personale: ce mi-a atras atenția, ce merită văzut, ce aș alege
            diferit data viitoare și ce poate fi util înainte de propria ta călătorie.
          </p>
        </div>
      </main>
    </>
  )
}
