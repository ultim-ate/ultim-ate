const phrases = [
  "Καλημέρα! (Kaliméra!) – Bună dimineața / Bună ziua",
  "Καλησπέρα! (Kalispéra!) – Bună seara",
  "Γεια σου! (Ya sou!) – Salut! – unei persoane",
  "Γεια σας! (Ya sas!) – Bună! / Bună ziua! – politicos sau către mai multe persoane",
  "Τι κάνεις; (Ti kánis?) – Ce mai faci?",
  "Ευχαριστώ! (Efcharistó!) – Mulțumesc!",
  "Παρακαλώ! (Parakaló!) – Te rog / Cu plăcere",
  "Πάμε! (Páme!) – Hai! / Să mergem!",
  "Καλή όρεξη! (Kalí órexi!) – Poftă bună!",
  "Στην υγειά μας! (Stin iyá mas!) – Noroc! / În sănătatea noastră!",
  "Τα λέμε! (Ta léme!) – Ne mai vedem! / Mai vorbim!",
  "Καλό ταξίδι! (Kaló taxídi!) – Călătorie plăcută!",
  "Χρόνια πολλά! (Chrónia pollá!) – La mulți ani!",
  "Όπα! (Ópa!) – o exclamație de bucurie, surpriză sau entuziasm, pe care o vei auzi în multe contexte.",
]

export function GreekTravelPhrases() {
  return (
    <article>
      <h1 className="mb-10 text-balance text-xl font-extrabold text-[var(--culture-heading)] md:text-2xl">
        Greacă pentru călătorie
      </h1>
      <ul className="flex flex-col gap-4">
        {phrases.map((phrase) => (
          <li key={phrase} lang="el" className="text-base leading-relaxed text-foreground">
            {phrase}
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col gap-4">
        <p className="text-base leading-relaxed text-foreground">
          La <strong className="font-semibold">Greek Steps</strong>, ne place să credem că o călătorie începe înainte de plecare. Uneori, câteva cuvinte în limba locului sunt suficiente pentru a deschide o conversație, a primi un zâmbet și a te simți puțin mai aproape de Grecia.
        </p>
        <p lang="el" className="text-base leading-relaxed text-foreground">Έλα στην Ελλάδα!</p>
      </div>
    </article>
  )
}
