"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"

const navLinks = [
  { name: "Destinații", href: "#destinations" },
  { name: "Experiențe", href: "#experiences" },
  { name: "Planifică vacanța", href: "#contact" },
  { name: "Călătoriile mele", href: "#intro" },
  { name: "Grecia Altfel", href: "/grecia-altfel" },
  { name: "Cursuri limba greacă", href: "/cursuri-limba-greaca" },
  { name: "Contact", href: "/contact" },
]

const stairWidths = ["w-4", "w-7", "w-10", "w-13", "w-16", "w-20"]

function LogoStairs() {
  return (
    <span className="flex w-20 flex-col items-end gap-px" aria-hidden="true">
      <Heart className="mr-0.5 size-3 fill-(--logo-heart) text-(--logo-heart)" />
      {stairWidths.map((width, i) => (
        <span key={width} className={`h-1 ${width} ${i % 2 === 0 ? "bg-(--logo-navy)" : "bg-(--logo-sky)"}`} />
      ))}
    </span>
  )
}

export function Header({ solid = false }: { solid?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        (solid || isScrolled)
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-1" aria-label="Greek Steps - Language, Culture, Travel">
            <LogoStairs />
            <span className="text-base font-black uppercase leading-none tracking-[0.16em] text-(--logo-navy) [-webkit-text-stroke:0.4px_currentColor]">
              {"Language - Culture - Travel"}
            </span>
          </Link>

          <div className="ml-auto mr-4 lg:mr-6">
            <LanguageSwitcher />
          </div>

          <div className="hidden lg:flex lg:items-center">
            <Button
              variant="outline"
              className={`rounded-none border-2 px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                (solid || isScrolled)
                  ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                  : "border-white text-white hover:bg-white hover:text-foreground"
              }`}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              (solid || isScrolled) ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:mt-4 lg:flex lg:h-12 lg:items-center lg:justify-between lg:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={solid && link.href.startsWith("#") ? `/${link.href}` : link.href}
                className={`whitespace-nowrap text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:opacity-70 xl:text-[15px] ${
                  (solid || isScrolled) ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-md absolute top-20 left-0 right-0 border-t border-border">
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={solid && link.href.startsWith("#") ? `/${link.href}` : link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-semibold uppercase tracking-wide text-foreground py-2 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button className="mt-4 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
