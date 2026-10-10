import type { ReactNode } from "react"

function Greek({ children }: { children: ReactNode }) {
  return (
    <strong lang="el" translate="no" className="notranslate font-semibold">
      {children}
    </strong>
  )
}

export function AromeStory() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-background/80 p-6 text-base leading-relaxed text-foreground shadow-md">
      <p className="text-pretty">
        În Grecia, gustul începe adesea înainte ca farfuria să ajungă pe masă. În mirosul de oregano, în uleiul de
        măsline turnat simplu peste pâine, în roșiile coapte de soare și în vinul rece care așteaptă să fie împărțit.
      </p>
      <p className="text-pretty">
        Bucătăria grecească nu este complicată, dar are personalitate. Se bazează pe ingrediente simple, proaspete și
        pe acel <Greek>μεράκι (meráki)</Greek> – grija și pasiunea cu care faci ceva bine. De la salate și meze până
        la pește, brânzeturi, legume coapte și preparate locale, fiecare regiune aduce altă aromă la masă.
      </p>
      <p className="text-pretty">
        Și vinurile spun propria poveste. În Santorini, Assyrtiko are prospețime și note minerale, în Nemea vinurile
        roșii sunt mai bogate și mai expresive, iar pe insule apar vinuri albe parfumate, perfecte pentru serile calde.
      </p>
      <p className="text-pretty">
        La masă, totul se leagă de <Greek>παρέα (paréa)</Greek> – compania celor cu care împarți momentul. Farfuriile
        circulă, conversațiile se lungesc, iar vinul devine parte din atmosferă, nu doar din meniu.
      </p>
      <p className="text-pretty">
        Poate tocmai de aceea gastronomia grecească rămâne atât de ușor în memorie: are gust de soare, de mare și de
        vacanță.
      </p>
      <p className="text-pretty">
        La{" "}
        <strong translate="no" className="notranslate font-semibold">
          Greek Steps
        </strong>
        , credem că unele locuri se descoperă cel mai bine prin ceea ce pun pe masă. Iar aici, fiecare aromă poate fi
        începutul unei alte călătorii.
      </p>
    </div>
  )
}
