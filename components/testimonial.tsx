"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Greece exceeded every expectation. The history, the food, the people—it felt like stepping into a dream I never wanted to wake from.",
    author: "Sarah Mitchell",
    location: "New York, USA",
  },
  {
    quote:
      "Santorini at sunset is something everyone should experience at least once. The colors, the calm, the magic—it's indescribable.",
    author: "James Chen",
    location: "London, UK",
  },
  {
    quote:
      "From the Acropolis to the beaches of Crete, every day brought new wonders. Greece has captured my heart forever.",
    author: "Elena Rodriguez",
    location: "Barcelona, Spain",
  },
]

export function Testimonial() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % testimonials.length)
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Quote className="w-12 h-12 mx-auto mb-8 opacity-50" />
        
        <div className="relative min-h-[200px] flex items-center justify-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed">
            &ldquo;{testimonials[current].quote}&rdquo;
          </blockquote>
        </div>

        <div className="mt-8">
          <p className="text-lg font-medium">{testimonials[current].author}</p>
          <p className="text-sm opacity-70 font-sans">
            {testimonials[current].location}
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current
                    ? "bg-primary-foreground w-6"
                    : "bg-primary-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
