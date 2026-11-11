import { Compass, Sun, UtensilsCrossed, Landmark } from "lucide-react"

const experiences = [
  {
    icon: Landmark,
    title: "Istorie antică",
    description: "Pășește prin 3.000 de ani de istorie la Acropole, Delfi și nenumărate situri arheologice.",
  },
  {
    icon: Sun,
    title: "Din insulă în insulă",
    description: "Navighează între insule spectaculoase, fiecare cu propriul caracter, plaje și golfuri ascunse.",
  },
  {
    icon: UtensilsCrossed,
    title: "Călătorie culinară",
    description: "Bucură-te de bucătărie mediteraneeană proaspătă, vinuri locale și atmosfera tavernelor tradiționale.",
  },
  {
    icon: Compass,
    title: "Aventură și natură",
    description: "Explorează chei impresionante, ape cristaline și peisaje de o frumusețe sălbatică.",
  },
]

export function Experiences() {
  return (
    <section id="experiences" lang="ro" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">Experiențe</p>
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-balance">Aventuri grecești alese cu grijă</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            De la istoria antică la luxul modern, descoperă experiențe care îți vor rămâne în suflet pentru totdeauna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience) => (
            <div
              key={experience.title}
              className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <experience.icon className="w-10 h-10 text-primary mb-6 stroke-[1.5]" />
              <h3 className="text-xl font-medium mb-3">{experience.title}</h3>
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
