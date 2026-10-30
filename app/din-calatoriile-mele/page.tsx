import type { Metadata } from "next"
import Link from "next/link"
import { LightSeaPage } from "@/components/light-sea-page"
import { TravelCard } from "@/components/travel-detail"
import { TRAVELS_PER_PAGE, travels } from "@/lib/travels"

export const metadata: Metadata = {
  title: "Din Călătoriile Mele | Greek Steps",
  description:
    "Fotografii, impresii și recomandări personale din destinațiile descoperite de Greek Steps.",
}

const totalPages = Math.ceil(travels.length / TRAVELS_PER_PAGE)

export default async function DinCalatoriileMelePage({
  searchParams,
}: {
  searchParams: Promise<{ pagina?: string }>
}) {
  const requested = Number.parseInt((await searchParams).pagina ?? "1", 10)
  const currentPage = Number.isFinite(requested) ? Math.min(Math.max(requested, 1), totalPages) : 1
  const pageTravels = travels.slice((currentPage - 1) * TRAVELS_PER_PAGE, currentPage * TRAVELS_PER_PAGE)

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
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pageTravels.map((travel) => (
            <li key={travel.slug} className="flex">
              <TravelCard travel={travel} href={`/din-calatoriile-mele/${travel.slug}`} />
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav aria-label="Paginare" className="flex items-center justify-center gap-3">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <Link
                key={page}
                href={page === 1 ? "/din-calatoriile-mele" : `/din-calatoriile-mele?pagina=${page}`}
                aria-current={page === currentPage ? "page" : undefined}
                className={`flex size-11 items-center justify-center rounded-full border border-current text-lg font-bold lining-nums transition-colors ${
                  page === currentPage ? "bg-[var(--culture-heading)] text-background" : "hover:bg-current/10"
                }`}
              >
                {page}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </LightSeaPage>
  )
}
