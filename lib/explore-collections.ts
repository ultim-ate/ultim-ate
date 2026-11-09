import { getTravelEntry, type Travel } from "@/lib/travels"

export const TRANSYLVANIA_SLUG = "transylvania-echoes"

const brasov: Travel = {
  slug: "brasov",
  title: "Brașov",
  image: "/images/brasov/biserica-neagra.jpg",
  alt: "Biserica Neagră din Brașov, cu ziduri gotice de piatră, sub un cer înnorat",
  imagePosition: "object-[center_75%]",
  story: {
    sections: [
      {
        title: "",
        text: "Brașovul este un punct excelent de plecare pentru explorarea Transilvaniei și un loc în care merită să rămâi suficient cât să-i descoperi atmosfera, nu doar obiectivele.",
      },
    ],
    recommendCta: true,
    ctaLabel: "Descoperă Brașov",
  },
}

const transylvaniaPlaces: Travel[] = [
  {
    slug: "sighisoara",
    title: "Sighișoara",
    image: "/images/sighisoara/strada-colorata.jpg",
    alt: "Străduță pietruită din Sighișoara cu case roșii și galbene, cu Turnul cu Ceas în fundal",
    cover: { width: 1164, height: 1182 },
    coverSize: "sm",
    story: {
      sections: [
        {
          title: "",
          text: "Una dintre cele mai bine păstrate cetăți medievale locuite din Europa, cu străduțe înguste, case colorate, turnuri și priveliști care te transportă într-o altă epocă.",
        },
        {
          title: "",
          text: "Este locul potrivit pentru cei care iubesc orașele cu istorie, atmosferă și puțin mister.",
        },
      ],
      recommendCta: true,
      ctaLabel: "Descoperă Sighișoara",
    },
  },
  {
    slug: "sibiu",
    title: "Sibiu",
    image: "/images/romania-sibiu.png",
    alt: "Piața Mare din Sibiu cu acoperișurile caracteristice cu „ochi”",
    story: {
      sections: [
        {
          title: "",
          text: "Piața Mare, Piața Mică, Podul Minciunilor și acoperișurile cu „ochii” lor caracteristici dau Sibiului o identitate ușor de recunoscut.",
        },
        {
          title: "",
          text: "Elegant, cultural și plăcut de explorat la pas, este unul dintre acele orașe în care merită să lași harta deoparte pentru câteva ore.",
        },
      ],
      recommendCta: true,
      ctaLabel: "Descoperă Sibiu",
    },
  },
  getTravelEntry("viscri"),
  brasov,
]

const collections: Record<string, Travel[]> = {
  [TRANSYLVANIA_SLUG]: transylvaniaPlaces,
  "moldavian-heritage": [
    {
      slug: "cetatea-neamt",
      title: "Cetatea Neamț",
      image: "/images/neamt/cetatea-neamt.jpg",
      alt: "Zidurile de piatră ale Cetății Neamț și podul de lemn sprijinit pe stâlpi înalți, lângă un brad, sub cer senin",
      cover: { width: 2000, height: 1500 },
    },
  ],
  "shadows-of-dracula": [getTravelEntry("magie-de-halloween")],
}

export function getCollection(slug: string) {
  return collections[slug]
}

export function getCollectionPlace(slug: string, sub: string) {
  return collections[slug]?.find((place) => place.slug === sub)
}

export function getAllCollectionParams() {
  return Object.entries(collections).flatMap(([slug, places]) => places.map((place) => ({ slug, sub: place.slug })))
}

export function getAllCollectionChildParams() {
  return Object.entries(collections).flatMap(([slug, places]) =>
    places.flatMap((place) => (place.children ?? []).map((child) => ({ slug, sub: place.slug, child: child.slug }))),
  )
}
