import Image from "next/image"

type DocumentImage = { src: string; alt: string; width: number; height: number }

const brevet: DocumentImage = {
  src: "/images/documente/brevet-manager-turism.jpeg",
  alt: "Brevet de turism – Manager în activitatea de turism, eliberat de Autoritatea Națională pentru Turism pe numele Anton Liana",
  width: 1446,
  height: 2048,
}

const iataDiploma: DocumentImage = {
  src: "/images/documente/diploma-iata-uftaa.jpg",
  alt: "Diplomă IATA/UFTAA Foundation & EBT Course, Montreal, septembrie 2004, acordată Lianei Anton",
  width: 1494,
  height: 1052,
}

const certificates: DocumentImage[] = [
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

export function IdentificationDocuments({ title }: { title: string }) {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
      <h1 className="text-3xl font-bold uppercase tracking-wide md:text-4xl">{title}</h1>

      <Image
        src={brevet.src}
        alt={brevet.alt}
        width={brevet.width}
        height={brevet.height}
        priority
        sizes="(min-width: 768px) 560px, 100vw"
        className="mx-auto h-auto w-full max-w-xl rounded-md shadow-lg"
      />

      <Image
        src={iataDiploma.src}
        alt={iataDiploma.alt}
        width={iataDiploma.width}
        height={iataDiploma.height}
        sizes="(min-width: 1024px) 960px, 100vw"
        className="h-auto w-full rounded-md shadow-lg"
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {certificates.map((doc) => (
          <li key={doc.src}>
            <Image
              src={doc.src}
              alt={doc.alt}
              width={doc.width}
              height={doc.height}
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 33vw, 100vw"
              className="aspect-[1.41] h-auto w-full rounded-md object-cover shadow-lg"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
