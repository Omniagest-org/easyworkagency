import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-bilancio-competenze',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './bilancio-competenze.html',
  styleUrl: './bilancio-competenze.scss',
})
export class BilancioCompetenze {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly howItWorks = [
    'Usiamo strumenti innovativi e strategie mirate',
    'Lavoriamo insieme per analizzare punti di forza e aree di miglioramento',
    'Ricevi un Portfolio di Competenze certificato',
  ];

  protected readonly purposes = [
    {
      title: 'Dare una nuova direzione alla tua carriera',
      text: 'Costruisci un percorso in linea con le tue potenzialità.',
    },
    {
      title: 'Rendere il tuo profilo più competitivo',
      text: 'Distinguiti agli occhi delle aziende.',
    },
    {
      title: 'Colmare eventuali lacune',
      text: 'Identifica le migliori opportunità di formazione.',
    },
    {
      title: 'Aumentare la tua consapevolezza',
      text: 'Prendi decisioni strategiche sul tuo futuro.',
    },
  ];

  constructor() {
    const pageTitle = 'Bilancio delle Competenze – Easy Work';
    const description =
      "Vuoi dare una svolta alla tua carriera? Il bilancio di competenze è il servizio ideale per valorizzare il tuo talento: un'analisi strutturata delle tue competenze per costruire un percorso su misura e ricevere un Portfolio di Competenze certificato.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/bilancio-delle-competenze',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/bilancio-delle-competenze');
  }
}
