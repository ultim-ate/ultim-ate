import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TravelDetail } from "@/components/travel-detail"
import { getExploreLink } from "@/lib/explore"
import { TRANSYLVANIA_SLUG, getTransylvaniaPlace, transylvaniaPlaces } from "@/lib/transylvania"

type Params = Promise<{ slug: string; sub: string }>

export function generateStaticParams() {
  return transylvaniaPlaces.map((place) => ({ slug: TRANSYLVANIA_SLUG, sub: place.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params
  const place = slug === TRANSYLVANIA_SLUG ? getTransylvaniaPlace(sub) : undefined
  return { title: place ? `${place.title} | Transylvania Echoes` : "Explorează | Greek Steps" }
}

export default async function ExplorePlacePage({ params }: { params: Params }) {
  const { slug, sub } = await params
  const parent = getExploreLink(slug)
  const place = slug === TRANSYLVANIA_SLUG ? getTransylvaniaPlace(sub) : undefined
  if (!parent || !place) notFound()

  return (
    <TravelDetail
      travel={place}
      back={{ href: `/exploreaza/${parent.slug}`, label: parent.name }}
      basePath={`/exploreaza/${parent.slug}/${place.slug}`}
    />
  )
}
