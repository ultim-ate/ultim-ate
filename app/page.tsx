import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Destinations } from "@/components/destinations"
import { Experiences } from "@/components/experiences"
import { Featured } from "@/components/featured"
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
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}
