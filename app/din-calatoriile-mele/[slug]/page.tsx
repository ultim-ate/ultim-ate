import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
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
    <LightSeaPage>
      <article className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <Link href="/din-calatoriile-mele" className="text-sm font-semibold uppercase tracking-wider hover:underline">
          {"← Din Călătoriile Mele"}
        </Link>
        <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{travel.title}</h1>
        {travel.image && (
          <div className="relative aspect-[16/9] overflow-hidden rounded-md">
            <Image src={travel.image} alt={travel.alt ?? travel.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          </div>
        )}
        {travel.gallery?.length ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {travel.gallery.map((photo) => (
              <li key={photo.src} className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 432px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Fotografiile și impresiile din această călătorie vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
