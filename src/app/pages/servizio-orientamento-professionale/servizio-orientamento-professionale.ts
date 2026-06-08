import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-servizio-orientamento-professionale',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './servizio-orientamento-professionale.html',
  styleUrl: './servizio-orientamento-professionale.scss',
})
export class ServizioOrientamentoProfessionale {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly offerings = [
    {
      title: 'Analisi del profilo personale e professionale',
      text: 'Individuazione di punti di forza e aree di sviluppo.',
    },
    {
      title: 'Consulenza sulle opportunità di carriera',
      text: 'Settori più richiesti e competenze chiave richieste dal mercato.',
    },
    {
      title: 'Supporto nella ricerca di lavoro',
      text: 'Revisione del CV, consigli per affrontare i colloqui, strategie per migliorare la presenza online.',
    },
  ];

  constructor() {
    const pageTitle = 'Servizio di Orientamento Professionale – Easy Work';
    const description =
      'Scopri il percorso giusto per te: ti aiutiamo a comprendere capacità, esperienze e aspirazioni per costruire il tuo futuro professionale su basi solide, con analisi del profilo, consulenza di carriera e supporto nella ricerca di lavoro.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/servizio-di-orientamento-professonale',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/servizio-di-orientamento-professonale');
  }
}
