import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LightSeaPage } from "@/components/light-sea-page"
import { TravelCard } from "@/components/travel-detail"
import { getAllExploreLinks, getExploreLink } from "@/lib/explore"
import Image from "next/image"
import Link from "next/link"
import { TRANSYLVANIA_SLUG, getCollection } from "@/lib/explore-collections"
import type { Travel } from "@/lib/travels"

const partnerBenefits = ["Comisioane avantajoase", "Asistență și suport dedicat", "Colaborare pe termen lung"]
const partnerAudience = [
  "Agenții partenere & Companii",
  "Ghizi de Turism",
  "Bloggeri & Creatori de conținut de travel",
  "Profesori & Cadre didactice",
  "Școli private & Afterschools",
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex list-disc flex-col gap-2 pl-10 text-lg leading-relaxed marker:text-[1.3em] md:text-xl">
      {items.map((item) => (
        <li key={item} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  )
}

function B2BContent() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">
          Două țări. O inimă. Experiențe care apropie
        </h2>
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Căutăm parteneri alături de care să transformăm legătura dintre România și Grecia în experiențe, proiecte și
          povești care merg mai departe.
        </p>
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">Beneficiile parteneriatului</h2>
        <BulletList items={partnerBenefits} />
      </section>
      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold uppercase leading-relaxed tracking-wide md:text-xl">Cui se adresează</h2>
        <p className="text-pretty text-lg leading-relaxed md:text-xl">
          Programul nostru este dedicat tuturor celor care doresc să ofere comunității lor experiențe de călătorie și
          învățare:
        </p>
        <BulletList items={partnerAudience} />
      </section>
    </div>
  )
}

function PlacesGrid({ slug, places }: { slug: string; places: Travel[] }) {
  return (
    <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {places.map((place) => (
        <li key={place.slug} className="flex">
          <TravelCard travel={place} href={`/exploreaza/${slug}/${place.slug}`} />
        </li>
      ))}
    </ul>
  )
}

function TransylvaniaContent({ places }: { places: Travel[] }) {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4 text-pretty text-lg leading-relaxed md:text-xl">
        <h2 className="text-balance text-xl font-bold uppercase tracking-wide md:text-2xl">
          Descoperă Transilvania dincolo de legendă
        </h2>
        <p>
          Transilvania nu înseamnă doar Dracula. Este o regiune care se descoperă prin atmosferă, arhitectură, tradiții și
          peisaje care se schimbă de la un loc la altul.
        </p>
        <p>
          La Greek Steps am ales câteva dintre locurile care merită să facă parte din propria ta poveste transilvăneană.
        </p>
        <Link
          href="/#romania-pas-cu-pas"
          className="mt-2 inline-flex w-fit items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          Descoperă România
        </Link>
      </section>
      <PlacesGrid slug={TRANSYLVANIA_SLUG} places={places} />
    </div>
  )
}

const SOON_RO = "Detaliile vor fi publicate în curând."
const SOON_EL = "Περισσότερες λεπτομέρειες θα ανακοινωθούν σύντομα."

type ExploreText = { lines: string[]; greekLines?: string[] }

const exploreTexts: Record<string, ExploreText> = {
  "greek-students-family-travel": {
    lines: [
      "Suntem alături de studenții greci din România și le transformăm anii de facultate într-o experiență memorabilă. În plus, creăm pachete dedicate familiilor care vin în vizită, pentru ca fiecare revedere să fie confortabilă și plină de bucurie.",
      SOON_RO,
    ],
    greekLines: [
      "Είμαστε δίπλα στους Έλληνες φοιτητές στη Ρουμανία και θέλουμε να κάνουμε τα χρόνια των σπουδών τους μια αξέχαστη εμπειρία. Παράλληλα, δημιουργούμε ειδικά πακέτα για τις οικογένειές τους που έρχονται να τους επισκεφθούν, ώστε κάθε επανένωση να είναι άνετη και γεμάτη χαρά.",
      SOON_EL,
    ],
  },
  "bucharest-city-break": {
    lines: [
      "De la vibe-ul vibrant al Centrului Vechi la gastronomia locală, până la locurile secrete ale capitalei, îți pregătim experiența urbană perfectă.",
      SOON_RO,
    ],
    greekLines: [
      "Από τη ζωντανή ατμόσφαιρα της Παλιάς Πόλης και την τοπική γαστρονομία μέχρι τα κρυμμένα σημεία της πρωτεύουσας, ετοιμάζουμε για εσάς την ιδανική αστική εμπειρία.",
      SOON_EL,
    ],
  },
  "royal-castles": {
    lines: ["Excursii și vizite de neuitat la cele mai impresionante castele regale din România.", SOON_RO],
    greekLines: ["Αξέχαστες εκδρομές και επισκέψεις στα πιο εντυπωσιακά βασιλικά κάστρα της Ρουμανίας.", SOON_EL],
  },
  "moldavian-heritage": {
    lines: [
      "Tradiție, istorie și locuri cu totul speciale. Descoperă farmecul Moldovei – de la cetăți medievale impunătoare la mănăstiri pline de liniște.",
      SOON_RO,
    ],
    greekLines: [
      "Παράδοση, ιστορία και πραγματικά ξεχωριστά μέρη. Ανακαλύψτε τη γοητεία της Μολδαβίας – από επιβλητικά μεσαιωνικά φρούρια μέχρι μοναστήρια γεμάτα γαλήνη.",
      SOON_EL,
    ],
  },
  "shadows-of-dracula": {
    lines: [
      "Descoperă misterul lui Dracula chiar la el acasă, în cea mai enigmatică noapte de Halloween în Transilvania.",
      SOON_RO,
    ],
    greekLines: [
      "Ανακαλύψτε το μυστήριο του Δράκουλα στον τόπο όπου γεννήθηκε ο θρύλος, μέσα στην πιο αινιγματική νύχτα του Halloween στην Τρανσυλβανία.",
      SOON_EL,
    ],
  },
  "greek-blue-escapes": {
    lines: ["O selecție de vile și cazări alese cu grijă, ideale pentru momente autentice pe tărâmul elen."],
  },
  "alpine-ski-escapes": {
    lines: ["Lasă urme pe pârtie! Aer fresh de munte, zăpadă impecabilă și doza ta garantată de adrenalină.", SOON_RO],
  },
  "exotic-dreams": {
    lines: ["Schimbă peisajul și resetăm vibe-ul! Apă turcoaz, nisip fin și colțul tău secret de paradis.", SOON_RO],
  },
  "family-adventures": {
    lines: [
      "Schimbați rutina pe aventură! Locuri ideale, distracție din plin și vacanța perfectă pentru întreaga familie.",
      SOON_RO,
    ],
  },
}

const exploreImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "greek-students-family-travel": {
    src: "/images/greek-students/steag-grecia.jpg",
    alt: "Steagul Greciei fluturând în bătaia vântului, luminat de soare pe un cer albastru",
    width: 1280,
    height: 806,
  },
  "greek-blue-escapes": {
    src: "/images/greek-blue/santorini-noaptea.jpg",
    alt: "Hotel alb pe faleza din Santorini noaptea, cu piscină luminată turcoaz, terasă cu mese și satul iluminat pe stâncă",
    width: 2048,
    height: 946,
  },
  "bucharest-city-break": {
    src: "/images/bucuresti/centrul-vechi.jpg",
    alt: "Stradă pietruită din Centrul Vechi al Bucureștiului la apus, cu terase luminate și clădiri istorice cu cupolă în fundal",
    width: 1200,
    height: 630,
  },
  "royal-castles": {
    src: "/images/castele/peles.jpg",
    alt: "Castelul Peleș cu turnuri ascuțite și fațadă în stil neorenascentist, grădini cu arbuști tunși și munți împăduriți",
    width: 1000,
    height: 667,
  },
  "alpine-ski-escapes": {
    src: "/images/alpine/partie.jpg",
    alt: "Pârtie de schi însorită cu telescaun, schiori și brazi acoperiți de zăpadă sub un cer albastru cu nori",
    width: 1600,
    height: 900,
  },
  "exotic-dreams": {
    src: "/images/exotic/plaja.jpg",
    alt: "Plajă cu nisip alb fin, apă turcoaz și o barcă mică trasă pe mal, sub nori pufoși",
    width: 1600,
    height: 739,
  },
  "family-adventures": {
    src: "/images/family/rafting-parc.jpg",
    alt: "Bărci rotunde de rafting pe un râu agitat într-un parc de distracții, lângă statui în stil aztec și copaci înalți",
    width: 2000,
    height: 1500,
  },
}

function TextBlock({ lines, greekLines }: ExploreText) {
  return (
    <div className="flex max-w-2xl flex-col gap-4 text-center text-pretty text-lg leading-relaxed md:text-xl">
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
      {greekLines?.length ? (
        <div lang="el" className="flex flex-col gap-4 pt-4">
          {greekLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ImageWithText({
  src,
  alt,
  width,
  height,
  lines,
  greekLines,
  cta,
}: {
  src: string
  alt: string
  width: number
  height: number
  lines: string[]
  greekLines?: string[]
  cta?: string
}) {
  return (
    <div className="flex flex-col items-center gap-8">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 768px) 560px, 100vw"
        priority
        className={`h-auto w-full ${height > width ? "max-w-md" : "max-w-2xl"}`}
      />
      {(lines.length > 0 || greekLines?.length) && <TextBlock lines={lines} greekLines={greekLines} />}
      {cta && (
        <Link
          href="/contact"
          className="rounded-md border border-current px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-[var(--course-surface)]"
        >
          {cta}
        </Link>
      )}
    </div>
  )
}

export function generateStaticParams() {
  return getAllExploreLinks().map((link) => ({ slug: link.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const link = getExploreLink((await params).slug)
  return { title: link ? `${link.name} | Greek Steps` : "Explorează | Greek Steps" }
}

export default async function ExplorePage({ params }: { params: Promise<{ slug: string }> }) {
  const link = getExploreLink((await params).slug)
  if (!link) notFound()
  const collection = getCollection(link.slug)
  const text = exploreTexts[link.slug]
  const image = exploreImages[link.slug]

  return (
    <LightSeaPage>
      <article className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
        <h1
          className={`text-balance font-bold uppercase tracking-wide ${
            link.slug === "b2b-parteneri" ? "text-lg leading-relaxed md:text-xl" : "text-3xl md:text-4xl"
          }`}
        >
          {link.name}
        </h1>
        {link.slug === "b2b-parteneri" ? (
          <B2BContent />
        ) : link.slug === TRANSYLVANIA_SLUG && collection ? (
          <TransylvaniaContent places={collection} />
        ) : collection ? (
          <>
            <PlacesGrid slug={link.slug} places={collection} />
            {text && (
              <div className="flex justify-center">
                <TextBlock {...text} />
              </div>
            )}
          </>
        ) : image ? (
          <ImageWithText {...image} lines={text?.lines ?? []} greekLines={text?.greekLines} />
        ) : link.slug === "odyssey" ? (
          <ImageWithText
            src="/images/odyssey/steag-acropole.jpg"
            alt="Steagul Greciei fluturând pe Acropole, cu vizitatori pe zidul de piatră, sub un cer albastru"
            width={1500}
            height={2000}
            lines={[
              "Un program special care îmbină limba greacă, cultura și experiența directă în Grecia.",
              "În pregătire. Revenim în curând cu detalii.",
            ]}
          />
        ) : link.slug === "solo-and-free" ? (
          <ImageWithText
            src="/images/solo/cetate-poarta.jpg"
            alt="Poartă medievală din piatră a unei cetăți pe malul mării, cu ziduri crenelate și un drum care trece prin arcadă"
            width={2000}
            height={1500}
            lines={["Pleci singur. Te conectezi pe drum."]}
            cta="Rezervă experiența"
          />
        ) : (
          <p className="text-pretty text-lg leading-relaxed md:text-xl">
            Detaliile despre această experiență vor fi publicate în curând.
          </p>
        )}
      </article>
    </LightSeaPage>
  )
}
