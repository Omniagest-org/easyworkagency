import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-tirocinio-extracurricolare-aziende',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './tirocinio-extracurricolare-aziende.html',
  styleUrl: './tirocinio-extracurricolare-aziende.scss',
})
export class TirocinioExtracurricolareAziende {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly whatIsPoints = [
    "Si tratta di un'opportunità di formazione legata a iniziative regionali a sostegno della creazione e sviluppo di imprese",
    "Non è un rapporto di lavoro, ma una collaborazione vantaggiosa che favorisce l'inserimento o il reinserimento lavorativo",
    'Arricchisce il know-how aziendale senza oneri contrattuali',
  ];

  protected readonly internshipTypes = ['di formazione', 'di orientamento', 'inserimento/reinserimento lavorativo'];

  protected readonly regulations = [
    '29 novembre 2013, n. 7',
    '7 maggio 2018, n. 4',
    '18 settembre 2018, n. 7',
  ];

  protected readonly activationSteps = [
    'Sottoscrizione di una Convenzione con un Soggetto promotore',
    'Definizione di un Progetto formativo su misura',
  ];

  constructor() {
    const pageTitle = 'Tirocinio Extracurricolare (Aziende) – Easy Work';
    const description =
      "Crescita e cambiamento al servizio della tua azienda: il tirocinio extracurriculare è un'opportunità strategica per inserire risorse qualificate e arricchire il know-how aziendale senza oneri contrattuali.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/tirocinio-extracurricolare-aziende',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/tirocinio-extracurricolare-aziende');
  }
}
