import Image from "next/image"

type DocumentImage = { src: string; alt: string; width: number; height: number }

const brevet: DocumentImage = {
  src: "/images/documente/brevet-manager-turism.jpeg",
  alt: "Brevet de turism – Manager în activitatea de turism, eliberat de Autoritatea Națională pentru Turism pe numele Anton Liana",
  width: 1446,
  height: 2048,
}

const certificates: DocumentImage[] = [
  {
    src: "/images/documente/diploma-iata-uftaa.jpg",
    alt: "Diplomă IATA/UFTAA Foundation & EBT Course, Montreal, septembrie 2004, acordată Lianei Anton",
    width: 1494,
    height: 1052,
  },
  {
    src: "/images/documente/certificat-iata-bsp.jpeg",
    alt: "Certificat IATA BSP Training, IDFS Romania, mai 2004",
    width: 2048,
    height: 1457,
  },
  {
    src: "/images/documente/diploma-amadeus.jpeg",
    alt: "Diplomă Amadeus Basic Functionalities Course, septembrie 2006",
    width: 2048,
    height: 1446,
  },
  {
    src: "/images/documente/certificat-worldspan.jpeg",
    alt: "Certificat Worldspan I Basic, octombrie 2005",
    width: 2048,
    height: 1445,
  },
]

function DocumentCard({ doc, priority = false }: { doc: DocumentImage; priority?: boolean }) {
  return (
    <a
      href={doc.src}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-[1.02]"
    >
      <Image
        src={doc.src}
        alt={doc.alt}
        width={doc.width}
        height={doc.height}
        priority={priority}
        sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
        className="h-auto w-full"
      />
      <span className="sr-only">(deschide la dimensiune completă)</span>
    </a>
  )
}

export function IdentificationDocuments({ title }: { title: string }) {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
      <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{title}</h1>

      <div className="mx-auto w-full sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-4.5rem)/4)]">
        <DocumentCard doc={brevet} priority />
      </div>

      <ul className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {certificates.map((doc) => (
          <li key={doc.src}>
            <DocumentCard doc={doc} />
          </li>
        ))}
      </ul>
    </div>
  )
}
