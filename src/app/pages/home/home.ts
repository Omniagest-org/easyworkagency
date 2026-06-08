import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly pillars = [
    {
      title: 'Per le aziende',
      text: 'Reclutamento, selezione del personale e progetti di formazione su misura per la crescita della tua impresa.',
      fragment: 'per-le-aziende',
    },
    {
      title: 'Per i candidati',
      text: 'Caricamento del CV, ricerca di offerte di lavoro e orientamento professionale per costruire la tua carriera.',
      fragment: 'per-i-cittadini',
    },
    {
      title: 'Finanza agevolata',
      text: 'Accesso a bandi, incentivi e contributi pubblici per sostenere i tuoi progetti di crescita.',
      path: '/finanza-agevolata',
    },
  ];

  protected readonly aziendeServices = [
    'Formazione dei dipendenti e sviluppo professionale',
    'Reclutamento del personale e acquisizione di talenti',
    "Supporto alla progettazione e all'implementazione dei progetti",
  ];

  protected readonly cittadiniServices = [
    'Caricamento del curriculum e gestione del profilo',
    'Assistenza nella ricerca e nella candidatura al lavoro',
    'Orientamento professionale e supporto alla carriera',
  ];

  protected readonly activePolicies = [
    {
      title: 'Tirocinio extracurricolare',
      text: 'Un trampolino di lancio per fare esperienza sul campo e avvicinarti al mondo del lavoro.',
      path: '/tirocinio-extracurricolare',
    },
    {
      title: 'PAR GOL',
      text: 'Il programma regionale che ti accompagna passo dopo passo verso una nuova occupazione.',
      path: '/par-gol',
    },
    {
      title: 'Apprendistato',
      text: 'Forma, inserisci e valorizza giovani talenti nella tua azienda attraverso percorsi dedicati.',
      path: '/contratto-di-apprendistato',
    },
  ];

  protected readonly ctaActions = [
    { label: 'Richiedi una consulenza', path: '/contatti', primary: true },
    { label: 'Carica il tuo CV', path: '/crea-il-tuo-cv', primary: false },
    { label: 'Contattaci', path: '/contatti', primary: false },
  ];

  constructor() {
    const pageTitle = 'Easy Work – Agenzia per il lavoro';
    const description =
      "Easy Work è l'agenzia per il lavoro che mette in contatto aziende e candidati: ricerca e selezione del personale, formazione, politiche attive, finanza agevolata e PAR GOL.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.easyworkagency.com/' });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/');
    this.seo.setJsonLd('ld-organization', {
      '@context': 'https://schema.org',
      '@type': 'EmploymentAgency',
      name: 'Easy Work',
      url: 'https://www.easyworkagency.com/',
      logo: 'https://www.easyworkagency.com/logo_orizzontale.png',
      description,
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Via SS 335 - Centro Derù snc',
          postalCode: '81025',
          addressLocality: 'Marcianise',
          addressRegion: 'CE',
          addressCountry: 'IT',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Viale della Costituzione, Centro Direzionale, Isola A/3, scala B, piano I, interno 107',
          addressLocality: 'Napoli',
          addressRegion: 'NA',
          addressCountry: 'IT',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Via Irno 11',
          postalCode: '84135',
          addressLocality: 'Salerno',
          addressRegion: 'SA',
          addressCountry: 'IT',
        },
      ],
    });
  }
}
