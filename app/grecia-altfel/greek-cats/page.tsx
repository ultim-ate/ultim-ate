import type { Metadata } from "next"
import { ComingSoon, LightSeaPage } from "@/components/light-sea-page"

export const metadata: Metadata = {
  title: "Greek Cats | Grecia Altfel | Greek Steps",
}

export default function GreekCatsPage() {
  return (
    <LightSeaPage>
      <ComingSoon title="Greek Cats" />
    </LightSeaPage>
  )
}
