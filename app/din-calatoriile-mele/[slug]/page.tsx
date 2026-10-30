import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { TravelDetail } from "@/components/travel-detail"
import { getTravel, travels } from "@/lib/travels"

export function generateStaticParams() {
  return travels.map((travel) => ({ slug: travel.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const travel = getTravel((await params).slug)
  return { title: travel ? `${travel.title} | Din Călătoriile Mele` : "Din Călătoriile Mele" }
}

export default async function TravelPage({ params }: { params: Promise<{ slug: string }> }) {
  const travel = getTravel((await params).slug)
  if (!travel) notFound()

  return (
    <TravelDetail
      travel={travel}
      back={{ href: "/din-calatoriile-mele", label: "Din Călătoriile Mele" }}
      basePath={`/din-calatoriile-mele/${travel.slug}`}
    />
  )
}
