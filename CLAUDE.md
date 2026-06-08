# Progetto: migrazione sito da WordPress ad Angular

## Contesto

Sto migrando https://www.easyworkagency.com da WordPress ad Angular. WordPress verrà dismesso del tutto. La lista delle pagine da implementare si trova nel file interni_html.csv

## Stack di arrivo

- Angular, standalone components, signals per lo stato
- SSR con Angular Universal (la SEO è prioritaria)
- Stile: SCSS

## Obiettivi

- Replicare i template: home, lista articoli, singolo articolo, pagina contatti
- Mantenere gli stessi URL/permalink per non perdere posizionamento
- Form di contatto funzionante [con quale backend?]

## Stato avanzamento

- [x] Homepage (`src/app/pages/home`) con hero, sezioni "Per le Aziende",
  "Per i Cittadini", "Politiche Attive", "Finanza agevolata", "News" e CTA
  finale, contenuti allineati a quelli pubblicati su easyworkagency.com
- [x] Header (`src/app/components/header`) con logo `logo_orizzontale.png`,
  menu mobile-first ad hamburger e voci: Chi siamo, Servizi per le aziende,
  Servizi per i cittadini, Politiche attive, Finanza agevolata, Par GOL, Contatti
  (le voci "Servizi per..." puntano alle relative sezioni `#fragment` in home,
  in attesa delle pagine dedicate)
- [x] Footer (`src/app/components/footer`) con sedi, colonne di link e copyright
- [x] SEO: title/meta description/Open Graph impostati via `Title`/`Meta` nel
  componente Home, `lang="it"` e meta description in `index.html`, route
  prerenderizzata in SSR (`app.routes.server.ts`)
- [x] Variabili colore brand (blu/giallo del logo) e stili mobile-first in
  `src/styles.scss`

## Da fare

- Creare le pagine collegate dal menu/footer (chi-siamo, finanza-agevolata,
  par-gol, contatti, ricerca-e-selezione-del-personale, ecc.) — i link sono
  già predisposti con `routerLink` verso gli URL definitivi in `interni_html.csv`
- Implementare lista articoli, singolo articolo e form di contatto funzionante
