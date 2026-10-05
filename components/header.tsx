"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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
        <div className="flex h-20 items-center justify-between lg:h-16">
          {/* Logo */}
          <Link
            href="/"
            className={`flex flex-col items-start gap-1 transition-colors duration-300 ${
              (solid || isScrolled) ? "text-foreground" : "text-white"
            }`}
          >
            <span className="flex items-end gap-2">
              <span className="text-2xl font-semibold leading-none tracking-wide">Greek Steps</span>
              <img src="/images/greek-steps-icon.png" alt="" aria-hidden="true" className="h-7 w-auto" />
            </span>
            <span className="flex w-full items-center gap-2">
              <span className="h-px flex-1 bg-sky-400" aria-hidden="true" />
              <span className="text-[10px] font-medium uppercase leading-none tracking-[0.25em]">
                {"Language - Culture - Travel"}
              </span>
              <span className="h-px flex-1 bg-sky-400" aria-hidden="true" />
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
        <ul className="hidden lg:flex lg:h-12 lg:items-center lg:justify-between lg:gap-6">
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
