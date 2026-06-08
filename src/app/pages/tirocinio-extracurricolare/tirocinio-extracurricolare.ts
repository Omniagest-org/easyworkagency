import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-tirocinio-extracurricolare',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './tirocinio-extracurricolare.html',
  styleUrl: './tirocinio-extracurricolare.scss',
})
export class TirocinioExtracurricolare {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly benefits = [
    'Lavorare a stretto contatto con professionisti esperti',
    'Apprendere metodologie e strategie aziendali',
    'Sviluppare competenze pratiche e settoriali',
    'Aumentare le possibilità di essere assunto',
    'Mettere in pratica ciò che hai studiato',
    'Reinserirti con nuove competenze in un contesto dinamico',
  ];

  protected readonly internshipTypes = [
    { title: 'Formazione', text: 'Per chi è agli inizi.' },
    { title: 'Orientamento', text: 'Per definire il proprio percorso.' },
    { title: 'Inserimento e Reinserimento', text: 'Nel mondo del lavoro.' },
  ];

  protected readonly activationSteps = [
    'Contatto e raccolta esigenze',
    'Progetto formativo personalizzato',
    'Inserimento in azienda con supporto continuo',
  ];

  constructor() {
    const pageTitle = 'Tirocinio Extracurricolare – Easy Work';
    const description =
      "Tirocinio extracurriculare: un trampolino per la tua carriera. Un'opportunità concreta per avviare o rilanciare il tuo percorso professionale, sperimentando sul campo le competenze acquisite e costruendone di nuove direttamente in azienda.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/tirocinio-extracurricolare',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/tirocinio-extracurricolare');
  }
}
