import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-ricerca-selezione-personale',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './ricerca-selezione-personale.html',
  styleUrl: './ricerca-selezione-personale.scss',
})
export class RicercaSelezionePersonale {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly services = [
    {
      title: 'Analisi e definizione del job profile',
      text: "Comprendiamo le reali esigenze dell'azienda per costruire una job position coerente e attrattiva.",
    },
    {
      title: 'Ricerca mirata e selezione avanzata',
      text: 'Usiamo criteri di matching precisi per identificare i candidati ideali in base a competenze, potenziale e obiettivi futuri.',
    },
    {
      title: 'Proposta economica e supporto assunzione',
      text: "Stendiamo un'offerta chiara e supportiamo l'azienda in ogni fase dell'assunzione (tempi, contratti, pratiche).",
    },
  ];

  protected readonly reasons = [
    'Selezione basata su dati, competenze e contesto',
    'Allineamento tra ruolo, persona e cultura aziendale',
    "Gestione proattiva dell'intero iter di selezione",
    'Supporto continuo da recruiter esperti',
  ];

  constructor() {
    const pageTitle = 'Ricerca e Selezione del Personale – Easy Work';
    const description =
      'Trova il talento giusto per far crescere la tua azienda: i nostri recruiter ottimizzano ogni fase del processo selettivo con criteri di matching mirato per individuare risorse qualificate e allineate ai tuoi obiettivi.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/ricerca-e-selezione-del-personale',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/ricerca-e-selezione-del-personale');
  }
}
