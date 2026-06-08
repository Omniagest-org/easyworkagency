import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-apprendistato-professionalizzante',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './apprendistato-professionalizzante.html',
  styleUrl: './apprendistato-professionalizzante.scss',
})
export class ApprendistatoProfessionalizzante {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly offerings = [
    {
      title: 'Un vero contratto di lavoro',
      text: 'Inserimento regolare a tempo determinato o indeterminato.',
    },
    {
      title: 'Formazione su misura',
      text: 'Programma specifico basato sulle esigenze del settore.',
    },
    {
      title: 'Affiancamento costante',
      text: 'Tutor e formatori ti guideranno ogni giorno.',
    },
    {
      title: 'Crescita professionale',
      text: 'Competenze tecniche e soft per distinguerti.',
    },
    {
      title: 'Percorso strutturato e monitorato',
      text: 'Verifiche regolari per misurare il tuo progresso.',
    },
  ];

  constructor() {
    const pageTitle = 'Apprendistato Professionalizzante – Easy Work';
    const description =
      "Apprendistato Professionalizzante: impara lavorando. Un percorso che unisce lavoro e formazione per garantirti una crescita reale, con un vero contratto di lavoro, formazione su misura e affiancamento costante.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/apprendistato-professionalizzante',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/apprendistato-professionalizzante');
  }
}
