import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-contratto-apprendistato',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './contratto-apprendistato.html',
  styleUrl: './contratto-apprendistato.scss',
})
export class ContrattoApprendistato {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly highlights = [
    {
      title: 'Inserimento e formazione strutturata',
      text: 'Percorso qualificante e su misura per giovani talenti, con esperienza pratica in azienda.',
    },
    {
      title: 'Rapporto di lavoro reale',
      text: 'Contratto a tempo determinato o indeterminato, con formazione finalizzata a una qualifica professionale riconosciuta.',
    },
    {
      title: 'Vantaggi fiscali per l’azienda',
      text: 'Agevolazioni e incentivi per ogni nuovo apprendista, e crescita interna con risorse formate sulle esigenze aziendali.',
    },
  ];

  protected readonly services = [
    {
      title: 'Definizione del progetto formativo',
      text: 'Creazione di un programma formativo su misura, rispettando normative ed esigenze aziendali.',
    },
    {
      title: 'Affiancamento nella gestione amministrativa',
      text: "Supporto nell'attivazione e nella corretta gestione del contratto.",
    },
    {
      title: 'Formazione tecnica e trasversale',
      text: 'Moduli su competenze tecniche operative, gestionali, relazionali e comunicative.',
    },
    {
      title: 'Tutoraggio continuo',
      text: 'Sistema di affiancamento con formatori esperti e tutor interni.',
    },
    {
      title: 'Monitoraggio e valutazione',
      text: 'Verifica costante delle competenze acquisite.',
    },
  ];

  constructor() {
    const pageTitle = 'Contratto di apprendistato – Easy Work';
    const description =
      'Forma, inserisci e valorizza giovani talenti nella tua azienda con il contratto di apprendistato: progettazione formativa, gestione amministrativa, tutoraggio e monitoraggio delle competenze.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/contratto-di-apprendistato',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/contratto-di-apprendistato');
  }
}
