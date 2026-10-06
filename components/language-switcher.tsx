"use client"

import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "ro", short: "RO", label: "Română" },
  { code: "en", short: "EN", label: "English" },
  { code: "el", short: "EL", label: "Ελληνικά" },
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
    if (!open) return
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", handlePointerDown)
    return () => document.removeEventListener("pointerdown", handlePointerDown)
  }, [open])

  useEffect(() => {
    setCurrent(readCurrentLanguage())
    window.googleTranslateElementInit = () => {
      if (!window.google) return
      new window.google.translate.TranslateElement(
        { pageLanguage: "ro", includedLanguages: "en,el", autoDisplay: false },
        "google_translate_element",
      )
    }
  }, [])

  const selectLanguage = (code: string) => {
    if (code === current) return
    setTranslateCookie(code === "ro" ? null : `/ro/${code}`)
    window.location.reload()
  }

  const active = languages.find((language) => language.code === current) ?? languages[0]
  const others = languages.filter((language) => language.code !== active.code)

  return (
    <div
      ref={containerRef}
      className={`notranslate relative ${className}`}
      translate="no"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false)
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Limba: ${active.label}`}
        className="flex items-center gap-1.5 rounded-xl bg-[#14285c] px-3 py-2 font-sans text-sm font-semibold text-[#ffffff] shadow-md transition-colors hover:bg-[#1f3c80]"
      >
        {active.short}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Alege limba"
          className="absolute right-0 top-full z-50 mt-2 flex min-w-full flex-col gap-1 rounded-xl bg-[#14285c] p-1 shadow-lg"
        >
          {others.map((language) => (
            <li key={language.code} role="option" aria-selected={false}>
              <button
                type="button"
                onClick={() => selectLanguage(language.code)}
                title={language.label}
                className="w-full rounded-lg px-3 py-1.5 text-left font-sans text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#2a5bb0]"
              >
                {language.short}
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
