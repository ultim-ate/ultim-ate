import Image from "next/image"
import Link from "next/link"
import { LightSeaPage } from "@/components/light-sea-page"
import type { Travel } from "@/lib/travels"

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

function Cover({ travel }: { travel: Travel }) {
  if (!travel.image) return null
  if (travel.cover) {
    const portrait = travel.cover.height > travel.cover.width
    return (
      <Image
        src={travel.image}
        alt={travel.alt ?? travel.title}
        width={travel.cover.width}
        height={travel.cover.height}
        priority
        sizes={portrait ? "(min-width: 640px) 448px, 100vw" : "(min-width: 1024px) 896px, 100vw"}
        className={`h-auto w-full rounded-md ${portrait ? `mx-auto ${travel.coverSize === "sm" ? "max-w-xs" : "max-w-md"}` : ""}`}
      />
    )
  }
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-md">
      <Image src={travel.image} alt={travel.alt ?? travel.title} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
    </div>
  )
}

function StackedGallery({ photos }: { photos: Photo[] }) {
  return (
    <ul className="flex flex-col items-center gap-8">
      {photos.map((photo) => (
        <li key={photo.src} className="w-full max-w-2xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes="(min-width: 768px) 672px, 100vw"
            className="h-auto w-full rounded-md"
          />
        </li>
      ))}
    </ul>
  )
}

function UniformGrid({ photos, aspect = "aspect-[3/4]" }: { photos: Photo[]; aspect?: string }) {
  const threeCols = photos.length % 3 === 0 || photos.length === 5
  const itemWidth = threeCols ? "sm:w-[calc((100%-2.5rem)/3)]" : "sm:w-[calc((100%-1.25rem)/2)]"
  return (
    <ul className="flex flex-wrap justify-center gap-5">
      {photos.map((photo, i) => (
        <li key={photo.src} className={`relative w-full overflow-hidden rounded-md ${itemWidth} ${aspect}`}>
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 448px, (min-width: 640px) 50vw, 100vw"
            className={`object-cover ${photo.position ?? ""}`}
          />
        </li>
      ))}
    </ul>
  )
}

function RowGallery({ photos }: { photos: Photo[] }) {
  return (
    <div className="flex flex-col gap-4">
      {groupIntoRows(photos).map((row) => (
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
  )
}

function Story({ story }: { story: NonNullable<Travel["story"]> }) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 pt-4 text-pretty text-lg leading-relaxed">
      {story.intro && <p className="text-xl italic leading-relaxed md:text-2xl">{story.intro}</p>}
      {story.sections.map((section, i) => (
        <div key={section.title || i} className="flex flex-col gap-3">
          {section.title && <h2 className="text-xl font-bold uppercase tracking-wide">{section.title}</h2>}
          {section.text && <p>{section.text}</p>}
          {section.items && (
            <ul className="flex list-disc flex-col gap-3 pl-6">
              {section.items.map((item) => (
                <li key={item.label}>
                  <strong className="font-semibold">{item.label}</strong>
                  {` – ${item.text}`}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      {story.closing && <p className="font-medium">{story.closing}</p>}
      {story.recommendCta && (
        <Link
          href="/contact"
          className="self-start rounded-md border border-current px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[var(--course-surface)]"
        >
          {story.ctaLabel ?? "Cere o recomandare de cazare"}
        </Link>
      )}
    </section>
  )
}

export function TravelCard({ travel, href }: { travel: Travel; href: string }) {
  return (
    <Link href={href} className="group flex w-full flex-col justify-end gap-3">
      <h2 className="text-lg font-bold uppercase tracking-wide underline-offset-4 group-hover:underline">{travel.title}</h2>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[var(--course-surface)]/60 ring-1 ring-current/15">
        {travel.image ? (
          <Image
            src={travel.image}
            alt={travel.alt ?? travel.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={`${travel.imageFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-500 group-hover:scale-105 ${travel.imagePosition ?? ""}`}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-1 p-4 text-center">
            <span className="text-balance text-xl font-semibold">{travel.title}</span>
            <span className="text-sm italic opacity-70">Fotografii în curând</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export function TravelDetail({ travel, back, basePath }: { travel: Travel; back: { href: string; label: string }; basePath: string }) {
  const hasGallery = Boolean(travel.gallery?.length)
  const hasChildren = Boolean(travel.children?.length)
  const isGrid = travel.galleryLayout === "grid" && hasGallery
  const coverInGrid = isGrid && !travel.coverOutsideGrid && Boolean(travel.image && travel.cover && travel.cover.height > travel.cover.width)
  const gridPhotos: Photo[] = isGrid
    ? [
        ...(coverInGrid ? [{ src: travel.image!, alt: travel.alt ?? travel.title, ...travel.cover! }] : []),
        ...travel.gallery!,
      ]
    : []

  return (
    <LightSeaPage>
      <article
        className={`mx-auto flex flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48 ${gridPhotos.length >= 3 ? "max-w-6xl" : "max-w-4xl"}`}
      >
        <Link href={back.href} className="text-sm font-semibold uppercase tracking-wider hover:underline">
          {`← ${back.label}`}
        </Link>
        <h1 className="text-balance text-3xl font-bold uppercase tracking-wide md:text-4xl">{travel.title}</h1>
        {!coverInGrid && <Cover travel={travel} />}
        {hasChildren && (
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {travel.children!.map((child) => (
              <li key={child.slug} className="flex">
                <TravelCard travel={child} href={`${basePath}/${child.slug}`} />
              </li>
            ))}
          </ul>
        )}
        {hasGallery &&
          (isGrid ? (
            <UniformGrid photos={gridPhotos} aspect={travel.gridAspect} />
          ) : travel.galleryLayout === "stacked" ? (
            <StackedGallery photos={travel.gallery!} />
          ) : (
            <RowGallery photos={travel.gallery!} />
          ))}
        {travel.story && <Story story={travel.story} />}
        {!hasGallery && !hasChildren && !travel.cover && (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Fotografiile și impresiile din această călătorie vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
