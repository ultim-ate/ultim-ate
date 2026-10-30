export type ExploreLink = { slug: string; name: string }

export const exploreLinks: ExploreLink[] = [
  { slug: "odyssey", name: "Odyssey – Imersiune lingvistică în Grecia" },
  { slug: "nostos", name: "Nostos – Feel Romania" },
]

export const customTripsLabel = "Călătorii personalizate"

export const customTripLinks: ExploreLink[] = [
  { slug: "vacante-exotice", name: "Vacanțe exotice" },
  { slug: "blue-escapes", name: "Blue Escapes" },
  { slug: "solo-and-free", name: "Solo and Free" },
  { slug: "family-adventures", name: "Family Adventures" },
]

const allExploreLinks = [...exploreLinks, ...customTripLinks, { slug: "b2b-parteneri", name: "B2B/Parteneri" }]

export function getAllExploreLinks() {
  return allExploreLinks
}

export function getExploreLink(slug: string) {
  return allExploreLinks.find((link) => link.slug === slug)
}
