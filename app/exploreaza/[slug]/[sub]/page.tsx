import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TravelDetail } from "@/components/travel-detail"
import { getExploreLink } from "@/lib/explore"
import { getAllCollectionParams, getCollectionPlace } from "@/lib/explore-collections"

type Params = Promise<{ slug: string; sub: string }>

export function generateStaticParams() {
  return getAllCollectionParams()
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params
  const parent = getExploreLink(slug)
  const place = getCollectionPlace(slug, sub)
  return { title: parent && place ? `${place.title} | ${parent.name}` : "Explorează | Greek Steps" }
}

export default async function ExplorePlacePage({ params }: { params: Params }) {
  const { slug, sub } = await params
  const parent = getExploreLink(slug)
  const place = getCollectionPlace(slug, sub)
  if (!parent || !place) notFound()

  return (
    <TravelDetail
      travel={place}
      back={{ href: `/exploreaza/${parent.slug}`, label: parent.name }}
      basePath={`/exploreaza/${parent.slug}/${place.slug}`}
    />
  )
}
