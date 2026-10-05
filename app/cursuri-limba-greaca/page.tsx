import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"

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

const courses = [
  { greek: "ΜΑΖΙ ΣΤΑ ΕΛΛΗΝΙΚΑ", lines: ["Împreună în limba greacă"] },
  { greek: "ΕΛΛΗΝΙΚΑ ΑΠΟ ΤΗΝ ΑΡΧΗ", lines: ["Greacă de la zero pentru copii și tineri"] },
  {
    greek: "ΜΕ ΑΓΑΠΗ ΓΙΑ ΤΗΝ ΕΛΛΑΔΑ",
    lines: ["Greacă pentru cei care iubesc Grecia", "Pentru adulți și seniori"],
  },
]

export default function CursuriLimbaGreacaPage() {
  return (
    <>
      <Header solid />
      <main lang="ro" className="relative isolate min-h-screen font-sans">
        <Image src="/images/ionian-sea.png" alt="" fill priority sizes="100vw" className="-z-10 object-cover" />
        <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-20 pt-32 lg:px-8">
          <h1 className="text-2xl font-bold text-[var(--culture-heading)] md:text-3xl">Cursuri limba greacă</h1>

          <ul className="flex flex-col gap-8">
            {courses.map((course) => (
              <li key={course.greek} className="flex flex-col gap-1">
                <h2 lang="el" className="text-xl font-semibold tracking-wide text-[var(--culture-heading)] md:text-2xl">
                  {course.greek}
                </h2>
                {course.lines.map((line) => (
                  <p key={line} className="text-base leading-relaxed text-foreground">
                    {line}
                  </p>
                ))}
              </li>
            ))}
          </ul>

          <section aria-labelledby="despre-formator" className="flex flex-col gap-3">
            <h2 id="despre-formator" className="text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">
              Despre formator
            </h2>
            <p className="text-base leading-relaxed text-foreground">
              Cursurile sunt susținute de un formator autorizat ANC, cu pregătire psihopedagogică și certificări
              Ellinomatheia Thessaloniki, Cambridge, English for Tourism, TESOL/TEFL și TEYL.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              Lecțiile combină experiența în predarea limbilor străine cu materiale proprii, exerciții interactive și
              resurse autentice, adaptate vârstei, nivelului și obiectivelor fiecărui cursant.
            </p>
            <p className="text-base leading-relaxed text-foreground">
              <span className="font-semibold">Niveluri disponibile:</span> A0–B1
            </p>
            <p className="text-base leading-relaxed text-foreground">
              Învață greaca și apropie-te și mai mult de locul pe care îl iubești!
            </p>
          </section>
        </div>
      </main>
    </>
  )
}
