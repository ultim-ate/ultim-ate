export type Travel = {
  slug: string
  title: string
  image: string
  alt: string
}

export const travels: Travel[] = [
  { slug: "rodos", title: "Rodos", image: "/images/rhodos.png", alt: "Peisaj din insula Rodos" },
  { slug: "skiathos", title: "Skiathos", image: "/images/skiathos.png", alt: "Plajă din insula Skiathos" },
  { slug: "meteora", title: "Meteora", image: "/images/meteora.jpg", alt: "Mănăstirile de la Meteora" },
  { slug: "atena", title: "Atena", image: "/images/athens-acropolis.jpg", alt: "Acropola din Atena" },
  { slug: "creta", title: "Creta", image: "/images/crete-beach.jpg", alt: "Plajă din Creta" },
  { slug: "mykonos", title: "Mykonos", image: "/images/mykonos.jpg", alt: "Case albe din Mykonos" },
]

export function getTravel(slug: string) {
  return travels.find((travel) => travel.slug === slug)
}
