"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Images } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

const photos = [
  { src: "/images/romania-bucuresti.png", name: "București", alt: "Arcul de Triumf din București la apus" },
  { src: "/images/romania-bran.png", name: "Bran", alt: "Castelul Bran pe stânca sa, înconjurat de păduri" },
  { src: "/images/romania-viscri.png", name: "Viscri", alt: "Biserica fortificată din Viscri și casele colorate ale satului" },
  { src: "/images/romania-sibiu.png", name: "Sibiu", alt: "Piața Mare din Sibiu cu clădiri istorice" },
  { src: "/images/romania-sinaia.png", name: "Sinaia", alt: "Castelul Peleș din Sinaia la poalele munților" },
]

export function RomaniaGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const current = photos[index]

  const go = (step: number) => setIndex((i) => (i + step + photos.length) % photos.length)

  const openAt = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="text-balance text-3xl font-bold leading-tight text-sky-400 md:text-4xl">
          România, pas cu pas
        </h2>

        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block aspect-[16/9] w-full overflow-hidden text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Deschide galeria foto România"
        >
          <Image
            src={photos[0].src}
            alt={photos[0].alt}
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-background/90 px-4 py-2 text-sm font-semibold text-foreground">
            <Images className="size-4" aria-hidden="true" />
            {`Vezi toate cele ${photos.length} fotografii`}
          </span>
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[95vh] max-w-5xl gap-4 overflow-y-auto border-none bg-background p-4 sm:max-w-5xl">
          <DialogTitle className="text-xl font-bold text-foreground">{current.name}</DialogTitle>
          <DialogDescription className="sr-only">
            {`Fotografia ${index + 1} din ${photos.length}`}
          </DialogDescription>

          <div className="relative aspect-[16/9] max-h-[60vh] w-full overflow-hidden bg-muted">
            <Image key={current.src} src={current.src} alt={current.alt} fill sizes="(min-width: 1024px) 1000px, 100vw" className="object-cover" />
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-background"
              aria-label="Fotografia anterioară"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground hover:bg-background"
              aria-label="Fotografia următoare"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <ul className="grid grid-cols-5 gap-2">
            {photos.map((photo, i) => (
              <li key={photo.src}>
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={photo.name}
                  aria-current={i === index}
                  className={`relative block aspect-[4/3] w-full overflow-hidden transition-opacity ${
                    i === index ? "ring-2 ring-primary" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={photo.src} alt="" fill sizes="200px" className="object-cover" />
                </button>
                <p className="mt-1 truncate text-center text-xs font-medium text-muted-foreground">{photo.name}</p>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </section>
  )
}
