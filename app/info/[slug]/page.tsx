import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { IdentificationDocuments } from "@/components/identification-documents"
import { ComingSoon, LightSeaPage } from "@/components/light-sea-page"
import { footerPages, getFooterPage } from "@/lib/footer-pages"

export function generateStaticParams() {
  return footerPages.map((page) => ({ slug: page.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const page = getFooterPage((await params).slug)
  return { title: page ? `${page.title} | Greek Steps` : "Greek Steps" }
}

export default async function FooterInfoPage({ params }: { params: Promise<{ slug: string }> }) {
  const page = getFooterPage((await params).slug)
  if (!page) notFound()

  return (
    <LightSeaPage>
      {page.slug === "documente-de-identificare" ? (
        <IdentificationDocuments title={page.title} />
      ) : page.slug === "modalitati-de-plata" ? (
        <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
          <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{page.title}</h1>
          <ul className="flex list-disc flex-col gap-4 pl-6 text-pretty text-lg leading-relaxed md:text-xl">
            <li>
              <strong className="font-semibold">Transfer bancar</strong> – datele contului vor fi comunicate odată cu
              confirmarea rezervării
            </li>
            <li>
              <strong className="font-semibold">Plată online cu cardul prin NETOPIA Payments</strong> – plata se
              realizează securizat prin linkul de plată aferent rezervării.
            </li>
          </ul>
        </div>
      ) : (
        <ComingSoon title={page.title} />
      )}
    </LightSeaPage>
  )
}
