export type GreekCourse = {
  slug: string
  greek: string
  lines: string[]
  lead: string
  body: string
}

export const greekCourses: GreekCourse[] = [
  {
    slug: "mazi-sta-ellinika",
    greek: "ΜΑΖΙ ΣΤΑ ΕΛΛΗΝΙΚΑ",
    lines: ["Cursuri pentru elevii de gimnaziu și liceu care studiază limba greacă la școală"],
    lead: "Pentru elevii de gimnaziu și liceu care studiază limba greacă la școală și vor să o înțeleagă mai bine.",
    body: "Gramatică explicată mai simplu, vocabular, conversație, înțelegerea textului și exprimare scrisă, cu pregătire adaptată materiei de la școală și nivelului fiecărui elev.",
  },
  {
    slug: "ellinika-apo-tin-archi",
    greek: "ΕΛΛΗΝΙΚΑ ΑΠΟ ΤΗΝ ΑΡΧΗ",
    lines: ["Greacă de la zero pentru copii și tineri"],
    lead: "Pentru cei care vor să facă primii pași în limba greacă.",
    body: "Pornim de la zero și construim pas cu pas: vocabular util, conversație, exerciții interactive și situații din viața reală.",
  },
  {
    slug: "me-agapi-gia-tin-ellada",
    greek: "ΜΕ ΑΓΑΠΗ ΓΙΑ ΤΗΝ ΕΛΛΑΔΑ",
    lines: ["Greacă pentru cei care iubesc Grecia", "Pentru adulți și seniori"],
    lead: "Greaca face parte din povestea familiei tale? Sau poate Grecia este pur și simplu locul în care te simți mereu puțin „acasă”?",
    body: "Descoperă limba greacă într-un cadru relaxat, cu accent pe conversație, vocabular practic și situații reale de zi cu zi.",
  },
]

export function getGreekCourse(slug: string) {
  return greekCourses.find((course) => course.slug === slug)
}
