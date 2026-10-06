"use server"

export type ContactState = {
  status: "idle" | "success" | "error"
  message?: string
  errors?: Partial<Record<"nume" | "prenume" | "telefon" | "email" | "mesaj", string>>
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[0-9\s().-]{7,20}$/

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const nume = String(formData.get("nume") ?? "").trim()
  const prenume = String(formData.get("prenume") ?? "").trim()
  const telefon = String(formData.get("telefon") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const mesaj = String(formData.get("mesaj") ?? "").trim()

  const errors: ContactState["errors"] = {}
  if (!nume || nume.length > 80) errors.nume = "Te rog completează numele."
  if (!prenume || prenume.length > 80) errors.prenume = "Te rog completează prenumele."
  if (!PHONE_PATTERN.test(telefon)) errors.telefon = "Introdu un număr de telefon valid."
  if (!EMAIL_PATTERN.test(email) || email.length > 160) errors.email = "Introdu o adresă de email validă."
  if (!mesaj || mesaj.length > 2000) errors.mesaj = "Te rog scrie un mesaj (maxim 2000 de caractere)."

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Verifică câmpurile marcate.", errors }
  }

  return {
    status: "success",
    message: `Mulțumesc, ${prenume}! Mesajul tău a fost trimis și îți voi răspunde cât de curând.`,
  }
}
