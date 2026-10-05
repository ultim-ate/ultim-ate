import { readFileSync } from "node:fs"
import { join } from "node:path"

export function GreciaTraditions() {
  const lines = readFileSync(join(process.cwd(), "content/grecia-traditions.txt"), "utf8").split(/\r?\n/).filter((line) => line.trim())
  const headings = new Set([
    "La nuntă: στεφανά – coroanele mirilor",
    "La botez: prima șuviță tăiată",
    "Paștele în Corfu: vase aruncate de la balcoane",
    "De Anul Nou: moneda ascunsă în prăjitură",
    "Rodie spartă pentru noroc",
    "Panigyria – când satul întreg sărbătorește",
    "Și câteva tradiții mai neobișnuite",
  ])
  return (
    <article>
      <h1 className="mb-10 text-balance text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">Tradiții care merg mai departe</h1>
      <div className="flex flex-col gap-4">
        {lines.map((line, index) => headings.has(line.trim()) ? (
          <h2 key={index} className="pt-6 text-pretty text-lg font-bold text-[var(--culture-heading)] first:pt-0">{line}</h2>
        ) : (
          <p key={index} className="text-base leading-relaxed text-foreground">{line}</p>
        ))}
      </div>
    </article>
  )
}
