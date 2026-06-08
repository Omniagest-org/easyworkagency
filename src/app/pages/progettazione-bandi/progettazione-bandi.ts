import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-progettazione-bandi',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './progettazione-bandi.html',
  styleUrl: './progettazione-bandi.scss',
})
export class ProgettazioneBandi {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly services = [
    {
      title: 'Analisi delle opportunità',
      text: 'Selezioniamo i bandi più adatti al tuo profilo aziendale, valutando criteri di ammissibilità e requisiti richiesti.',
    },
    {
      title: 'Progettazione strategica',
      text: 'Elaboriamo proposte vincenti, curando la parte tecnica e documentale per aumentare le probabilità di approvazione.',
    },
    {
      title: 'Gestione della candidatura',
      text: 'Presentiamo il progetto nei tempi stabiliti, garantendo piena conformità alle linee guida.',
    },
    {
      title: 'Monitoraggio e rendicontazione',
      text: "Ti affianchiamo anche dopo l'approvazione, nella gestione dei fondi e nella rendicontazione finale.",
    },
  ];

  protected readonly reasons = [
    'Accesso a risorse economiche fondamentali',
    'Supporto completo: dalla strategia alla rendicontazione',
    'Affiancamento da esperti del settore',
    'Ottimizzazione dei tempi e zero stress burocratico',
  ];

  constructor() {
    const pageTitle = 'Progettazione e Bandi – Easy Work';
    const description =
      "Trasforma le opportunità in risultati concreti: supportiamo la tua azienda nell'accesso ai finanziamenti pubblici, con strategie mirate e gestione completa delle candidature per bandi regionali, nazionali e internazionali.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/progettazione-e-bandi',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/progettazione-e-bandi');
  }
}
