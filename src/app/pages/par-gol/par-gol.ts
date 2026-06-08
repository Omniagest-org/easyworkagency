import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { PAR_GOL_COURSES } from '../corso-par-gol/corso-par-gol.data';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-par-gol',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './par-gol.html',
  styleUrl: './par-gol.scss',
})
export class ParGol {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly opportunities = [
    'Orientamento e accompagnamento al lavoro',
    'Formazione professionale',
    'Inserimento lavorativo',
    'Supporto per chi è in condizioni di fragilità',
  ];

  protected readonly participants = [
    'Disoccupati e inoccupati',
    'Percettori di sostegni al reddito (NASpI, Reddito di Cittadinanza)',
    'Beneficiari di ammortizzatori sociali',
    'Giovani NEET (sotto i 35 anni)',
    'Lavoratori fragili o vulnerabili',
    'Lavoratori con redditi molto bassi (working poor)',
  ];

  protected readonly courses = PAR_GOL_COURSES.map((course) => ({
    title: course.title,
    slug: course.slug,
  }));

  constructor() {
    const pageTitle = 'PAR GOL – Easy Work';
    const description =
      'PAR GOL: il tuo percorso verso il lavoro. Il Programma di Politiche Attive per il Lavoro – Garanzia di Occupabilità dei Lavoratori offre orientamento, formazione professionale e inserimento lavorativo per chi è in cerca di occupazione.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/par-gol',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/par-gol');
  }
}
