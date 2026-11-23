"use client"

import { useSyncExternalStore } from "react"

export type Consent = { translate: boolean; updatedAt: string }

const STORAGE_KEY = "gs-cookie-consent"
const CHANGE_EVENT = "gs-consent-change"
export const OPEN_PREFERENCES_EVENT = "gs-open-cookie-preferences"

let cachedRaw: string | null | undefined
let cachedValue: Consent | null = null

function readConsent(): Consent | null {
  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
  if (raw === cachedRaw) return cachedValue
  cachedRaw = raw
  try {
    const parsed = raw ? JSON.parse(raw) : null
    cachedValue = parsed && typeof parsed.translate === "boolean" ? parsed : null
  } catch {
    cachedValue = null
  }
  return cachedValue
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

export function clearTranslateCookies() {
  const hostname = window.location.hostname
  const parts = hostname.split(".")
  const rootDomain = parts.length > 1 ? parts.slice(-2).join(".") : hostname
  const domains = ["", `; domain=${hostname}`, `; domain=.${hostname}`, `; domain=.${rootDomain}`]
  for (const domain of domains) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`
  }
}

export function saveConsent(translate: boolean) {
  const previous = readConsent()
  const value: Consent = { translate, updatedAt: new Date().toISOString() }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {}
  window.dispatchEvent(new Event(CHANGE_EVENT))

  if (!translate) {
    const hadTranslation = /(?:^|;\s*)googtrans=/.test(document.cookie)
    clearTranslateCookies()
    if (previous?.translate || hadTranslation) window.location.reload()
  }
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))
}

/** Returns `undefined` until mounted, `null` when no choice was made yet. */
export function useConsent(): Consent | null | undefined {
  return useSyncExternalStore(subscribe, readConsent, () => undefined)
}
