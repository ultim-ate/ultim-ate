import Image from "next/image"

export function Cuisine() {
  return (
    <section id="cuisine" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">
              Culinary Heritage
            </p>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Taste the Mediterranean
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Greek cuisine is a celebration of simplicity and quality
              ingredients. From the freshest seafood to locally pressed olive
              oils, every meal tells the story of this sun-drenched land and its
              ancient traditions.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Olive Oil", value: "World&apos;s Finest" },
                { label: "Wine Regions", value: "300+ Indigenous Varieties" },
                { label: "Fresh Seafood", value: "Daily Caught" },
                { label: "Cheese Types", value: "70+ Regional" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-primary/30 pl-4">
                  <p className="text-sm font-sans text-muted-foreground uppercase tracking-wide mb-1">
                    {stat.label}
                  </p>
                  <p className="text-lg font-medium">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src="/images/greek-food.jpg"
                alt="Traditional Greek mezze spread"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
