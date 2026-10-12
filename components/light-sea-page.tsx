import Image from "next/image"
import { Header } from "@/components/header"

export function LightSeaPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans text-[var(--sea-ink)]">
        <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--contact-surface)]/60" />
        {children}
      </main>
    </>
  )
}

export function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
      <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{title}</h1>
      <p className="text-pretty text-lg leading-relaxed md:text-xl">Conținutul va fi publicat în curând.</p>
    </div>
  )
}
