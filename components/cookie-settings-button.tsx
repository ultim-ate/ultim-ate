"use client"

import { openCookiePreferences } from "@/lib/consent"

export function CookieSettingsButton({ className = "" }: { className?: string }) {
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      Setări cookies
    </button>
  )
}
