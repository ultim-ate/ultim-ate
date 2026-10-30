import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TravelDetail } from "@/components/travel-detail"
import { getSubTravel, getTravel, travels } from "@/lib/travels"

type Params = Promise<{ slug: string; sub: string }>

export function generateStaticParams() {
  return travels.flatMap((travel) => (travel.children ?? []).map((child) => ({ slug: travel.slug, sub: child.slug })))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug, sub } = await params
  const travel = getSubTravel(slug, sub)
  return { title: travel ? `${travel.title} | Din Călătoriile Mele` : "Din Călătoriile Mele" }
}

export default async function SubTravelPage({ params }: { params: Params }) {
  const { slug, sub } = await params
  const parent = getTravel(slug)
  const travel = getSubTravel(slug, sub)
  if (!parent || !travel) notFound()

  return (
    <TravelDetail
      travel={travel}
      back={{ href: `/din-calatoriile-mele/${parent.slug}`, label: parent.title }}
      basePath={`/din-calatoriile-mele/${parent.slug}/${travel.slug}`}
    />
  )
}
