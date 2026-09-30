import { Instagram, Facebook, Twitter, Youtube } from "lucide-react"

const footerLinks = [
  {
    title: "Destinations",
    links: ["Santorini", "Athens", "Mykonos", "Crete", "Rhodes", "Corfu"],
  },
  {
    title: "Experiences",
    links: [
      "Island Hopping",
      "Historical Tours",
      "Culinary Journeys",
      "Adventure",
      "Luxury Retreats",
    ],
  },
  {
    title: "Company",
    links: ["About Us", "Our Team", "Careers", "Press", "Contact"],
  },
  {
    title: "Support",
    links: ["FAQs", "Travel Guide", "Booking Policy", "Privacy", "Terms"],
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold tracking-wide mb-4">
              Greek Steps
            </h3>
            <p className="text-background/70 font-sans text-sm leading-relaxed max-w-xs">
              Crafting unforgettable Greek journeys since 2010. Your gateway to
              authentic Mediterranean experiences.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-medium text-sm uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/60 hover:text-background font-sans text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright */}
            <p className="text-background/50 font-sans text-sm">
              &copy; {new Date().getFullYear()} Greek Steps. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-background/50 hover:text-background transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
