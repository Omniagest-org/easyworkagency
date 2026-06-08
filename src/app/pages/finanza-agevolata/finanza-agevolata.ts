import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

interface FundingType {
  title: string;
  text: string;
}

@Component({
  selector: 'app-finanza-agevolata',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './finanza-agevolata.html',
  styleUrl: './finanza-agevolata.scss',
})
export class FinanzaAgevolata {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly expandedFunding = signal<string | null>(null);

  protected toggleFunding(fundingTitle: string): void {
    this.expandedFunding.update((current) => (current === fundingTitle ? null : fundingTitle));
  }

  protected readonly digitalAreas = [
    {
      title: 'Ricerca e sviluppo',
      text: 'Progetti innovativi per migliorare prodotti, processi e servizi.',
    },
    {
      title: 'Digitalizzazione',
      text: 'Investimenti in software, e-commerce e soluzioni cloud.',
    },
    {
      title: 'Industria 4.0',
      text: "Adozione di tecnologie avanzate per l'automazione e l'efficienza produttiva.",
    },
  ];

  protected readonly sustainabilityAreas = [
    {
      title: 'Efficienza energetica',
      text: 'Riduzione dei consumi e adozione di fonti rinnovabili.',
    },
    {
      title: 'Economia circolare',
      text: 'Progetti per il riutilizzo di materiali e la riduzione dei rifiuti.',
    },
    {
      title: 'Mobilità sostenibile',
      text: 'Investimenti in veicoli elettrici e infrastrutture a basso impatto ambientale.',
    },
  ];

  protected readonly fundingTypes: FundingType[] = [
    {
      title: 'Contributi a fondo perduto',
      text: 'Risorse economiche che non devono essere restituite.',
    },
    {
      title: 'Smart&Start Italia',
      text: "L'incentivo che sostiene la nascita e la crescita delle startup innovative ad alto contenuto tecnologico in tutte le Regioni italiane. Prevede un finanziamento a tasso zero e un contributo a fondo perduto per le imprese del Sud Italia e del Cratere sismico.",
    },
    {
      title: 'Finanziamenti a tasso agevolato',
      text: "Prestiti con interessi molto più bassi di quelli bancari tradizionali, rivolti soprattutto all'imprenditoria femminile e giovanile, con sostegno alle iniziative per il Mezzogiorno e per la transizione green e digitale.",
    },
    {
      title: 'Garanzie pubbliche',
      text: 'Lo Stato garantisce il tuo finanziamento, facilitando l’accesso al credito.',
    },
    {
      title: 'Crediti d’imposta per riduzione consumi energetici',
      text: 'Agevolazioni fiscali legate a specifici investimenti, un incentivo fino al 45% (63% in alcuni casi) per le attività che assicurino una riduzione dei consumi energetici.',
    },
    {
      title: 'Voucher e incentivi',
      text: 'Contributi per formazione, digitalizzazione, internazionalizzazione.',
    },
    {
      title: 'Fondo Regionale per la crescita in Campania',
      text: 'Sostegno di investimenti in beni materiali e immateriali funzionali all’introduzione di innovazioni di processo/prodotto (50% contributo a fondo perduto; 50% finanziamento a tasso zero).',
    },
    {
      title: 'Contributi per giovani imprenditori residenti al sud',
      text: "Per lo sviluppo di nuove attività imprenditoriali in Abruzzo, Basilicata, Calabria, Campania, Molise, Puglia, Sardegna, Sicilia e aree del cratere sismico (Lazio, Marche, Umbria). L'incentivo è destinato a chi ha un'età compresa tra i 18 e i 55 anni. Valutazione in base all'ordine cronologico di arrivo.",
    },
    {
      title: 'Incentivi Assunzioni Bonus donna',
      text: 'Rivolta ai datori di lavoro privati, prevede un massimo di 650 euro su base mensile per ciascuna assunzione a tempo indeterminato con esonero del 100% dei contributi previdenziali.',
    },
    {
      title: 'Incentivi Assunzioni rivolto agli under 35 anni',
      text: "Per assunzioni di giovani sotto i 35 anni mai occupati a tempo indeterminato. L'incentivo è pari all'esonero dal versamento del 100% dei contributi previdenziali per un periodo massimo di 24 mesi, nel limite di 650 euro al mese.",
    },
  ];

  protected readonly assumptionBonusNote =
    'I bonus assunzioni si applicano alle assunzioni effettuate dal 1° settembre 2024 al 31 dicembre 2025.';

  constructor() {
    const pageTitle = 'Finanza Agevolata – Easy Work';
    const description =
      'Che cos’è la Finanza Agevolata? Strumenti pubblici per sostenere lo sviluppo di startup, PMI e professionisti: contributi a fondo perduto, finanziamenti a tasso agevolato, crediti d’imposta, garanzie pubbliche e incentivi alle assunzioni.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/finanza-agevolata',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/finanza-agevolata');
  }
}
