export type FooterPage = {
  slug: string
  title: string
}

export const footerPages: FooterPage[] = [
  { slug: "ebooks", title: "Ebooks" },
  { slug: "alerte-calatorie", title: "Alerte călătorie" },
  { slug: "promotii", title: "Promoții" },
  { slug: "vacantele-turistilor", title: "Vacanțele turiștilor" },
  { slug: "destinatii-vacante-familii", title: "Destinații și vacanțe pentru familii" },
  { slug: "vacante-exotice", title: "Vacanțe exotice" },
]

export function getFooterPage(slug: string) {
  return footerPages.find((page) => page.slug === slug)
}
