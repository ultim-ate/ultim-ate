import type { Metadata } from "next"
import Image from "next/image"
import { LightSeaPage } from "@/components/light-sea-page"

export const metadata: Metadata = {
  title: "Greek Cats | Grecia Altfel | Greek Steps",
  description: "Pisicile Greciei, fotografiate pe străduțe, în taverne și pe pragurile caselor.",
}

const cats = [
  { src: "/images/cats/cat-1.jpeg", alt: "Pisică albă întinsă sub o masă de tavernă cu față de masă în carouri albastre, la apus lângă mare" },
  { src: "/images/cats/cat-2.jpeg", alt: "Pisică alb-negru stând între scaune albastre de tavernă și ghivece cu plante" },
  { src: "/images/cats/cat-3.jpeg", alt: "Pisică albă cu pui tricolor printre flori mov" },
  { src: "/images/cats/cat-4.jpg", alt: "Pisică tigrată odihnindu-se pe un zid alb, la umbra unei yucca" },
  { src: "/images/cats/cat-5.jpg", alt: "Pisică gri și pisică portocalie stând împreună pe pragul unei uși" },
  { src: "/images/cats/cat-6.jpeg", alt: "Pisică albă cu puiul ei lângă un zid de piatră însorit" },
  { src: "/images/cats/cat-7.jpeg", alt: "Pisică portocalie pe un prag cu gresie decorativă și pisică tigrată în fața ușii" },
  { src: "/images/cats/cat-8.jpeg", alt: "Pui de pisică alb cu pete tigrate, lângă o poartă de fier forjat și o bougainvillea mov" },
]

export default function GreekCatsPage() {
  return (
    <LightSeaPage>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">Greek Cats</h1>
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {cats.map((cat) => (
            <li key={cat.src} className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-md">
              <Image
                src={cat.src}
                alt={cat.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </div>
    </LightSeaPage>
  )
}
