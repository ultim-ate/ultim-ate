import { Compass, Sun, UtensilsCrossed, Landmark } from "lucide-react"

const experiences = [
  {
    icon: Landmark,
    title: "Ancient History",
    description:
      "Walk through 3,000 years of history at the Acropolis, Delphi, and countless archaeological wonders.",
  },
  {
    icon: Sun,
    title: "Island Hopping",
    description:
      "Sail between stunning islands, each with its own unique character, beaches, and hidden coves.",
  },
  {
    icon: UtensilsCrossed,
    title: "Culinary Journey",
    description:
      "Indulge in farm-to-table Mediterranean cuisine, local wines, and traditional taverna experiences.",
  },
  {
    icon: Compass,
    title: "Adventure & Nature",
    description:
      "Hike dramatic gorges, dive crystal-clear waters, and discover landscapes of raw natural beauty.",
  },
]

export function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Curated Greek Adventures
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From ancient history to modern luxury, discover experiences that
            will stay with you forever.
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
              <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
