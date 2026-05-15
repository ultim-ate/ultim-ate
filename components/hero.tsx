"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-santorini.jpg"
          alt="Santorini sunset view with iconic blue domes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase font-sans">
            Discover the Magic of
          </p>
        </div>
        
        <h1
          className={`text-6xl md:text-8xl lg:text-9xl font-light tracking-tight mb-6 transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="block text-balance">Greece</span>
        </h1>

        <p
          className={`max-w-2xl text-lg md:text-xl font-light leading-relaxed text-white/90 mb-10 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Where ancient history meets breathtaking beauty. Experience the azure
          waters, timeless architecture, and warm hospitality of the
          Mediterranean.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#destinations"
            className="px-10 py-4 bg-white text-foreground font-sans text-sm font-medium tracking-wide hover:bg-white/90 transition-colors"
          >
            Explore Destinations
          </a>
          <a
            href="#experiences"
            className="px-10 py-4 border-2 border-white text-white font-sans text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
          >
            View Experiences
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#intro" aria-label="Scroll to content">
          <ChevronDown className="w-8 h-8 text-white/80" />
        </a>
      </div>
    </section>
  )
}
