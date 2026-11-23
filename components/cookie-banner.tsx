"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import { OPEN_PREFERENCES_EVENT, saveConsent, useConsent } from "@/lib/consent"

const primaryButton =
  "rounded-lg bg-[#14285c] px-5 py-2.5 font-sans text-sm font-semibold text-[#ffffff] transition-colors hover:bg-[#1f3c80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a5bb0]"
const secondaryButton =
  "rounded-lg border border-[#14285c] px-5 py-2.5 font-sans text-sm font-semibold text-[#14285c] transition-colors hover:bg-[#14285c]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a5bb0]"

export function CookieBanner() {
  const consent = useConsent()
  const [reopened, setReopened] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [translateChoice, setTranslateChoice] = useState(false)
  const headingId = useId()
  const translateId = useId()

  useEffect(() => {
    const open = () => {
      setTranslateChoice(Boolean(consent?.translate))
      setShowPreferences(true)
      setReopened(true)
    }
    window.addEventListener(OPEN_PREFERENCES_EVENT, open)
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, open)
  }, [consent])

  if (consent === undefined) return null
  if (consent !== null && !reopened) return null

  const decide = (translate: boolean) => {
    saveConsent(translate)
    setReopened(false)
    setShowPreferences(false)
  }

  return (
    <section
      lang="ro"
      role="dialog"
      aria-labelledby={headingId}
      className="notranslate fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-2xl rounded-2xl border border-[#14285c]/15 bg-[#ffffff] p-6 font-sans text-[#14285c] shadow-2xl md:bottom-6"
      translate="no"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h2 id={headingId} className="font-serif text-2xl font-semibold">
            Folosim cookie-uri
          </h2>
          <p className="text-sm leading-relaxed text-[#14285c]/80 text-pretty">
            Folosim doar cookie-uri strict necesare pentru funcționarea site-ului. Cu acordul tău, încărcăm și
            Google Translate pentru traducerea paginilor în engleză și greacă. Detalii în{" "}
            <Link href="/info/politica-de-cookies" className="font-semibold underline underline-offset-2">
              Politica de cookies
            </Link>
            .
          </p>
        </div>

        {showPreferences && (
          <div className="flex flex-col gap-3 rounded-xl bg-[#14285c]/5 p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold">Strict necesare</p>
                <p className="text-sm leading-relaxed text-[#14285c]/75">
                  Rețin alegerea ta privind cookie-urile. Nu pot fi dezactivate.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#14285c]/10 px-3 py-1 text-xs font-semibold">
                Mereu active
              </span>
            </div>
            <div className="flex items-start justify-between gap-4 border-t border-[#14285c]/10 pt-3">
              <label htmlFor={translateId} className="flex cursor-pointer flex-col gap-1">
                <span className="text-sm font-semibold">Traducere (Google Translate)</span>
                <span className="text-sm leading-relaxed text-[#14285c]/75">
                  Permite schimbarea limbii site-ului. Google poate seta cookie-uri proprii.
                </span>
              </label>
              <input
                id={translateId}
                type="checkbox"
                role="switch"
                checked={translateChoice}
                onChange={(event) => setTranslateChoice(event.target.checked)}
                className="mt-1 size-5 shrink-0 cursor-pointer accent-[#2a5bb0]"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          {showPreferences ? (
            <button type="button" onClick={() => decide(translateChoice)} className={primaryButton}>
              Salvează preferințele
            </button>
          ) : (
            <>
              <button type="button" onClick={() => setShowPreferences(true)} className={secondaryButton}>
                Preferințe
              </button>
              <button type="button" onClick={() => decide(false)} className={secondaryButton}>
                Respinge
              </button>
              <button type="button" onClick={() => decide(true)} className={primaryButton}>
                Acceptă
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
