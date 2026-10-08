import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { CourseBackdrop } from "@/components/course-backdrop"
import { greekCourses } from "@/lib/greek-courses"

export const metadata: Metadata = {
  title: "Cursuri limba greacă | Greek Steps",
  description:
    "Cursuri de limba greacă pentru copii, tineri, adulți și seniori, de la nivel A0 până la B1, cu un formator autorizat ANC.",
  openGraph: {
    title: "Cursuri limba greacă | Greek Steps",
    description: "Învață greaca și apropie-te și mai mult de locul pe care îl iubești.",
    siteName: "Greek Steps",
    type: "website",
  },
}

export default function CursuriLimbaGreacaPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans text-[var(--course-text)]">
        <CourseBackdrop />
        <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-20 pt-32 lg:px-8">
          <h1 className="text-2xl font-bold text-[var(--culture-heading)] md:text-3xl">Cursuri limba greacă</h1>

          <ul className="flex flex-col gap-8">
            {greekCourses.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/cursuri-limba-greaca/${course.slug}`}
                  className="group flex flex-col gap-1 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--culture-heading)]"
                >
                  <h2
                    lang="el"
                    className="text-xl font-semibold tracking-wide text-[var(--culture-heading)] underline-offset-4 group-hover:underline md:text-2xl"
                  >
                    {course.greek}
                  </h2>
                  {course.lines.map((line) => (
                    <p key={line} className="text-base leading-relaxed">
                      {line}
                    </p>
                  ))}
                </Link>
              </li>
            ))}
          </ul>

          <section aria-labelledby="despre-formator" className="flex flex-col gap-4">
            <h2 id="despre-formator" className="text-xl font-bold text-[var(--culture-heading)] md:text-2xl">
              Despre formator
            </h2>
            <p className="text-base leading-relaxed">
              Cursurile sunt susținute de un formator autorizat ANC, cu pregătire psihopedagogică și certificări
              Ellinomatheia Thessaloniki, Cambridge, English for Tourism, TESOL/TEFL și TEYL.
            </p>
            <p className="text-base font-semibold leading-relaxed">
              Lecțiile combină experiența în predarea limbilor străine cu materiale proprii, exerciții interactive și
              resurse autentice, adaptate vârstei, nivelului și obiectivelor fiecărui cursant.
            </p>

            <Image
              src="/images/carti-greaca.jpeg"
              alt="Manuale de limba greacă: Ελληνικά Τώρα, Ελληνικά για σας, Ταξίδι στην Ελλάδα și un dicționar elen-român"
              width={2048}
              height={1536}
              sizes="(min-width: 896px) 832px, 100vw"
              className="h-auto w-full rounded-lg shadow-md"
            />

            <p className="text-base leading-relaxed">
              <span className="font-semibold">Niveluri disponibile:</span> A0–B1
            </p>
            <p className="text-base leading-relaxed">
              Învață greaca și apropie-te și mai mult de locul pe care îl iubești!
            </p>
            <p className="text-base leading-relaxed">
              <span className="font-semibold">Informații și înscrieri</span> –{" "}
              <a
                href="mailto:contact@greeksteps.ro"
                className="font-semibold text-[var(--culture-heading)] underline underline-offset-4"
              >
                contact@greeksteps.ro
              </a>
            </p>
          </section>

          <section
            aria-labelledby="mini-ghid"
            className="flex flex-col items-start gap-4 rounded-lg border border-[var(--culture-heading)]/20 bg-background/70 p-6 shadow-md md:p-8"
          >
            <h2 id="mini-ghid" className="text-xl font-bold text-[var(--culture-heading)] md:text-2xl">
              Înveți limba greacă la gimnaziu sau la liceu?
            </h2>
            <p className="text-pretty text-base leading-relaxed">
              Am pregătit un mini-ghid gratuit pentru recapitulare: alfabet, articole, pronume, verbe, numere, ora și
              expresii utile.
            </p>
            <p
              lang="el"
              translate="no"
              className="notranslate text-lg font-bold tracking-widest text-[var(--culture-heading)] md:text-xl"
            >
              ΜΑΖΙ ΣΤΑ ΕΛΛΗΝΙΚΑ
            </p>
            <a
              href="/files/mazi-sta-ellinika-mini-ghid.pdf"
              download="MAZI-STA-ELLINIKA-mini-ghid.pdf"
              className="inline-flex items-center rounded-md bg-[var(--culture-heading)] px-6 py-3 text-sm font-bold tracking-wider text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--culture-heading)]"
            >
              DESCARCĂ GRATUIT
            </a>
          </section>
        </div>
      </main>
    </>
  )
}
