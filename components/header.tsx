"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Destinations", href: "#destinations" },
  { name: "Experiences", href: "#experiences" },
  { name: "Cuisine", href: "#cuisine" },
  { name: "Plan Your Trip", href: "#contact" },
]

export function Header() {
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
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              Greek Steps
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="outline"
              className={`rounded-none border-2 px-6 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                isScrolled
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
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md absolute top-20 left-0 right-0 border-t border-border">
            <div className="flex flex-col py-6 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground py-2 hover:text-primary transition-colors"
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
