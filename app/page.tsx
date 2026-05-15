import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Destinations } from "@/components/destinations"
import { Experiences } from "@/components/experiences"
import { Featured } from "@/components/featured"
import { Cuisine } from "@/components/cuisine"
import { Testimonial } from "@/components/testimonial"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Intro />
      <Destinations />
      <Experiences />
      <Featured />
      <Cuisine />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
