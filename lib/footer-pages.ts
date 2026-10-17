export type FooterPage = {
  slug: string
  title: string
  href?: string
}

export const footerPages: FooterPage[] = [
  { slug: "politica-de-cookies", title: "Politica de Cookies" },
  { slug: "termeni-si-conditii", title: "Termeni și condiții" },
  { slug: "modalitati-de-plata", title: "Modalități de plată" },
  { slug: "conditii-de-calatorie", title: "Condiții de călătorie", href: "https://www.mae.ro/travel-conditions" },
  { slug: "politica-de-confidentialitate", title: "Politică de confidențialitate" },
  { slug: "documente-de-identificare", title: "Documente de identificare" },
  { slug: "contract-cu-turistul", title: "Contract cu turistul" },
]

export const externalFooterLinks = [
  { href: "https://anpc.ro", title: "ANPC" },
  { href: "https://reclamatiisal.anpc.ro/", title: "SAL" },
  { href: "https://consumer-redress.ec.europa.eu/site-relocation_en", title: "SOL" },
]

export function getFooterPage(slug: string) {
  return footerPages.find((page) => page.slug === slug)
}
