import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"

const GREEK_RUN = /([\u0370-\u03FF\u1F00-\u1FFF][\u0370-\u03FF\u1F00-\u1FFF\s.,!;:–-]*[\u0370-\u03FF\u1F00-\u1FFF!])/g

function emphasizeGreek(text: string) {
  return text.split(GREEK_RUN).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} lang="el" className="font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

export function CultureArticle({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans">
        <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[var(--contact-surface)]/45" />
        <article className="mx-auto flex max-w-4xl flex-col gap-6 px-6 pb-20 pt-40 lg:px-8 lg:pt-52">
          <Link
            href="/grecia-altfel"
            className="text-sm font-semibold text-[var(--culture-heading)] underline-offset-4 hover:underline"
          >
            ← Grecia Altfel
          </Link>
          <h1 className="text-balance text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">
            {emphasizeGreek(title)}
          </h1>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-pretty text-lg leading-relaxed">
              {emphasizeGreek(paragraph)}
            </p>
          ))}
        </article>
      </main>
    </>
  )
}
