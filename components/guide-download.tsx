import Image from "next/image"
import type { ReactNode } from "react"

type GuideDownloadProps = {
  id: string
  heading: string
  description: ReactNode
  greekTitle: string
  cover: { src: string; width: number; height: number; alt: string }
  file: string
  downloadName: string
}

export function GuideDownload({ id, heading, description, greekTitle, cover, file, downloadName }: GuideDownloadProps) {
  return (
    <section
      aria-labelledby={id}
      className="flex flex-col gap-6 rounded-lg border border-[var(--culture-heading)]/20 bg-background/70 p-6 shadow-md sm:flex-row sm:items-center md:p-8"
    >
      <a
        href={file}
        download={downloadName}
        className="group block w-40 shrink-0 self-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--culture-heading)] sm:w-48 sm:self-auto"
        aria-label={`Descarcă ${greekTitle} (PDF)`}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          sizes="192px"
          className="h-auto w-full rounded-sm shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-1deg]"
        />
      </a>

      <div className="flex flex-col items-start gap-4">
        <h2 id={id} className="text-xl font-bold text-[var(--culture-heading)] md:text-2xl">
          {heading}
        </h2>
        <p className="text-pretty text-base leading-relaxed">{description}</p>
        <p
          lang="el"
          translate="no"
          className="notranslate text-lg font-bold tracking-widest text-[var(--culture-heading)] md:text-xl"
        >
          {greekTitle}
        </p>
        <a
          href={file}
          download={downloadName}
          className="inline-flex items-center rounded-md bg-[var(--culture-heading)] px-6 py-3 text-sm font-bold tracking-wider text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--culture-heading)]"
        >
          DESCARCĂ GRATUIT
        </a>
      </div>
    </section>
  )
}
