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
                alt="Mănăstirile Meteora construite pe vârfurile stâncilor"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-balance">
              Meteora – Grecia între cer și pământ
            </h2>
            <div className="flex flex-col gap-4 text-muted-foreground text-base leading-relaxed mb-10 text-pretty">
              <p>
                Există locuri în Grecia care impresionează prin mare și plaje,
                dar Meteora impresionează prin ceva cu totul diferit: stânci
                uriașe care se ridică spre cer, iar deasupra lor, mănăstiri
                construite parcă într-un loc imposibil.
              </p>
              <p>
                În centrul Greciei, formațiunile stâncoase ale Meteorei creează
                un peisaj spectaculos. Pe vârfurile lor se află mănăstiri
                ortodoxe vechi de secole, care par suspendate între cer și
                pământ. De aici vine și numele <em lang="el" translate="no" className="notranslate">Μετέωρα</em>,
                asociat cu ideea de „suspendat în aer”.
              </p>
              <p>
                Printre cele mai cunoscute se numără Mănăstirea Megalo Meteoro,
                cea mai mare dintre mănăstirile complexului.
              </p>
              <p>
                Meteora nu este doar un loc de vizitat, ci unul de admirat în
                liniște. Pe măsură ce urci printre stânci, peisajul se schimbă,
                iar priveliștea asupra văilor și munților devine tot mai
                impresionantă. Este un loc în care{" "}
                <em lang="el" translate="no" className="notranslate">ηρεμία</em> (iremía) – liniștea – pare să facă
                parte din peisaj.
              </p>
              <p>
                La Greek Steps credem că a descoperi Grecia înseamnă și a-i
                înțelege poveștile. Iar Meteora este una dintre acele experiențe
                care îți arată că Grecia înseamnă mult mai mult decât insule și
                plaje: înseamnă istorie, tradiție și locuri care au rămas în
                memoria oamenilor timp de secole.
              </p>
            </div>
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
