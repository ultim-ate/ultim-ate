import Image from "next/image"

export function Featured() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/meteora.jpg"
                alt="Meteora monasteries perched on rock pillars"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 -z-10 hidden lg:block" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Featured Destination
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Meteora: Monasteries in the Sky
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Rising dramatically from the Thessalian plain, the towering rock
              formations of Meteora host ancient monasteries that seem to float
              among the clouds. This UNESCO World Heritage site offers a
              spiritual experience unlike any other, where Byzantine art meets
              natural wonder.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Six active monasteries open for visitors",
                "Breathtaking sunrise and sunset viewpoints",
                "Rich Byzantine history and architecture",
                "Hiking trails with panoramic vistas",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-foreground font-sans">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground font-sans text-sm font-medium tracking-wide hover:bg-primary/90 transition-colors"
            >
              Plan Your Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
