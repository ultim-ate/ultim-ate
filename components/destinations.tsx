"use client"

import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { useState } from "react"

const destinations = [
  {
    name: "Santorini",
    description:
      "Când te gândești la Grecia, poate că primul lucru care îți vine în minte este imaginea aceea alb-albastră: case luminoase, bisericuțe cu cupole albastre și marea întinsă până la orizont. Santorini este locul în care această imagine prinde viață.\nAșezată în mijlocul Mării Egee, insula se întinde în jurul unei caldere vulcanice impresionante, oferind priveliști spectaculoase la fiecare pas.\nÎn Oia (Οία), casele albe se întind de-a lungul stâncilor, iar priveliștea spre Marea Egee este una dintre cele mai cunoscute imagini ale Greciei. La apus, φως (fos) – lumina – schimbă treptat culorile insulei și creează o atmosferă aparte.\nDar Santorini nu înseamnă doar fotografii perfecte. Vulcanul a modelat insula și a lăsat în urmă stânci spectaculoase, plaje cu nisip vulcanic și un peisaj cu totul diferit de cel al altor insule grecești.\nPrintre străduțele înguste găsești mici biserici, terase cu vedere spre mare și locuri în care poți simți ελληνική φιλοξενία – ospitalitatea grecească. Iar o vacanță aici poate fi și o ocazie de a descoperi, puțin câte puțin, limba și cultura Greciei.\nLa Greek Steps, credem că astfel de locuri sunt mai frumoase atunci când le înțelegi și povestea. Santorini poate fi începutul unei călătorii, dar și un pas spre Grecia – o țară pe care o descoperi prin limbă, cultură, oameni și experiențe.",
    image: "/images/hero-santorini.jpg",
    tag: "Islands",
  },
  {
    name: "Athens",
    description:
      "The cradle of Western civilization, where ancient wonders meet vibrant modern culture.",
    image: "/images/athens-acropolis.jpg",
    tag: "History",
  },
  {
    name: "Mykonos",
    description:
      "Cosmopolitan charm with windmills, labyrinthine streets, and legendary nightlife.",
    image: "/images/mykonos.jpg",
    tag: "Islands",
  },
  {
    name: "Crete",
    description:
      "Greece&apos;s largest island offers pristine beaches, rugged mountains, and ancient palaces.",
    image: "/images/crete-beach.jpg",
    tag: "Adventure",
  },
]

function renderSantoriniDescription(text: string) {
  return text.split(/(Οία|φως \(fos\)|ελληνική φιλοξενία|Greek Steps)/g).map((part, index) =>
    /^(Οία|φως \(fos\)|ελληνική φιλοξενία|Greek Steps)$/.test(part) ? (
      <strong key={`${part}-${index}`} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export function Destinations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedDestination, setSelectedDestination] = useState(
    null as (typeof destinations)[number] | null,
  )

  return (
    <section id="destinations" className="py-24 md:py-32 px-6 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Destinations
            </p>
            <h2 className="text-4xl md:text-5xl font-light">
              Explore Iconic Locations
            </h2>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-sans font-medium text-foreground hover:text-primary transition-colors group"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => destination.name === "Santorini" && setSelectedDestination(destination)}
              onKeyDown={(event) => {
                if ((event.key === "Enter" || event.key === " ") && destination.name === "Santorini") {
                  event.preventDefault()
                  setSelectedDestination(destination)
                }
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
                {(destination.name === "Santorini" || destination.name === "Crete") && (
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent px-6 pb-16 pt-6">
                    <h3 className="text-2xl font-bold text-sky-300 md:text-3xl">
                      {destination.name === "Santorini"
                        ? "Santorini - un tablou grecesc"
                        : "Καλός ήρθατε στην Κρήτη! – Bine ați venit în Creta!"}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="presentation"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto bg-background p-8 md:p-12"
            role="dialog"
            aria-modal="true"
            aria-labelledby="destination-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-4 top-4 p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close destination details"
              onClick={() => setSelectedDestination(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <h2
              id="destination-dialog-title"
              className="mb-6 text-3xl font-bold text-sky-400 md:text-4xl"
            >
              Santorini – Un tablou grecesc
            </h2>
            <div className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {selectedDestination.name === "Santorini"
                ? renderSantoriniDescription(selectedDestination.description)
                : selectedDestination.description}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
