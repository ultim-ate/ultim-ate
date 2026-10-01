"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

const destinations = [
  {
    name: "Santorini",
    description:
      "Santorini – Un tablou grecesc\n\nCând te gândești la Grecia, poate că primul lucru care îți vine în minte este imaginea aceea alb-albastră: case luminoase, bisericuțe cu cupole albastre și marea întinsă până la orizont. Santorini este locul în care această imagine prinde viață.\nAșezată în mijlocul Mării Egee, insula se întinde în jurul unei caldere vulcanice impresionante, oferind priveliști spectaculoase la fiecare pas.\nÎn Oia (Οία), casele albe se întind de-a lungul stâncilor, iar priveliștea spre Marea Egee este una dintre cele mai cunoscute imagini ale Greciei. La apus, φως (fos) – lumina – schimbă treptat culorile insulei și creează o atmosferă aparte.\nDar Santorini nu înseamnă doar fotografii perfecte. Vulcanul a modelat insula și a lăsat în urmă stânci spectaculoase, plaje cu nisip vulcanic și un peisaj cu totul diferit de cel al altor insule grecești.\nPrintre străduțele înguste găsești mici biserici, terase cu vedere spre mare și locuri în care poți simți ελληνική φιλοξενία – ospitalitatea grecească. Iar o vacanță aici poate fi și o ocazie de a descoperi, puțin câte puțin, limba și cultura Greciei.\nLa Greek Steps, credem că astfel de locuri sunt mai frumoase atunci când le înțelegi și povestea. Santorini poate fi începutul unei călătorii, dar și un pas spre Grecia – o țară pe care o descoperi prin limbă, cultură, oameni și experiențe.",
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

export function Destinations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-xs font-sans font-medium tracking-wide uppercase bg-white/20 text-white backdrop-blur-sm mb-4">
                  {destination.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                  {destination.name}
                </h3>
                <p className="text-white/80 text-sm md:text-base font-sans leading-relaxed max-w-md">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
