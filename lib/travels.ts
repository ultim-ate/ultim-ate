export type Travel = {
  slug: string
  title: string
  image?: string
  alt?: string
  gallery?: { src: string; alt: string; width: number; height: number }[]
}

export const TRAVELS_PER_PAGE = 16

const featuredTravels: Travel[] = [
  {
    slug: "santorin",
    title: "Santorini",
    image: "/images/santorin-apus.jpg",
    alt: "Capelă albă cicladică la apus, cu soarele coborând la orizont în Santorini",
    gallery: [
      {
        src: "/images/santorini/caldera-apus.jpg",
        alt: "Apus deasupra calderei din Santorini, cu vase de croazieră și străduțe albe în prim-plan",
        width: 2048,
        height: 946,
      },
      {
        src: "/images/santorini/usa-albastra.jpg",
        alt: "Ușă albastră într-o casă albă cicladică, cu un amforă de lut și un cactus în ghiveci",
        width: 739,
        height: 1600,
      },
      {
        src: "/images/santorini/clopotnita.jpg",
        alt: "Cupolă albă și clopotniță cu cruce deasupra calderei din Santorini",
        width: 2048,
        height: 946,
      },
      {
        src: "/images/santorini/apus-fira.jpg",
        alt: "Mulțime adunată la apus în Fira, cu soarele coborând în spatele insulei și un vas de croazieră pe mare",
        width: 900,
        height: 1600,
      },
      {
        src: "/images/santorini/fira-noaptea.jpg",
        alt: "Fira noaptea, cu terase și restaurante luminate pe marginea falezei",
        width: 1152,
        height: 2048,
      },
      {
        src: "/images/santorini/tricou-dicaprio.jpg",
        alt: "Tricou alb pe umeraș cu inscripția „too old for dicaprio”",
        width: 924,
        height: 2048,
      },
    ],
  },
  { slug: "rodos", title: "Rhodos", image: "/images/rhodos.png", alt: "Peisaj din insula Rodos" },
  { slug: "skiathos", title: "Skiathos", image: "/images/skiathos.png", alt: "Plajă din insula Skiathos" },
  { slug: "meteora", title: "Meteora", image: "/images/meteora.jpg", alt: "Mănăstirile de la Meteora" },
  { slug: "atena", title: "Atena", image: "/images/athens-acropolis.jpg", alt: "Acropola din Atena" },
  { slug: "creta", title: "Creta", image: "/images/crete-beach.jpg", alt: "Plajă din Creta" },
  { slug: "mykonos", title: "Mykonos", image: "/images/mykonos.jpg", alt: "Case albe din Mykonos" },
]

const moreTravelTitles = [
  "Nisa",
  "Eze",
  "Menton",
  "Cannes",
  "Dubai",
  "Sisi",
  "Matala",
  "Mallorca",
  "Tenerife",
  "Viena",
  "Algarve",
  "Lisabona",
  "Milano",
  "Roma",
  "Pisa",
  "Florența",
  "Amalfi",
  "Berlin",
  "München",
  "Disneyland",
  "Gardaland",
  "Europa Park",
  "Colmar",
  "Loro Parque",
  "Siam Park",
  "Bruxelles",
  "Antwerp",
  "Amsterdam",
  "Locuri cu suflet din România",
  "Paris",
  "Castelele de pe Valea Loirei",
  "Londra",
  "Nessebar",
  "Viscri",
  "Piețele de Crăciun din Europa",
]

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const travels: Travel[] = [
  ...featuredTravels,
  ...moreTravelTitles.map((title) => ({ slug: slugify(title), title })),
]

export function getTravel(slug: string) {
  return travels.find((travel) => travel.slug === slug)
}
