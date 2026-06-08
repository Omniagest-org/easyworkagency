import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-chi-siamo',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './chi-siamo.html',
  styleUrl: './chi-siamo.scss',
})
export class ChiSiamo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly values = [
    {
      title: 'Diversità e inclusione',
      text: 'Valorizziamo le differenze e garantiamo pari opportunità a tutte le persone che incontriamo nel nostro percorso.',
    },
    {
      title: 'Continuità professionale',
      text: 'Sosteniamo la crescita di chi opera in un mercato del lavoro in continua evoluzione, accompagnandolo nel tempo.',
    },
    {
      title: 'Competenze digitali e sostenibilità',
      text: 'Investiamo in competenze digitali e in soluzioni sostenibili, promuovendo progetti di sviluppo e formazione del personale.',
    },
  ];

  protected readonly offices = [
    'Via SS 335 - Centro Derù snc - 81025 Marcianise (CE)',
    'Viale della Costituzione (c/o il Centro Direzionale di Napoli), Isola A/3, scala B, piano I, interno 107 - Napoli (NA)',
    'Via Irno 11, 84135 Salerno (SA)',
  ];

  constructor() {
    const pageTitle = 'Chi Siamo – Easy Work';
    const description =
      "Easy Work è un'agenzia per il lavoro accreditata dalla Regione Campania, impegnata ogni giorno a far incontrare domanda e offerta di lavoro con valori di inclusione, continuità professionale e innovazione digitale.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.easyworkagency.com/chi-siamo' });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/chi-siamo');
  }
}
