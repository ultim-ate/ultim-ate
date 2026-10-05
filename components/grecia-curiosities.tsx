import { readFileSync } from "node:fs"
import { join } from "node:path"

export function GreciaCuriosities() {
  const text = readFileSync(join(process.cwd(), "content/grecia-altfel.txt"), "utf8")
  const entries = text.trim().split(/\n\s*\n(?=\d+\. )/)

  return (
    <section id="curiozitati" aria-labelledby="curiosities-title" className="scroll-mt-28">
      <h1 id="curiosities-title" className="mb-10 text-balance text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">
        7 Curiozități cu parfum elen
      </h1>
      <div className="flex flex-col gap-10">
        {entries.map((entry) => {
          const [title, ...lines] = entry.split("\n")
          return (
            <article key={title} className="flex flex-col gap-4">
              <h3 className="text-pretty text-lg font-bold text-[var(--culture-heading)]">{title}</h3>
              {lines.filter((line) => line.trim()).map((line, index) => (
                <p key={index} className="text-base leading-relaxed text-foreground">{line}</p>
              ))}
            </article>
          )
        })}
      </div>
    </section>
  )
}
