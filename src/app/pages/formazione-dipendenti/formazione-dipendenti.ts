import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-formazione-dipendenti',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './formazione-dipendenti.html',
  styleUrl: './formazione-dipendenti.scss',
})
export class FormazioneDipendenti {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly offerings = [
    {
      title: 'Analisi dei bisogni formativi',
      text: 'Valutazione delle competenze attuali e identificazione delle aree di sviluppo.',
    },
    {
      title: 'Percorsi formativi personalizzati',
      text: 'Programmi ad hoc per competenze tecniche, trasversali e manageriali.',
    },
    {
      title: 'Esperienza immersiva',
      text: 'Simulazioni, case study e attività interattive per un apprendimento pratico.',
    },
    {
      title: 'Formazione in presenza e online',
      text: 'Aula, webinar e piattaforme digitali per garantire accessibilità e flessibilità.',
    },
    {
      title: 'Monitoraggio dei risultati',
      text: "Misurazione dell'efficacia attraverso test, feedback e indicatori di performance.",
    },
  ];

  protected readonly advantages = [
    'Competente',
    'Motivata',
    'Capace di affrontare le sfide del mercato con successo',
  ];

  constructor() {
    const pageTitle = 'Formazione Dipendenti – Easy Work';
    const description =
      'Crescita e cambiamento al servizio della tua azienda: percorsi formativi personalizzati per sviluppare competenze tecniche, trasversali e manageriali, in aula e online.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/formazione-dipendenti',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/formazione-dipendenti');
  }
}
