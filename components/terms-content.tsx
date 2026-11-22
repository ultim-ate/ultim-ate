type Block = string | string[]

type Section = {
  title: string
  blocks: Block[]
}

const companyDetails = [
  "GREEK STEPS S.R.L.",
  "Nr. Registrul Comerțului: J2026043697003",
  "CUI: 55171636",
  "Sediul social: București, Sector 3, Str. Baba Novac nr. 8A, bl. A, sc. A, et. 11–12, ap. 1103, camera 1",
  "E-mail: contact@greeksteps.ro",
  "Telefon: 0726803296",
]

const sections: Section[] = [
  {
    title: "1. Informații despre operatorul site-ului",
    blocks: [
      "Site-ul greeksteps.ro este administrat de:",
      companyDetails.join("\n"),
      "GREEK STEPS S.R.L. are ca activitate principală CAEN 7911 – Activități ale agențiilor turistice și se află în proces de obținere a licenței de turism pentru desfășurarea activității de agenție de turism intermediară, cu activitate exclusiv online.",
      "Până la obținerea licenței de turism, Greek Steps nu comercializează în nume propriu servicii sau pachete turistice pentru care legislația impune deținerea unei licențe de turism.",
      "Activitatea se desfășoară exclusiv online și/sau în afara sediului social, în funcție de natura serviciului. La sediul social nu se desfășoară activități sau relații cu publicul.",
      "După obținerea licenței de turism, prezentele Termeni și Condiții vor fi actualizate cu datele licenței și condițiile aplicabile serviciilor turistice oferite de Greek Steps.",
    ],
  },
  {
    title: "2. Despre Greek Steps",
    blocks: [
      "Greek Steps este un proiect dedicat limbilor străine, culturii și călătoriilor, cu o atenție specială acordată României și Greciei.",
      "Prin intermediul site-ului pot fi prezentate:",
      [
        "cursuri de limba greacă și limba engleză;",
        "pregătire lingvistică și sprijin educațional;",
        "ateliere educaționale și culturale;",
        "articole și informații despre destinații;",
        "idei și inspirație pentru călătorii;",
        "recomandări privind cazarea, activitățile și alte servicii oferite de terți;",
        "proiecte și colaborări B2B;",
        "alte activități compatibile cu obiectul de activitate al societății.",
      ],
      "Conținutul și serviciile prezentate pe site pot fi modificate sau completate în timp.",
    ],
  },
  {
    title: "3. Servicii educaționale",
    blocks: [
      "Greek Steps poate furniza direct cursuri, ședințe individuale, activități de grup și ateliere educaționale sau culturale.",
      "Înainte de înscriere, clientului îi vor fi comunicate informațiile relevante privind:",
      [
        "tipul cursului sau activității;",
        "nivelul și grupa de vârstă;",
        "formatul online sau fizic;",
        "durata și frecvența;",
        "programul;",
        "prețul;",
        "modalitatea de plată;",
        "eventualele condiții speciale de participare.",
      ],
      "Înscrierea este considerată confirmată după acceptarea condițiilor comunicate și, atunci când este cazul, după efectuarea plății.",
      "Pentru participanții minori, înscrierea și comunicarea privind serviciile se realizează prin părinte sau reprezentant legal.",
    ],
  },
  {
    title: "4. Prețuri și modalități de plată",
    blocks: [
      "Prețurile serviciilor oferite direct de Greek Steps sunt cele afișate pe site sau comunicate clientului înainte de confirmarea serviciului.",
      "În prezent, plata serviciilor furnizate direct de Greek Steps se poate efectua prin transfer bancar, pe baza datelor comunicate clientului și, după caz, a facturii fiscale.",
      "Greek Steps nu solicită transmiterea datelor complete ale cardului bancar prin e-mail sau prin formularele disponibile pe site.",
      "Alte modalități de plată pot fi introduse ulterior, caz în care informațiile disponibile pe site și prezentele Termeni și Condiții vor fi actualizate.",
    ],
  },
  {
    title: "5. Anularea și reprogramarea activităților educaționale",
    blocks: [
      "Condițiile de anulare sau reprogramare pot diferi în funcție de tipul cursului, atelierului sau programului ales și vor fi comunicate înainte de înscriere.",
      "Dacă o activitate achitată este anulată de Greek Steps și nu poate fi reprogramată de comun acord, suma achitată pentru serviciul neprestat va fi restituită.",
      "Absența participantului de la o ședință sau activitate deja programată nu conferă automat dreptul la rambursare, dacă au fost comunicate în prealabil condițiile de anulare și reprogramare.",
    ],
  },
  {
    title: "6. Dreptul de retragere",
    blocks: [
      "Pentru contractele încheiate la distanță cu consumatorii se aplică drepturile prevăzute de legislația privind protecția consumatorilor.",
      "Atunci când legea prevede acest drept, consumatorul poate solicita retragerea din contract în termen de 14 zile, fără a fi necesară justificarea deciziei.",
      "Solicitarea poate fi transmisă printr-o declarație clară la adresa: contact@greeksteps.ro",
      "Dacă prestarea serviciului începe, la solicitarea expresă a clientului, înainte de expirarea perioadei de retragere, se aplică prevederile legale corespunzătoare serviciilor deja prestate.",
      "În cazul în care un serviciu a fost prestat integral, cu acordul expres al consumatorului și după informarea acestuia cu privire la pierderea dreptului de retragere în condițiile prevăzute de lege, dreptul de retragere poate înceta.",
      "Prevederile obligatorii privind protecția consumatorilor prevalează asupra oricăror dispoziții contrare din prezentul document.",
    ],
  },
  {
    title: "7. Conținut turistic și servicii oferite de parteneri externi",
    blocks: [
      "Până la obținerea licenței de turism, secțiunile dedicate călătoriilor au în principal caracter informativ, editorial, inspirațional și de promovare.",
      "Greek Steps poate prezenta:",
      [
        "destinații;",
        "hoteluri și alte unități de cazare;",
        "excursii și activități;",
        "atracții turistice;",
        "servicii de transport;",
        "experiențe culturale;",
        "alte servicii oferite de furnizori sau parteneri externi.",
      ],
      "Atunci când utilizatorul este direcționat către un furnizor sau partener extern, iar rezervarea și plata se realizează direct către acesta, contractul privind serviciul respectiv se încheie între utilizator și furnizorul extern.",
      "În aceste cazuri, condițiile de rezervare, plată, modificare, anulare și rambursare sunt stabilite de furnizorul respectiv.",
      "Utilizatorul este responsabil să consulte condițiile comerciale ale furnizorului înainte de efectuarea unei rezervări sau plăți.",
      "Pentru anumite colaborări comerciale, Greek Steps poate primi un comision sau o remunerație din partea partenerului pentru recomandările sau clienții proveniți prin intermediul site-ului.",
      "Atunci când acest lucru este relevant pentru utilizator, relația comercială va fi indicată în mod transparent.",
      "Serviciile turistice pentru care legea impune deținerea unei licențe vor fi comercializate direct de Greek Steps numai după îndeplinirea cerințelor legale aplicabile.",
    ],
  },
  {
    title: "8. Linkuri către site-uri externe",
    blocks: [
      "Site-ul poate conține linkuri către alte site-uri, platforme sau servicii aparținând unor terți.",
      "Greek Steps nu controlează și nu poate garanta:",
      [
        "disponibilitatea site-urilor externe;",
        "corectitudinea permanentă a informațiilor acestora;",
        "prețurile practicate;",
        "condițiile comerciale;",
        "politicile de anulare;",
        "politicile de confidențialitate;",
        "serviciile efectiv prestate de terți.",
      ],
      "Utilizatorul este încurajat să consulte termenii, condițiile și politicile furnizorului extern înainte de a efectua o rezervare sau achiziție.",
    ],
  },
  {
    title: "9. Informațiile publicate pe site",
    blocks: [
      "Greek Steps depune eforturi pentru ca informațiile publicate să fie corecte și actualizate.",
      "Cu toate acestea, informații precum prețurile, programele, disponibilitatea, orarele de transport, condițiile de călătorie sau serviciile unor furnizori externi se pot modifica fără ca Greek Steps să poată controla aceste modificări.",
      "Materialele editoriale, articolele, recomandările și prezentările destinațiilor au rol informativ și inspirațional.",
      "În lipsa unei mențiuni exprese, acestea nu reprezintă o ofertă contractuală fermă.",
    ],
  },
  {
    title: "10. Condiții de călătorie",
    blocks: [
      "Informațiile privind documentele de călătorie, condițiile de intrare într-o țară, vizele, asigurările, regulile sanitare sau alte formalități pot suferi modificări.",
      "Utilizatorii sunt responsabili pentru verificarea condițiilor oficiale aplicabile călătoriei lor înainte de plecare.",
      "Recomandările sau informațiile publicate pe site nu înlocuiesc informațiile furnizate de autoritățile competente.",
    ],
  },
  {
    title: "11. Proprietate intelectuală",
    blocks: [
      "Textele originale, materialele educaționale, elementele grafice, fotografiile proprii, denumirea Greek Steps și celelalte materiale originale publicate pe site sunt protejate de legislația privind drepturile de autor și proprietatea intelectuală.",
      "Acestea nu pot fi copiate, reproduse, modificate, distribuite sau utilizate în scop comercial fără acordul titularului drepturilor.",
      "Materialele, fotografiile, mărcile sau alte elemente aparținând unor terți rămân proprietatea titularilor respectivi.",
    ],
  },
  {
    title: "12. Protecția datelor cu caracter personal",
    blocks: [
      "Prelucrarea datelor cu caracter personal se realizează în conformitate cu Politica de Confidențialitate disponibilă pe site.",
      "Prin utilizarea formularelor de contact sau prin comunicarea directă cu Greek Steps, utilizatorul poate furniza anumite date necesare pentru soluționarea solicitării sale.",
      "Datele sunt utilizate numai în scopurile și condițiile prevăzute în Politica de Confidențialitate.",
    ],
  },
  {
    title: "13. Cookies",
    blocks: [
      "Site-ul poate utiliza cookie-uri și tehnologii similare.",
      "Informațiile privind tipurile de cookie-uri utilizate, scopul acestora și opțiunile disponibile utilizatorului sunt descrise în Politica de Cookies.",
      "Cookie-urile care nu sunt strict necesare vor fi utilizate în conformitate cu opțiunile și consimțământul utilizatorului, atunci când acesta este necesar.",
    ],
  },
  {
    title: "14. Limitarea răspunderii",
    blocks: [
      "Greek Steps nu poate garanta funcționarea permanentă, neîntreruptă și lipsită de erori a site-ului.",
      "În limitele permise de lege, Greek Steps nu răspunde pentru probleme sau prejudicii cauzate exclusiv de:",
      [
        "întreruperi tehnice independente de controlul său;",
        "indisponibilitatea temporară a site-ului;",
        "informații modificate de furnizori externi;",
        "modificarea prețurilor sau disponibilității serviciilor unor terți;",
        "utilizarea necorespunzătoare a informațiilor publicate;",
        "serviciile contractate direct de utilizator cu furnizori externi.",
      ],
      "Nicio prevedere din prezentele Termeni și Condiții nu limitează drepturile obligatorii ale consumatorilor și nici răspunderea care nu poate fi exclusă prin lege.",
    ],
  },
  {
    title: "15. Reclamații și sesizări",
    blocks: [
      "Pentru întrebări, sesizări sau reclamații privind serviciile furnizate direct de Greek Steps, utilizatorii ne pot contacta la: contact@greeksteps.ro",
      "Greek Steps va urmări soluționarea pe cale amiabilă a eventualelor neînțelegeri.",
      "Consumatorii au, de asemenea, dreptul de a utiliza mecanismele de Soluționare Alternativă a Litigiilor – SAL, puse la dispoziție de Autoritatea Națională pentru Protecția Consumatorilor – ANPC, în condițiile legii.",
      "Exercitarea acestei posibilități nu afectează dreptul consumatorului de a se adresa autorităților competente sau instanțelor de judecată.",
    ],
  },
  {
    title: "16. Forța majoră",
    blocks: [
      "Greek Steps nu poate fi ținută răspunzătoare pentru neexecutarea sau întârzierea executării unor obligații atunci când aceasta este cauzată de evenimente de forță majoră sau de alte situații aflate în afara controlului rezonabil al societății, în condițiile prevăzute de lege.",
    ],
  },
  {
    title: "17. Legislația aplicabilă",
    blocks: [
      "Prezentele Termeni și Condiții sunt guvernate de legislația română și de legislația Uniunii Europene aplicabilă.",
      "Eventualele neînțelegeri vor fi soluționate cu prioritate pe cale amiabilă.",
      "Dacă soluționarea amiabilă nu este posibilă, părțile se pot adresa autorităților sau instanțelor competente, potrivit legii.",
    ],
  },
  {
    title: "18. Modificarea Termenilor și Condițiilor",
    blocks: [
      "Greek Steps poate modifica prezentele Termeni și Condiții atunci când:",
      [
        "se modifică serviciile oferite;",
        "sunt introduse noi funcționalități pe site;",
        "sunt introduse noi modalități de plată;",
        "apar noi colaborări comerciale;",
        "intervine o modificare legislativă;",
        "este obținută licența de turism.",
      ],
      "Versiunea actualizată va fi publicată pe această pagină și va conține data ultimei actualizări.",
      "După obținerea licenței de turism, documentul va fi completat cu datele licenței și cu termenii aplicabili rezervării, plății, modificării și anulării serviciilor turistice comercializate direct de Greek Steps.",
    ],
  },
  {
    title: "19. Contact",
    blocks: [
      "Pentru întrebări privind prezentele Termeni și Condiții:",
      [
        "GREEK STEPS S.R.L.",
        "Sediul social: București, Sector 3, Str. Baba Novac nr. 8A, bl. A, sc. A, et. 11–12, ap. 1103, camera 1",
        "E-mail: contact@greeksteps.ro",
        "Telefon: 0726803296",
        "www.greeksteps.ro",
      ].join("\n"),
    ],
  },
]

export function TermsContent() {
  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-10 px-6 pb-20 pt-40 lg:px-8 lg:pt-48">
      <header className="flex flex-col gap-4">
        <h1 className="text-balance text-3xl font-bold uppercase tracking-wide md:text-4xl">Termeni și Condiții</h1>
        <p className="text-sm opacity-80">Ultima actualizare: 22 noiembrie 2026</p>
        <p className="text-pretty text-lg leading-relaxed">
          Bine ai venit pe greeksteps.ro. Prin accesarea și utilizarea acestui site, utilizatorul confirmă că a citit
          și a înțeles prezentele Termeni și Condiții.
        </p>
      </header>

      {sections.map((section) => (
        <section key={section.title} className="flex flex-col gap-4">
          <h2 className="text-balance text-xl font-semibold md:text-2xl">{section.title}</h2>
          {section.blocks.map((block, index) =>
            Array.isArray(block) ? (
              <ul key={index} className="flex list-disc flex-col gap-2 pl-6 leading-relaxed">
                {block.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index} className="whitespace-pre-line text-pretty leading-relaxed">
                {block}
              </p>
            ),
          )}
        </section>
      ))}
    </article>
  )
}
