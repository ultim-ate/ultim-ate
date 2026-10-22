export const exploreLinks = [
  { slug: "vacante-exotice", name: "Vacanțe exotice" },
  { slug: "blue-escapes", name: "Blue Escapes" },
  { slug: "vacanta-de-lux", name: "Vacanță de lux" },
  { slug: "solo-and-free", name: "Solo and Free" },
  { slug: "family-adventures", name: "Family Adventures" },
  { slug: "odyssey", name: "Odyssey – Imersiune lingvistică în Grecia" },
  { slug: "nostos", name: "Nostos - Ρουμανία αλλιώς" },
]

export function getExploreLink(slug: string) {
  return exploreLinks.find((link) => link.slug === slug)
}
