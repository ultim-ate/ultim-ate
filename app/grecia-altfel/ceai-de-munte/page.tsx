import type { Metadata } from "next"
import { CultureArticle } from "@/components/culture-article"

export const metadata: Metadata = {
  title: "Τσάι του βουνού – Grecia într-o ceașcă | Greek Steps",
  description: "Ceaiul de munte grecesc, din plante Sideritis: aromă delicată, fără cofeină, simplu și plin de tradiție.",
}

const paragraphs = [
  "În Grecia, unele lucruri simple spun foarte mult despre loc. Τσάι του βουνού (tsái tou vounoú) înseamnă „ceai de munte” și este una dintre acele băuturi care poartă cu ele miros de ierburi, aer curat și peisaje de altitudine.",
  "Preparat din plante din genul Sideritis, ceaiul de munte grecesc are o aromă delicată, ușor florală și ierboasă. Nu are gustul intens al unui ceai negru sau verde și nici nu are nevoie de prea multe adaosuri. De multe ori este servit simplu, cu puțină miere sau câteva picături de lămâie.",
  "În mod tradițional, plantele sunt culese din zone montane, uscate și apoi infuzate cu tot cu tulpini și flori..",
  "Este o băutură fără cofeină, potrivită pentru dimineți liniștite, seri răcoroase sau acele momente în care vrei ceva simplu și aromat. În casele grecești, ceaiul de munte este asociat adesea cu confortul, grija și obiceiurile transmise din familie în familie.",
  "Și poate tocmai aici stă farmecul lui: nu încearcă să fie sofisticat. Este απλό (apló) – simplu – dar are aroma unui loc pe care îl recunoști imediat.",
  "Servit fierbinte iarna sau rece, cu gheață și lămâie, vara, tsái tou vounoú este o altă modalitate de a descoperi Grecia prin gusturi mai puțin evidente.",
  "Uneori, o călătorie poate începe chiar și cu o ceașcă de ceai.",
  "Τσάι του βουνού, παρακαλώ!",
  "Un ceai de munte, vă rog!",
]

export default function CeaiDeMuntePage() {
  return <CultureArticle title="Τσάι του βουνού – Grecia într-o ceașcă" paragraphs={paragraphs} />
}
