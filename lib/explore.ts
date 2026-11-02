export type ExploreLink = { slug: string; name: string }

export type ExploreGroup = { label: string; children: ExploreLink[] }

export type ExploreMenuItem = ExploreLink | ExploreGroup

const nostosLinks: ExploreLink[] = [
  { slug: "transylvania-echoes", name: "Transylvania Echoes" },
  { slug: "royal-castles", name: "Royal Castles" },
  { slug: "moldavian-heritage", name: "Moldavian Heritage" },
  { slug: "shadows-of-dracula", name: "Shadows of Dracula" },
]

const customTripLinks: ExploreLink[] = [
  { slug: "alpine-ski-escapes", name: "Alpine & Ski Escapes" },
  { slug: "exotic-dreams", name: "Exotic Dreams" },
  { slug: "greek-blue-escapes", name: "Greek Blue Escapes" },
  { slug: "solo-and-free", name: "Solo and Free" },
  { slug: "family-adventures", name: "Family Adventures" },
  { slug: "agora-seniors", name: "Agora Seniors" },
  { slug: "philoxenia-journeys", name: "Philoxenia Journeys" },
  { slug: "agapi-getaways", name: "Agapi Getaways" },
  { slug: "whispers-of-transylvania", name: "Whispers of Transylvania" },
  { slug: "gothic-escapes", name: "Gothic Escapes" },
]

export const exploreMenu: ExploreMenuItem[] = [
  { label: "Nostos – Feel Romania", children: nostosLinks },
  { slug: "odyssey", name: "Odyssey – Imersiune lingvistică în Grecia" },
  { label: "Călătorii personalizate", children: customTripLinks },
]

export function isExploreGroup(item: ExploreMenuItem): item is ExploreGroup {
  return "children" in item
}

const allExploreLinks: ExploreLink[] = [
  ...exploreMenu.flatMap((item) => (isExploreGroup(item) ? item.children : [item])),
  { slug: "b2b-parteneri", name: "B2B/ Parteneri" },
]

export function getAllExploreLinks() {
  return allExploreLinks
}

export function getExploreLink(slug: string) {
  return allExploreLinks.find((link) => link.slug === slug)
}
