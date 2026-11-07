import type { Travel } from "@/lib/travels"

export const TRANSYLVANIA_SLUG = "transylvania-echoes"

export const transylvaniaPlaces: Travel[] = [
  {
    slug: "sinaia",
    title: "Sinaia",
    image: "/images/romania-sinaia.png",
    alt: "Castelul Peleș din Sinaia la poalele munților",
  },
  {
    slug: "sighisoara",
    title: "Sighișoara",
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
  {
    slug: "cetatea-neamt",
    title: "Cetatea Neamț",
  },
  {
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
  },
]

export function getTransylvaniaPlace(slug: string) {
  return transylvaniaPlaces.find((place) => place.slug === slug)
}
