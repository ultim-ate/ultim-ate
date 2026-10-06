"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

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

  return (
    <div
      role="group"
      aria-label="Alege limba"
      className={`notranslate flex items-center gap-1 rounded-xl bg-[#14285c] p-1 shadow-md ${className}`}
      translate="no"
    >
      {languages.map((language) => {
        const active = language.code === current
        return (
          <button
            key={language.code}
            type="button"
            onClick={() => selectLanguage(language.code)}
            aria-pressed={active}
            aria-label={language.label}
            title={language.label}
            className={`rounded-lg px-3 py-1.5 font-sans text-sm font-semibold text-[#ffffff] transition-colors ${
              active ? "bg-[#2a5bb0]" : "hover:bg-[#1f3c80]"
            }`}
          >
            {language.short}
          </button>
        )
      })}

      <div id="google_translate_element" className="hidden" aria-hidden="true" />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  )
}
