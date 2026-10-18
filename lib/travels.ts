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
        src: "/images/santorini/piscina-infinity.jpg",
        alt: "Femeie sprijinită de marginea unei piscine infinity, cu satul alb din Santorini în fundal",
        width: 1152,
        height: 2048,
      },
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
  {
    slug: "mykonos",
    title: "Mykonos",
    image: "/images/mykonos.jpg",
    alt: "Case albe din Mykonos",
    gallery: [
      { src: "/images/mykonos/apus-stanci.jpg", alt: "Apus de soare deasupra mării, văzut de pe stâncile din Mykonos", width: 2048, height: 1536 },
      { src: "/images/mykonos/scara-albastra.jpg", alt: "Scară albă cu balustradă albastră, decorată cu uși miniaturale și ochi grecești", width: 1536, height: 2048 },
      { src: "/images/mykonos/caine-mare.jpg", alt: "Câine cu o minge în gură, stând în apa limpede de lângă țărm", width: 1152, height: 2048 },
      { src: "/images/mykonos/iaht-noaptea.jpg", alt: "Iaht luminat noaptea în port, cu luminile orașului Mykonos în fundal", width: 2048, height: 1536 },
      { src: "/images/mykonos/zid-mesaj.jpg", alt: "Femeie în ținută albastru cu alb, sprijinită de un zid alb cu un mesaj scris de mână", width: 1080, height: 1920 },
      { src: "/images/mykonos/taverna-bougainvillea.jpg", alt: "Tavernă seara, cu mese albe și copaci de bougainvillea roz", width: 1536, height: 2048 },
      { src: "/images/mykonos/oglinda-plaja.jpg", alt: "Oglindă cu ramă de lemn care reflectă terasa și plaja turcoaz", width: 2048, height: 1536 },
    ],
  },
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
