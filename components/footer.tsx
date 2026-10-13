import Link from "next/link"
import { Facebook, Instagram, Lock, Mail } from "lucide-react"
import { externalFooterLinks, footerPages } from "@/lib/footer-pages"

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
]

const linkClass = "text-sm text-background/80 transition-colors hover:text-background"

export function Footer() {
  return (
    <footer lang="ro" className="bg-foreground py-14 font-sans text-background md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 lg:max-w-2xl">
            <nav aria-label="Informații legale">
              <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {footerPages.map((page) => (
                  <li key={page.slug} className="flex items-center gap-3">
                    <Link href={`/info/${page.slug}`} className={linkClass}>
                      {page.title}
                    </Link>
                    <span aria-hidden="true" className="text-background/40">
                      |
                    </span>
                  </li>
                ))}
                {externalFooterLinks.map((link, index) => (
                  <li key={link.href} className="flex items-center gap-3">
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                      {link.title}
                    </a>
                    {index < externalFooterLinks.length - 1 && (
                      <span aria-hidden="true" className="text-background/40">
                        |
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="https://netopia-payments.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-3 rounded-md border border-background/30 px-4 py-2 transition-colors hover:border-background/60"
            >
              <Lock className="size-4" aria-hidden="true" />
              <span className="flex flex-col leading-tight">
                <span className="text-xs text-background/70">Plăți securizate prin</span>
                <span className="text-sm font-bold tracking-wide">NETOPIA Payments</span>
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-4 lg:items-end lg:text-right">
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
