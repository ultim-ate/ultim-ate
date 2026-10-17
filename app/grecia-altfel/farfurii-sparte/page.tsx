import type { Metadata } from "next"
import { CultureArticle } from "@/components/culture-article"

export const metadata: Metadata = {
  title: "De la muzică la spectacol – povestea farfuriilor sparte | Greek Steps",
  description:
    "De unde vine obiceiul grecesc al farfuriilor sparte, ce înseamnă κέφι și de ce strigăm Ώπα! când muzica ajunge la punctul culminant.",
}

const paragraphs = [
  "Puține imagini sunt atât de asociate cu Grecia precum o tavernă plină, muzică live, dans și farfurii care se sparg pe podea. Dar obiceiul nu este chiar atât de prezent astăzi pe cât ne-au făcut filmele să credem.",
  "Spartul farfuriilor a devenit foarte popular mai ales în anii ’60–’70, în cluburi și localuri de noapte, ca gest de exuberanță, descărcare și participare la petrecere. În jurul lui s-a format imaginea acelui κέφι (kéfi) – chef de viață, energie și bucurie trăită fără reținere.",
  "Astăzi, tradiția este mult mai rară și apare mai ales în contexte speciale, spectacole, nunți sau localuri care păstrează această atmosferă. În locul farfuriilor ceramice se folosesc adesea farfurii speciale din ipsos, mai ușoare și mai sigure.",
  "În multe localuri moderne, gestul a fost înlocuit de flori aruncate spre scenă sau chiar de șervețele aruncate în aer, dar ideea a rămas aceeași: participi la moment, te lași dus de muzică și spui, într-un fel foarte vizibil, „acum ne bucurăm”.",
  "Și, bineînțeles, există exclamația pe care aproape toată lumea o asociază cu astfel de momente:",
  "Ώπα! (Ópa!)",
  "Nu are o traducere perfectă. Poate însemna surpriză, entuziasm, încurajare sau pur și simplu acel moment în care muzica și energia ajung la punctul culminant.",
  "La Greek Steps, ne plac tocmai astfel de detalii: obiceiuri care par simple, dar care spun ceva despre felul în care oamenii sărbătoresc, dansează și împart bucuria cu cei din jur.",
  "Uneori, kefi nu se explică. Se aude. Și, câteodată, se sparge.",
]

export default function FarfuriiSpartePage() {
  return (
    <CultureArticle
      title="De la muzică la spectacol – povestea farfuriilor sparte"
      paragraphs={paragraphs}
      highlights={["Greek Steps"]}
    />
  )
}
