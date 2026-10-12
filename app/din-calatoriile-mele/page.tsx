import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { LightSeaPage } from "@/components/light-sea-page"
import { travels } from "@/lib/travels"

export const metadata: Metadata = {
  title: "Din Călătoriile Mele | Greek Steps",
  description:
    "Fotografii, impresii și recomandări personale din destinațiile descoperite de Greek Steps.",
}

export default function DinCalatoriileMelePage() {
  return (
    <LightSeaPage>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-40 lg:px-8 lg:pt-52">
        <div className="flex max-w-3xl flex-col gap-6">
          <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">Din Călătoriile Mele</h1>
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Călătoriile lasă urme diferite: o lumină, un gust, o stradă, un loc în care ai vrea să revii. Aici adun
            fotografii, impresii și recomandări din destinații pe care le-am descoperit personal.
          </p>
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Nu sunt ghiduri clasice, ci perspective personale: ce mi-a atras atenția, ce merită văzut, ce aș alege
            diferit data viitoare și ce poate fi util înainte de propria ta călătorie.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {travels.map((travel) => (
            <li key={travel.slug}>
              <Link href={`/din-calatoriile-mele/${travel.slug}`} className="group flex flex-col gap-3">
                <h2 className="text-xl font-bold uppercase tracking-wide underline-offset-4 group-hover:underline">
                  {travel.title}
                </h2>
                <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                  <Image
                    src={travel.image}
                    alt={travel.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </LightSeaPage>
  )
}
