import type { Metadata } from "next"
import Image from "next/image"
import { LightSeaPage } from "@/components/light-sea-page"

export const metadata: Metadata = {
  title: "Greek Cats | Grecia Altfel | Greek Steps",
  description: "Pisicile Greciei, fotografiate pe străduțe, în taverne și pe pragurile caselor.",
}

const cats = [
  { src: "/images/cats/cat-1.jpeg", width: 1152, height: 2048, alt: "Pisică albă întinsă sub o masă de tavernă cu față de masă în carouri albastre, la apus lângă mare" },
  { src: "/images/cats/cat-2.jpeg", width: 1536, height: 2048, alt: "Pisică alb-negru stând între scaune albastre de tavernă și ghivece cu plante" },
  { src: "/images/cats/cat-3.jpeg", width: 1200, height: 1600, alt: "Pisică albă cu pui tricolor printre flori mov" },
  { src: "/images/cats/cat-4.jpg", width: 1536, height: 2048, alt: "Pisică tigrată odihnindu-se pe un zid alb, la umbra unei yucca" },
  { src: "/images/cats/cat-5.jpg", width: 1080, height: 1100, alt: "Pisică gri și pisică portocalie stând împreună pe pragul unei uși" },
  { src: "/images/cats/cat-6.jpeg", width: 946, height: 2048, alt: "Pisică albă cu puiul ei lângă un zid de piatră însorit" },
  { src: "/images/cats/cat-7.jpeg", width: 946, height: 2048, alt: "Pisică portocalie pe un prag cu gresie decorativă și pisică tigrată în fața ușii" },
]

export default function GreekCatsPage() {
  return (
    <LightSeaPage>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">Greek Cats</h1>
        <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {cats.map((cat) => (
            <li key={cat.src} className="mb-4 break-inside-avoid overflow-hidden rounded-lg shadow-md">
              <Image
                src={cat.src}
                alt={cat.alt}
                width={cat.width}
                height={cat.height}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
            </li>
          ))}
        </ul>
      </div>
    </LightSeaPage>
  )
}
