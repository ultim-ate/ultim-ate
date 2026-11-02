import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
import { getAllExploreLinks, getExploreLink } from "@/lib/explore"

const partnerBenefits = ["Comisioane avantajoase", "Asistență și suport dedicat", "Colaborare pe termen lung"]
const partnerAudience = [
  "Agenții partenere & companii",
  "Ghizi de turism",
  "Bloggeri & creatori de conținut de travel",
  "Profesori & cadre didactice",
  "Școli private & afterschools",
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-10 text-lg leading-relaxed marker:text-[1.3em] md:text-xl">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  )
}

function B2BContent() {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-pretty text-lg leading-relaxed md:text-xl">
        Căutăm parteneri pasionați alături de care să extindem această punte culturală între România și Grecia,
        construind relații solide și transparente.
      </p>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-wide">Beneficiile parteneriatului</h2>
        <BulletList items={partnerBenefits} />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-wide">Cui se adresează</h2>
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Programul nostru este dedicat tuturor celor care doresc să ofere comunității lor experiențe de călătorie și
          învățare:
        </p>
        <BulletList items={partnerAudience} />
      </section>
    </div>
  )
}

export function generateStaticParams() {
  return getAllExploreLinks().map((link) => ({ slug: link.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const link = getExploreLink((await params).slug)
  return { title: link ? `${link.name} | Greek Steps` : "Explorează | Greek Steps" }
}

export default async function ExplorePage({ params }: { params: Promise<{ slug: string }> }) {
  const link = getExploreLink((await params).slug)
  if (!link) notFound()

  return (
    <LightSeaPage>
      <article className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <h1 className="text-balance text-3xl font-bold uppercase tracking-wide md:text-4xl">{link.name}</h1>
        {link.slug === "b2b-parteneri" ? (
          <B2BContent />
        ) : (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Detaliile despre această experiență vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
