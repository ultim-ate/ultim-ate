import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TravelDetail } from "@/components/travel-detail"
import { getAllCollectionChildParams, getCollectionPlace } from "@/lib/explore-collections"

type Params = Promise<{ slug: string; sub: string; child: string }>

async function resolve(params: Params) {
  const { slug, sub, child } = await params
  const parent = getCollectionPlace(slug, sub)
  const place = parent?.children?.find((item) => item.slug === child)
  return { slug, parent, place }
}

export function generateStaticParams() {
  return getAllCollectionChildParams()
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { parent, place } = await resolve(params)
  return { title: parent && place ? `${place.title} | ${parent.title}` : "Explorează | Greek Steps" }
}

export default async function ExploreChildPage({ params }: { params: Params }) {
  const { slug, parent, place } = await resolve(params)
  if (!parent || !place) notFound()

  return (
    <TravelDetail
      travel={place}
      back={{ href: `/exploreaza/${slug}/${parent.slug}`, label: parent.title }}
      basePath={`/exploreaza/${slug}/${parent.slug}/${place.slug}`}
    />
  )
}
