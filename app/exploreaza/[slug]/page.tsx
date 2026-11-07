import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
import { TravelCard } from "@/components/travel-detail"
import { getAllExploreLinks, getExploreLink } from "@/lib/explore"
import { TRANSYLVANIA_SLUG, transylvaniaPlaces } from "@/lib/transylvania"

const partnerBenefits = ["Comisioane avantajoase", "Asistență și suport dedicat", "Colaborare pe termen lung"]
const partnerAudience = [
  "Agenții partenere & Companii",
  "Ghizi de Turism",
  "Bloggeri & Creatori de conținut de travel",
  "Profesori & Cadre didactice",
  "Școli private & Afterschools",
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
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">
          Două țări. O inimă. Experiențe care apropie
        </h2>
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Căutăm parteneri alături de care să transformăm legătura dintre România și Grecia în experiențe, proiecte și
          povești care merg mai departe.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">Beneficiile parteneriatului</h2>
        <BulletList items={partnerBenefits} />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">Cui se adresează</h2>
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Programul nostru este dedicat tuturor celor care doresc să ofere comunității lor experiențe de călătorie și
          învățare:
        </p>
        <BulletList items={partnerAudience} />
      </section>
    </div>
  )
}

function TransylvaniaContent() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 text-pretty text-lg leading-relaxed md:text-xl">
        <h2 className="text-balance text-xl font-bold uppercase tracking-wide md:text-2xl">
          Descoperă Transilvania dincolo de legendă
        </h2>
        <p>
          Transilvania nu înseamnă doar Dracula. Este o regiune care se descoperă prin atmosferă, arhitectură, tradiții și
          peisaje care se schimbă de la un loc la altul.
        </p>
        <p>
          La Greek Steps am ales câteva dintre locurile care merită să facă parte din propria ta poveste transilvăneană.
        </p>
      </section>
      <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {transylvaniaPlaces.map((place) => (
          <li key={place.slug} className="flex">
            <TravelCard travel={place} href={`/exploreaza/${TRANSYLVANIA_SLUG}/${place.slug}`} />
          </li>
        ))}
      </ul>
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
        <h1
          className={`text-balance font-bold uppercase tracking-wide ${
            link.slug === "b2b-parteneri" ? "text-lg leading-relaxed md:text-xl" : "text-3xl md:text-4xl"
          }`}
        >
          {link.name}
        </h1>
        {link.slug === "b2b-parteneri" ? (
          <B2BContent />
        ) : link.slug === TRANSYLVANIA_SLUG ? (
          <TransylvaniaContent />
        ) : (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Detaliile despre această experiență vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
