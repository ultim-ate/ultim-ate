export type Travel = {
  slug: string
  title: string
  image?: string
  alt?: string
}

export const TRAVELS_PER_PAGE = 16

const featuredTravels: Travel[] = [
  {
    slug: "santorin",
    title: "Santorin",
    image: "/images/santorin-apus.jpg",
    alt: "Capelă albă cicladică la apus, cu soarele coborând la orizont în Santorin",
  },
  { slug: "rodos", title: "Rodos", image: "/images/rhodos.png", alt: "Peisaj din insula Rodos" },
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
