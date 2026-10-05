"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "ro", label: "Română" },
  { code: "en", label: "English" },
  { code: "el", label: "Ελληνικά" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "es", label: "Español" },
]

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: {
      translate: {
        TranslateElement: new (options: Record<string, unknown>, elementId: string) => unknown
      }
    }
  }
}

function readCurrentLanguage() {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/ro\/([a-z-]+)/)
  return match?.[1] ?? "ro"
}

function setTranslateCookie(value: string | null) {
  const hostname = window.location.hostname
  const domains = ["", `; domain=${hostname}`, `; domain=.${hostname}`]
  for (const domain of domains) {
    document.cookie = value
      ? `googtrans=${value}; path=/${domain}`
      : `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
  }
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [current, setCurrent] = useState("ro")
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrent(readCurrentLanguage())
    window.googleTranslateElementInit = () => {
      if (!window.google) return
      new window.google.translate.TranslateElement(
        { pageLanguage: "ro", includedLanguages: "en,el,fr,de,it,es", autoDisplay: false },
        "google_translate_element",
      )
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  const selectLanguage = (code: string) => {
    setOpen(false)
    if (code === current) return
    setTranslateCookie(code === "ro" ? null : `/ro/${code}`)
    window.location.reload()
  }

  const currentLabel = languages.find((l) => l.code === current)?.label ?? "Română"

  return (
    <div ref={containerRef} className={`relative notranslate ${className}`} translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Limba: ${currentLabel}`}
        className="flex items-center gap-3 rounded-xl bg-[#14285c] px-4 py-2 font-sans text-sm font-semibold text-[#ffffff] shadow-md transition-colors hover:bg-[#1b3474]"
      >
        {currentLabel}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Alege limba"
          className="absolute right-0 top-full z-50 mt-2 flex min-w-44 flex-col gap-1 rounded-xl bg-[#14285c] p-2 shadow-xl"
        >
          {languages.map((language) => (
            <li key={language.code} role="option" aria-selected={language.code === current}>
              <button
                type="button"
                onClick={() => selectLanguage(language.code)}
                className={`w-full rounded-lg px-3 py-2 text-left font-sans text-sm font-semibold text-[#ffffff] transition-colors ${
                  language.code === current ? "bg-[#2a5bb0]" : "hover:bg-[#1f3c80]"
                }`}
              >
                {language.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  )
}
