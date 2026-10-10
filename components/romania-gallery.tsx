"use client"

import { useState, type ReactNode } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

function Greek({ children }: { children: ReactNode }) {
  return (
    <strong translate="no" className="notranslate font-semibold">
      {children}
    </strong>
  )
}

function Brand() {
  return (
    <strong translate="no" className="notranslate font-semibold">
      Greek Steps
    </strong>
  )
}

type Place = {
  src: string
  name: string
  title: string
  alt: string
  story?: ReactNode[]
}

const places: Place[] = [
  {
    src: "/images/romania-bucuresti-lac.jpg",
    name: "București",
    title: "București – Efervescență, culoare și stil",
    alt: "Apus portocaliu deasupra unui lac din București, cu rațe pe apă și siluete de copaci",
    story: [
      "Bucureștiul nu este un oraș pe care îl înțelegi dintr-o singură privire. Este viu, colorat, surprinzator, mereu în mișcare si care oferă mai mult decât te-ai aștepta, indiferent ce cauți.",
      "Istorie și arhitectură. Artă și cultură. Gastronomie și viață de noapte. Concerte, expoziții, festivaluri, terase, evenimente și locuri care te fac să descoperi mereu ceva nou. Parcuri liniștite și intersecții care nu par să doarmă niciodată. Uneori pare sofisticat, alteori haotic, dar tocmai amestecul acesta îi dă personalitate.",
      <>
        Este un oraș cu mult <Greek>κέφι (kéfi)</Greek> – acea stare de bucurie, energie și poftă de viață greu de
        tradus într-un singur cuvânt.
      </>,
      "Poate de aceea Bucureștiul seamănă uneori cu o cupă de șampanie: efervescent, imprevizibil și plin de mici explozii de culoare. Este un oraș care își schimbă mereu ritmul, dar nu își pierde niciodata energia.",
      <>
        La <Brand />, credem că un oraș devine memorabil prin felul în care te face să te simți.
      </>,
    ],
  },
  {
    src: "/images/romania-viscri.png",
    name: "Viscri",
    title: "Viscri – Satul în care liniștea devine poveste",
    alt: "Biserica fortificată din Viscri și casele colorate ale satului",
    story: [
      "Viscri nu este un loc pe care îl descoperi în grabă. Este unul dintre acele sate în care ai impresia că timpul a ales să rămână puțin în urmă, printre case colorate, porți vechi și drumuri pe care încă se mai aude liniștea.",
      <>
        Aici, ideea grecească de <Greek>σιγά σιγά (sigá sigá)</Greek> – încet, încet – pare să capete un sens
        neașteptat, de data aceasta în inima Transilvaniei.
      </>,
      "Satul te întâmpină fără spectaculozitate. Nu încearcă să impresioneze si tocmai de aceea cucerește. Casele săsești, așezate una lângă alta, păstrează culori calde și porți masive, iar în spatele lor se ascund curți, grădini și povești de familie transmise din generație în generație.",
      "Deasupra satului se ridică biserica fortificată, unul dintre reperele care au făcut Viscri cunoscut dincolo de granițele României. Zidurile ei păstrează memoria comunității săsești și amintesc de vremurile în care biserica era nu doar un loc al credinței, ci și un spațiu de refugiu și protecție.",
      "De aici, privind peste acoperișurile satului și dealurile din jur, înțelegi poate cel mai bine farmecul locului: Viscri nu este despre „ce trebuie să vezi”, ci despre cum alegi să fii acolo.",
      "Poate într-o plimbare fără destinație. Poate la umbra unei porți albastre. Poate oprindu-te pentru câteva minute ca să privești caii întorcându-se de pe câmp.",
      "Desi se află departe de Grecia, acest loc îți amintește de ceva foarte mediteranean – bucuria de a încetini, de a sta la masă, de a vorbi cu oamenii și de a lăsa locul să se dezvăluie in propriul ritm.",
      <>
        La <Brand />, credem că cele mai frumoase locuri sunt cele care nu se termină odată cu fotografia. Sunt
        cele care îți rămân în minte printr-un miros, o nuanta, o conversație sau pur și simplu prin senzația că,
        pentru câteva clipe, ceasul s-a oprit.
      </>,
    ],
  },
  {
    src: "/images/romania-brasov.png",
    name: "Brașov",
    title: "Brașov – Un oraș cu muntele la fereastră",
    alt: "Piața Sfatului din Brașov cu Biserica Neagră și muntele Tâmpa în fundal",
    story: [
      "Brașovul are farmecul unui oraș în care atmosfera urbană și aerul de munte se potrivesc surprinzător de bine. Piața Sfatului, Biserica Neagră și străzile centrului vechi păstrează atmosfera unui loc cu multa personalitate.",
      <>
        O <Greek>βόλτα (vólta)</Greek> – o plimbare – te poartă printre fațade colorate, străduțe liniștite și
        locuri animate, cu Tâmpa mereu prezentă în fundal.
      </>,
      "De sus, priveliștea adună laolaltă acoperișurile orașului, turnurile și muntele, într-un peisaj care pare să aibă exact măsura potrivită între urban și natură.",
      "Brașovul este ușor de descoperit și greu de uitat: suficient de viu pentru a nu te plictisi și suficient de liniștit pentru a te bucura de el fără grabă.",
      <>
        La <Brand />, ne plac locurile care au atmosferă și identitate. Brașovul le are pe amândouă.
      </>,
    ],
  },
  {
    src: "/images/romania-bran.png",
    name: "Bran",
    title: "Bran – Între castel, sate și munți",
    alt: "Castelul Bran pe stânca sa, înconjurat de păduri",
    story: [
      "Pentru mulți, Bran înseamnă înainte de toate Castelul Bran. Turnuri, legende, povești cu Dracula și imaginea aceea pe care o recunoști imediat. Castelul rămâne, desigur, simbolul locului, dar adevărata surpriză este tot ceea ce se află în jurul lui.",
      <>
        În satele din jur, <Greek>παράδοση (parádosi)</Greek> – tradiția – se regăsește în gospodării, în
        meșteșuguri, în mâncarea locală și în felul în care oamenii trăiesc încă aproape de natură.
      </>,
      "Aici regăsești și simplitatea vieții de munte: aer rece dimineața, miros de lemn și iarbă, drumuri care urcă spre munte și sentimentul că orașul a rămas undeva departe.",
      "Branul își arată adevăratul farmec atunci când te îndepărtezi puțin de imaginea lui cea mai cunoscută, iar in jur ramane acea atmosferă care te face să privești locul cu alți ochi.",
      <>
        La <Brand /> credem că uneori cele mai frumoase călătorii încep exact acolo unde se termină imaginea de pe
        cartea poștală. Branul este unul dintre acele locuri.
      </>,
    ],
  },
  {
    src: "/images/romania-sibiu.png",
    name: "Sibiu",
    title: "Sibiu – Între piețe, acoperișuri și povești",
    alt: "Piața Mare din Sibiu cu clădiri istorice",
    story: [
      "Sibiul este un oraș care se descoperă ușor la pas. Piața Mare, Piața Mică, Podul Minciunilor și acoperișurile cu „ochii” lor caracteristici îi dau un aer aparte, elegant și puțin misterios.",
      <>
        O plimbare prin centrul vechi te poartă de la piețe largi la câte un <Greek>σοκάκι (sokáki)</Greek> – o
        străduță îngustă – unde fațadele colorate, pasajele și curțile ascunse păstrează atmosfera orașului de
        altădată.
      </>,
      <>
        De sus, din Turnul Sfatului, <Greek>θέα (théa)</Greek> – priveliștea – adună acoperișurile, turnurile și
        străzile vechi într-o imagine care explică poate cel mai bine farmecul Sibiului.
      </>,
      "Orașul are și multă viață culturală: festivaluri, muzee, evenimente, terase și locuri în care istoria se întâlnește firesc cu prezentul.",
      <>
        La <Brand />, ne plac orașele care au identitate și atmosferă. Sibiul este unul dintre acele locuri în care
        fiecare stradă pare să mai ascundă ceva de descoperit.
      </>,
    ],
  },
  {
    src: "/images/romania-sinaia.png",
    name: "Sinaia",
    title: "Sinaia – Eleganță la poalele munților",
    alt: "Castelul Peleș din Sinaia la poalele munților",
    story: [
      "Sinaia are acel aer aparte al stațiunilor de munte cu istorie. Castelul Peleș, vilele elegante, străzile liniștite și pădurile care urcă spre Bucegi îi dau un farmec rafinat, ușor de recunoscut.",
      <>
        O plimbare prin oraș te poartă între arhitectură, natură și mici colțuri de liniște, iar aici cuvântul{" "}
        <Greek>ηρεμία (iremía)</Greek> – liniște – pare să se potrivească firesc cu atmosfera locului.
      </>,
      "Dincolo de castel, Sinaia înseamnă și trasee, aer de munte, priveliști și acel sentiment de evadare pe care îl cauți atunci când vrei să lași orașul în urmă pentru câteva ore.",
      <>
        La <Brand /> ne plac locurile care reușesc să aducă împreună eleganța și natura. Sinaia face asta cu multă
        ușurință.
      </>,
    ],
  },
]

function PlaceCard({ place }: { place: Place }) {
  const [expanded, setExpanded] = useState(false)
  const hasStory = Boolean(place.story?.length)
  const storyId = `story-${place.name}`

  const image = (
    <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
      <Image
        src={place.src}
        alt={place.alt}
        fill
        sizes="(min-width: 1024px) 900px, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
  )

  if (!hasStory) {
    return (
      <li className="flex flex-col gap-3">
        <h3 className="text-xl font-bold text-sky-400">{place.title}</h3>
        {image}
      </li>
    )
  }

  return (
    <li className="flex flex-col gap-3">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-controls={storyId}
        className="group flex flex-col gap-3 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <span className="flex items-center justify-between gap-4">
          <h3 className="text-balance text-xl font-bold text-sky-400">{place.title}</h3>
          <ChevronDown
            className={`size-5 shrink-0 text-sky-400 transition-transform ${expanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </span>
        {image}
      </button>
      {expanded && (
        <div id={storyId} className="flex flex-col gap-4 text-base leading-relaxed text-foreground/85">
          {place.story!.map((paragraph, i) => (
            <p key={i} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </li>
  )
}

export function RomaniaGallery() {
  const [open, setOpen] = useState(false)

  return (
    <section className="px-6 pb-24 md:pb-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <h2 className="text-balance text-3xl font-bold leading-tight text-sky-400 md:text-4xl">
          România, pas cu pas
        </h2>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block aspect-[16/9] w-full max-w-2xl overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          aria-label="Deschide galeria foto România"
        >
          <Image
            src={places[0].src}
            alt={places[0].alt}
            fill
            sizes="(min-width: 768px) 672px, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[92vh] max-w-4xl gap-6 overflow-y-auto border-none bg-background p-6 sm:max-w-4xl">
          <DialogTitle className="text-2xl font-bold text-sky-400">România, pas cu pas</DialogTitle>
          <DialogDescription className="sr-only">
            Fotografii din România. Apasă pe o fotografie cu poveste pentru a citi textul.
          </DialogDescription>
          <ul className="flex flex-col gap-10">
            {places.map((place) => (
              <PlaceCard key={place.src} place={place} />
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </section>
  )
}
