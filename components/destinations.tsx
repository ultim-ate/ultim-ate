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
      "Αθήνα este orașul în care trecutul nu a rămas în muzee, ci continuă să facă parte din viața de zi cu zi.\nDeasupra orașului se află Acropole, unul dintre cele mai cunoscute simboluri ale Greciei. Parthenonul, construit în Antichitate în cinstea zeiței Atena, amintește de perioada în care orașul a devenit unul dintre marile centre ale lumii grecești. Privind Atena de aici, poți vedea cât de mult s-a schimbat orașul și, în același timp, cât de puternic și-a păstrat legătura cu trecutul.\nLa poalele Acropolei, cartiere precum Pláka te poartă printre străzi colorate, case neoclasice, mici magazine și taverne. Aici poți descoperi o parte mai relaxată a orașului, unde tradițiile grecești se întâlnesc cu viața modernă.\nAtena este și un oraș al gusturilor și al întâlnirilor. O cafea băută încet, o masă într-o tavernă și un simplu καλημέρα (kaliméra) pot deveni parte din experiența de a descoperi viața grecească.\nDar poate cel mai interesant lucru la Atena este că nu trebuie să alegi între istorie și prezent. Le poți descoperi împreună, în aceeași zi: dimineața printre temple antice, după-amiaza prin piețele orașului, iar seara privind luminile Atenei de pe o terasă.\nLa Greek Steps, credem că a cunoaște Grecia înseamnă mai mult decât a-i vizita locurile. Înseamnă să îi descoperi istoria, limba, oamenii și felul de a trăi.",
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
      "Cea mai mare insulă a Greciei, Creta păstrează urmele uneia dintre cele mai vechi civilizații europene, cea minoică și oferă călătorilor ocazia de a descoperi Grecia într-un mod autentic.\nDe la Knossos și Heraklion, până la străduțele venețiene din Chania și satele tradiționale din interiorul insulei, fiecare loc spune o poveste.\nPentru cei care ajung în Creta, vacanța poate deveni și o experiență culturală: să descoperi ce înseamnă καλημέρα, să guști preparate tradiționale, să afli poveștile din spatele obiceiurilor locale și să înțelegi mai bine felul în care trăiesc și comunică grecii.\nDar pentru a înțelege cu adevărat insula trebuie să descoperi și φιλοξενία (filoxenía) – ospitalitatea grecească. O masă tradițională, o cafea savurată încet și o conversație cu localnicii pot spune uneori mai multe despre Grecia decât orice.\nLa Greek Steps credem că o vacanță în Grecia poate fi și un pas spre cultura ei. Când înveți câteva cuvinte în greacă, înțelegi o tradiție sau afli povestea unui loc, Grecia începe să se simtă mai aproape.",
    image: "/images/crete-beach.jpg",
    tag: "Adventure",
  },
]

function renderDestinationDescription(text: string) {
  return text.split(/(Αθήνα|Οία|φως \(fos\)|ελληνική φιλοξενία|καλημέρα \(\(kaliméra\)|καλημέρα|φιλοξενία \(filoxenía\)|Greek Steps)/g).map((part, index) => {
    const boldWords = ['Αθήνα', 'καλημέρα', 'Greek Steps'];
    if (/^(Αθήνα|Οία|φως \(fos\)|ελληνική φιλοξενία|καλημέρα \(\(kaliméra\)|καλημέρα|φιλοξενία \(filoxenía\)|Greek Steps)$/.test(part)) {
      const isBold = boldWords.some(word => part.includes(word));
      return (
        <span key={index} className={isBold ? "font-semibold text-gray-800" : "font-semibold text-gray-900"}>
          {part}
        </span>
      );
    }
    return part;
  });
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
              onClick={() =>
                (destination.name === "Santorini" || destination.name === "Crete") &&
                setSelectedDestination(destination)
              }
              onKeyDown={(event) => {
                if (
                  (event.key === "Enter" || event.key === " ") &&
                  (destination.name === "Santorini" || destination.name === "Crete")
                ) {
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
                {(destination.name === "Santorini" ||
                  destination.name === "Athens" ||
                  destination.name === "Crete") && (
                  <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 via-black/25 to-transparent px-6 pb-16 pt-6">
                    <h3 className="text-2xl font-bold text-sky-300 md:text-3xl">
                      {destination.name === "Santorini"
                        ? "Santorini - un tablou grecesc"
                        : destination.name === "Athens"
                          ? "Atena – Între trecut și prezent"
                          : "Creta - insula care te cheama inapoi"}
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
              {selectedDestination.name === "Santorini"
                ? "Santorini – Un tablou grecesc"
                : "Creta - insula care te cheama inapoi"}
            </h2>
            <div className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {renderDestinationDescription(selectedDestination.description)}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
