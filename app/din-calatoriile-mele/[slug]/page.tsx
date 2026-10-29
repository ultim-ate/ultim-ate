import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
import { getTravel, travels, type Travel } from "@/lib/travels"

type Photo = NonNullable<Travel["gallery"]>[number]

function isWide(photo: Photo) {
  return photo.width / photo.height >= 1.8
}

// Rows are justified by aspect ratio so every photo in a row shares one height and is shown uncropped.
function groupIntoRows(photos: Photo[]) {
  const rows: Photo[][] = []
  let run: Photo[] = []
  const flushRun = () => {
    while (run.length) {
      const take = run.length === 3 ? 3 : Math.min(2, run.length)
      rows.push(run.splice(0, take))
    }
  }
  for (const photo of photos) {
    if (isWide(photo)) {
      flushRun()
      rows.push([photo])
    } else {
      run.push(photo)
    }
  }
  flushRun()
  return rows
}

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
          <div className="flex flex-col gap-4">
            {groupIntoRows(travel.gallery).map((row) => (
              <ul
                key={row[0].src}
                className={`flex flex-col gap-4 sm:flex-row ${row.length === 1 && !isWide(row[0]) ? "mx-auto w-full sm:max-w-md" : ""}`}
              >
                {row.map((photo) => (
                  <li
                    key={photo.src}
                    className="relative w-full overflow-hidden rounded-md sm:w-auto sm:[flex:var(--ratio)_1_0%]"
                    style={{ aspectRatio: `${photo.width} / ${photo.height}`, ["--ratio" as string]: photo.width / photo.height }}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={row.length === 1 ? "(min-width: 1024px) 896px, 100vw" : "(min-width: 1024px) 448px, (min-width: 640px) 50vw, 100vw"}
                      className="object-cover"
                    />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ) : (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Fotografiile și impresiile din această călătorie vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
