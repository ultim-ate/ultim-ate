import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"
import { footerPages } from "@/lib/footer-pages"

const footerLinks = [
  { href: "/contact", title: "Contactează-mă" },
  ...footerPages.map((page) => ({ href: `/info/${page.slug}`, title: page.title })),
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
]

export function Footer() {
  return (
    <footer lang="ro" className="bg-foreground py-14 font-sans text-background md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <nav aria-label="Linkuri utile">
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-base text-background/80 transition-colors hover:text-background">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <p className="font-serif text-2xl font-semibold tracking-wide">Greek Steps</p>
            <a
              href="mailto:contact@greeksteps.ro"
              className="flex items-center gap-2 text-base text-background/80 transition-colors hover:text-background"
            >
              <Mail className="size-4" aria-hidden="true" />
              contact@greeksteps.ro
            </a>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-background/70 transition-colors hover:text-background"
                >
                  <social.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-background/20 pt-8 text-center text-sm leading-relaxed text-background/70">
          <p className="text-pretty">
            GREEK STEPS SRL; LICENȚĂ DE TURISM: În curs de licențiere; CUI: 55171636; J2026043697003, Brevet de
            turism nr. 11713/ 04.12.2006
          </p>
          <p>&copy; 2026 Greek Steps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
