export type Travel = {
  slug: string
  title: string
  image?: string
  alt?: string
  imagePosition?: string
  cover?: { width: number; height: number }
  galleryLayout?: "rows" | "stacked"
  gallery?: { src: string; alt: string; width: number; height: number }[]
  children?: Travel[]
}

export const TRAVELS_PER_PAGE = 16

const featuredTravels: Travel[] = [
  {
    slug: "londra",
    title: "Londra",
    image: "/images/londra/big-ben.jpg",
    alt: "Westminster Bridge, Parlamentul și Big Ben sub cerul albastru, cu un pescăruș în zbor deasupra Tamisei",
    gallery: [
      { src: "/images/londra/strada-luminite.jpg", alt: "Stradă din Londra noaptea, cu becuri roz și portocalii atârnate deasupra trecătorilor", width: 1152, height: 2048 },
      { src: "/images/londra/tower-bridge.jpg", alt: "Autobuz roșu etajat traversând Tower Bridge într-o zi înnorată", width: 1536, height: 2048 },
      { src: "/images/londra/brad-argintiu.jpg", alt: "Brad de Crăciun din sfere argintii și globuri oglindă între clădiri moderne de sticlă", width: 1536, height: 2048 },
      { src: "/images/londra/cabina-telefonica.jpg", alt: "Cabină telefonică roșie clasică în fața unui bar și restaurant din Londra", width: 1536, height: 2048 },
      { src: "/images/londra/westminster-abbey.jpg", alt: "Fațada gotică a Westminster Abbey cu rozeta mare, un copac desfrunzit și mulțime de turiști", width: 2048, height: 1536 },
      { src: "/images/londra/parlament.jpg", alt: "Palatul Westminster și Big Ben văzute de pe Westminster Bridge, deasupra Tamisei", width: 2048, height: 1536 },
      { src: "/images/londra/autobuz-luminat.jpg", alt: "Autobuz roșu Routemaster decorat cu lumini pe Regent Street, sub îngerii luminoși de Crăciun", width: 1536, height: 2048 },
      { src: "/images/londra/diana-memorial-walk.jpg", alt: "Plăcuța de bronz Diana Princess of Wales Memorial Walk lângă o pereche de adidași albi", width: 1536, height: 2048 },
    ],
  },
  {
    slug: "santorin",
    title: "Santorini",
    image: "/images/santorin-apus.jpg",
    alt: "Capelă albă cicladică la apus, cu soarele coborând la orizont în Santorini",
    gallery: [
      {
        src: "/images/santorini/piscina-infinity.jpg",
        alt: "Femeie sprijinită de marginea unei piscine infinity, cu satul alb din Santorini în fundal",
        width: 1152,
        height: 2048,
      },
      {
        src: "/images/santorini/caldera-apus.jpg",
        alt: "Apus deasupra calderei din Santorini, cu vase de croazieră și străduțe albe în prim-plan",
        width: 2048,
        height: 946,
      },
      {
        src: "/images/santorini/usa-albastra.jpg",
        alt: "Ușă albastră într-o casă albă cicladică, cu un amforă de lut și un cactus în ghiveci",
        width: 739,
        height: 1600,
      },
      {
        src: "/images/santorini/clopotnita.jpg",
        alt: "Cupolă albă și clopotniță cu cruce deasupra calderei din Santorini",
        width: 2048,
        height: 946,
      },
      {
        src: "/images/santorini/apus-fira.jpg",
        alt: "Mulțime adunată la apus în Fira, cu soarele coborând în spatele insulei și un vas de croazieră pe mare",
        width: 900,
        height: 1600,
      },
      {
        src: "/images/santorini/fira-noaptea.jpg",
        alt: "Fira noaptea, cu terase și restaurante luminate pe marginea falezei",
        width: 1152,
        height: 2048,
      },
      {
        src: "/images/santorini/tricou-dicaprio.jpg",
        alt: "Tricou alb pe umeraș cu inscripția „too old for dicaprio”",
        width: 924,
        height: 2048,
      },
      {
        src: "/images/santorini/piscina-terasa.jpg",
        alt: "Piscină luminată pe o terasă albă din Santorini la căderea serii, cu trepte iluminate și marea în fundal",
        width: 1600,
        height: 739,
      },
    ],
  },
  {
    slug: "mykonos",
    title: "Mykonos",
    image: "/images/mykonos/scari-perne-galbene.jpg",
    alt: "Trepte albe cu balustradă albastră, perne galbene și lumânări într-o cafenea din Mykonos",
    gallery: [
      { src: "/images/mykonos/plaja-palmier.jpg", alt: "Plajă din Mykonos cu palmier, șezlonguri din macrameu și bărci în golf", width: 2048, height: 1536 },
      { src: "/images/mykonos/apus-stanci.jpg", alt: "Apus de soare deasupra mării, văzut de pe stâncile din Mykonos", width: 2048, height: 1536 },
      { src: "/images/mykonos/scara-albastra.jpg", alt: "Scară albă cu balustradă albastră, decorată cu uși miniaturale și ochi grecești", width: 1536, height: 2048 },
      { src: "/images/mykonos/caine-mare.jpg", alt: "Câine cu o minge în gură, stând în apa limpede de lângă țărm", width: 1152, height: 2048 },
      { src: "/images/mykonos/iaht-noaptea.jpg", alt: "Iaht luminat noaptea în port, cu luminile orașului Mykonos în fundal", width: 2048, height: 1536 },
      { src: "/images/mykonos/zid-mesaj.jpg", alt: "Femeie în ținută albastru cu alb, sprijinită de un zid alb cu un mesaj scris de mână", width: 1080, height: 1920 },
      { src: "/images/mykonos/taverna-bougainvillea.jpg", alt: "Tavernă seara, cu mese albe și copaci de bougainvillea roz", width: 1536, height: 2048 },
      { src: "/images/mykonos/oglinda-plaja.jpg", alt: "Oglindă cu ramă de lemn care reflectă terasa și plaja turcoaz", width: 2048, height: 1536 },
    ],
  },
  {
    slug: "dubai",
    title: "Dubai",
    image: "/images/dubai/marina-palmier.jpg",
    alt: "Palmier luminat pe promenada din Dubai Marina noaptea, cu zgârie-nori și iahturi în fundal",
    gallery: [
      { src: "/images/dubai/burj-khalifa.jpg", alt: "Burj Khalifa luminat noaptea, cu reflexii în lacul fântânii din Downtown Dubai", width: 1152, height: 2048 },
      { src: "/images/dubai/desert-portret.jpg", alt: "Femeie cu keffiyeh alb-negru și bluză albă într-o tabără din deșert, în lumina apusului", width: 1080, height: 1920 },
      { src: "/images/dubai/apus-desert.jpg", alt: "Apus de soare portocaliu deasupra dunelor de nisip din deșertul Dubai, cu un SUV în depărtare", width: 1152, height: 2048 },
      { src: "/images/dubai/miracle-garden.jpg", alt: "Roți de moară din lemn înconjurate de petunii colorate în Dubai Miracle Garden", width: 1536, height: 2048 },
      { src: "/images/dubai/plaja-jbr.jpg", alt: "Plaja JBR cu umbrele turcoaz și zgârie-nori pe malul mării", width: 1600, height: 1200 },
      { src: "/images/dubai/ain-dubai.jpg", alt: "Roata panoramică Ain Dubai văzută din mare la apus, cu un iaht alb și jet-ski-uri pe apă", width: 1600, height: 1200 },
    ],
  },
  {
    slug: "viscri",
    title: "Viscri",
    image: "/images/viscri/case-albastre.jpg",
    alt: "Case săsești albastre cu acoperișuri de țiglă roșie, fântână și pajiște verde în Viscri",
    gallery: [
      { src: "/images/viscri/masina-rosie.jpg", alt: "Femeie lângă o mașină roșie de epocă, pe o ulicioară pietruită din Viscri", width: 2000, height: 924 },
      { src: "/images/viscri/oi.jpg", alt: "Turmă de oi și miei odihnindu-se la umbra copacilor în Viscri", width: 2000, height: 924 },
      { src: "/images/viscri/lavoar.jpg", alt: "Lavoar vechi din lemn vopsit gri, cu oglindă, lighean emailat și plăcuța „Viscri 32”", width: 739, height: 1600 },
      { src: "/images/viscri/prajitura.jpg", alt: "Felie de prăjitură cu dulceață de zmeură și o floare mov pe o farfurie turcoaz, într-o grădină", width: 739, height: 1600 },
      { src: "/images/viscri/rochie.jpg", alt: "Rochie crem brodată atârnată pe un perete albastru, lângă un coș cu lână", width: 739, height: 1600 },
      { src: "/images/viscri/zid-biserica.jpg", alt: "Zidul de piatră și turnurile bisericii fortificate din Viscri, sub crengile unui nuc", width: 1600, height: 739 },
      { src: "/images/viscri/poarta-lana.jpg", alt: "Poartă săsească albastră cu obiecte tricotate din lână expuse spre vânzare", width: 1600, height: 739 },
    ],
  },
  {
    slug: "locuri-cu-suflet-din-romania",
    title: "Locuri cu suflet din România",
    image: "/images/romania/cai-pasune.jpg",
    alt: "Cai albi și un cal negru păscând pe o pajiște verde, cu un câine alb, ferme cu acoperișuri roșii și dealuri în fundal",
  },
  {
    slug: "magie-de-halloween",
    title: "Magie de Halloween",
    image: "/images/halloween/schelete-bran.jpg",
    alt: "Statui de schelete cu picături de ploaie, unul cu coroniță de margarete, cu Castelul Bran în ceață în fundal",
    imagePosition: "object-[center_30%]",
    cover: { width: 924, height: 2000 },
    galleryLayout: "stacked",
    gallery: [
      { src: "/images/halloween/gradina-noaptea.jpg", alt: "Grădină la căderea nopții cu felinare, un amfora luminat și copaci în lumină roșie sub turnul castelului", width: 1536, height: 2048 },
      { src: "/images/halloween/mireasa-fantoma.jpg", alt: "Mireasă fantomă cu voal alb într-o vitrină, cu un craniu, un corb și trandafiri roșii", width: 1500, height: 2000 },
      { src: "/images/halloween/masca.jpg", alt: "Personaj cu mască înfricoșătoare și tricou pătat, sub pânze de păianjen, în fața unui local", width: 1536, height: 2048 },
      { src: "/images/halloween/schelet-sicriu.jpg", alt: "Schelet întins pe un sicriu de piatră, între cruci, un corb, dovleci și frunze de toamnă", width: 1536, height: 2048 },
      { src: "/images/halloween/schelete-sarut.jpg", alt: "Două schelete care se sărută pe baloți de paie, cu un trandafir roșu, crizanteme și un dovleac", width: 1536, height: 2048 },
    ],
  },
  { slug: "pietele-de-craciun-din-europa", title: "Piețele de Crăciun din Europa" },
]

const bySlug = (slug: string) => featuredTravels.find((travel) => travel.slug === slug)!

bySlug("locuri-cu-suflet-din-romania").children = [bySlug("viscri")]

export const travels: Travel[] = [
  "santorin",
  "mykonos",
  "dubai",
  "locuri-cu-suflet-din-romania",
  "magie-de-halloween",
  "londra",
  "pietele-de-craciun-din-europa",
].map(bySlug)

export function getTravel(slug: string) {
  return travels.find((travel) => travel.slug === slug)
}

export function getSubTravel(parentSlug: string, slug: string) {
  return getTravel(parentSlug)?.children?.find((travel) => travel.slug === slug)
}

const moreTravelTitles = [
  "Nisa",
  "Eze",
  "Menton",
  "Cannes",
  "Sisi",
  "Matala",
  "Mallorca",
  "Tenerife",
  "Viena",
  "Algarve",
  "Lisabona",
  "Milano",
  "Roma",
  "Pisa",
  "Florența",
  "Amalfi",
  "Berlin",
  "München",
  "Disneyland",
  "Gardaland",
  "Europa Park",
  "Colmar",
  "Loro Parque",
  "Siam Park",
  "Bruxelles",
  "Antwerp",
  "Amsterdam",
  "Locuri cu suflet din România",
  "Paris",
  "Castelele de pe Valea Loirei",
  "Nessebar",
  "Piețele de Crăciun din Europa",
]

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export const travels: Travel[] = [
  ...featuredTravels,
  ...moreTravelTitles.map((title) => ({ slug: slugify(title), title })),
]

export function getTravel(slug: string) {
  return travels.find((travel) => travel.slug === slug)
}
