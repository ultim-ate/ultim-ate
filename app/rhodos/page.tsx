import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Rhodos | Greek Steps",
  description: "Descoperă Rhodos: cetatea medievală, Lindos și apele limpezi ale Mării Egee, alături de Greek Steps.",
  openGraph: {
    title: "Rhodos | Greek Steps",
    description: "Descoperă insula Rhodos, de la orașul medieval până la Lindos.",
    images: [{ url: "/images/rhodos.png", alt: "Lindos și Acropola din Rhodos" }],
  },
}

export default function RhodesPage() {
  return (
    <main className="min-h-screen bg-secondary px-6 py-12 md:py-20">
      <article className="mx-auto max-w-5xl">
        <Link href="/#destinations" className="mb-8 inline-flex items-center gap-2 text-sm font-sans hover:text-primary">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Înapoi la destinații
        </Link>
        <h1 className="mb-8 text-4xl font-bold text-sky-400 md:text-5xl">Rhodos</h1>
        <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/9]">
          <Image src="/images/rhodos.png" alt="Imagine reprezentativă a satului Lindos, cu Acropola pe colină și golful turcoaz din Rhodos" fill priority sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
        </div>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>Rhodos îmbină istoria cu peisajele însorite ale Mării Egee. Orașul medieval, cu zidurile sale de piatră și străduțele înguste, te invită să descoperi povești la fiecare pas.</p>
          <p>În Lindos, casele albe se adună la poalele Acropolei, deasupra unor golfuri cu apă limpede. Este unul dintre locurile emblematice ale insulei, unde priveliștile și istoria se întâlnesc.</p>
          <p>Cu <strong className="font-semibold text-foreground">Greek Steps</strong>, descoperă Grecia prin locurile, cultura și oamenii ei.</p>
        </div>
      </article>
    </main>
  )
}
