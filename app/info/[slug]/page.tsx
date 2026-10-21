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
      ) : (
        <ComingSoon title={page.title} />
      )}
    </LightSeaPage>
  )
}
