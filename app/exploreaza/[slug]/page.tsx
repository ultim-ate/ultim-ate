import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
import { exploreLinks, getExploreLink } from "@/lib/explore"

export function generateStaticParams() {
  return exploreLinks.map((link) => ({ slug: link.slug }))
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
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Detaliile despre această experiență vor fi publicate în curând.
        </p>
      </article>
    </LightSeaPage>
  )
}
