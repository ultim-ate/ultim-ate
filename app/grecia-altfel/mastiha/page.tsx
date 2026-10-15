import type { Metadata } from "next"
import { CultureArticle } from "@/components/culture-article"

export const metadata: Metadata = {
  title: "Mastiha – lacrimile parfumate ale insulei Chios | Greek Steps",
  description: "Μαστίχα, rășina aromatică a insulei Chios: tradiție, meșteșug și un gust imediat recognoscibil.",
}

const paragraphs = [
  "Există gusturi pe care le recunoști imediat și altele pe care nu le uiți tocmai pentru că sunt diferite. Μαστίχα (mastíha) face parte din a doua categorie.",
  "Rășina aromatică obținută din arborele de mastic este strâns legată de insula Chios, unde tradiția cultivării ei se păstrează de secole. Cristalele mici și translucide, numite adesea „lacrimile de mastic”, au un parfum aparte: rășinos, proaspăt, ușor balsamic.",
  "Mastiha apare în multe forme. O poți întâlni în lichior, dulciuri, înghețată, produse de patiserie, cafea sau chiar în preparate sărate. Este una dintre acele arome care pot transforma ceva simplu într-un gust imediat recognoscibil.",
  "În Chios, povestea ei se simte cel mai bine în Mastichochoria, satele tradiționale din sudul insulei, unde cultivarea și recoltarea masticului fac parte din identitatea locului. Aici, fiecare picătură de rășină spune ceva despre răbdare, meșteșug și παράδοση (parádosi) – tradiție.",
  "Δοκίμασε μαστίχα! (Dokímase mastíha!)",
  "Încearcă mastiha!",
]

export default function MastihaPage() {
  return <CultureArticle title="Mastiha – lacrimile parfumate ale insulei Chios" paragraphs={paragraphs} />
}
