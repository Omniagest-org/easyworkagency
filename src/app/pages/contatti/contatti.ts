import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { LocationsMap, MapLocation } from '../../shared/components/locations-map/locations-map';
import { SeoService } from '../../shared/services/seo';

interface ContactForm {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  oggetto: string;
  messaggio: string;
  privacy: boolean;
}

@Component({
  selector: 'app-contatti',
  imports: [FormsModule, FadeInOnScrollDirective, LocationsMap],
  templateUrl: './contatti.html',
  styleUrl: './contatti.scss',
})
export class Contatti {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);
  private readonly http = inject(HttpClient);

  private static readonly mailEndpoint = '/send-mail.php';

  protected readonly submitted = signal(false);
  protected readonly sending = signal(false);
  protected readonly error = signal(false);

  protected readonly form: ContactForm = {
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: '',
    privacy: false,
  };

  protected readonly phones: { number: string; type: 'cellulare' | 'fisso' }[] = [
    { number: '351 3066021', type: 'cellulare' },
    { number: '082 31841458', type: 'fisso' },
  ];

  protected readonly offices: (MapLocation & { emails: string[] })[] = [
    {
      name: 'Marcianise (CE)',
      address: 'Via SS 335 - Centro Derù snc - 81025 Marcianise (CE)',
      emails: ['infocaserta@easyworkagency.com', 'selezioni@easyworkagency.com'],
      lat: 41.0055,
      lng: 14.2905,
    },
    {
      name: 'Napoli (NA)',
      address:
        'Viale della Costituzione (c/o il Centro Direzionale di Napoli), Isola A/3, scala B, piano I, interno 107 - Napoli (NA)',
      emails: ['infonapoli@easyworkagency.com', 'selezioninapoli@easyworkagency.com'],
      lat: 40.8559,
      lng: 14.2786,
    },
    {
      name: 'Salerno (SA)',
      address: 'Via Irno 11, 84135 Salerno (SA)',
      emails: ['infosalerno@easyworkagency.com', 'selezionisalerno@easyworkagency.com'],
      lat: 40.6815,
      lng: 14.7748,
    },
  ];

  protected readonly mapLocations: MapLocation[] = this.offices.map(({ name, address, lat, lng }) => ({
    name,
    address,
    lat,
    lng,
  }));

  protected onSubmit(): void {
    if (!this.form.privacy || this.sending()) {
      return;
    }

    this.sending.set(true);
    this.error.set(false);

    this.http.post<{ ok: boolean }>(Contatti.mailEndpoint, this.form).subscribe({
      next: (response) => {
        this.sending.set(false);
        if (response?.ok) {
          this.submitted.set(true);
        } else {
          this.error.set(true);
        }
      },
      error: () => {
        this.sending.set(false);
        this.error.set(true);
      },
    });
  }

  constructor() {
    const pageTitle = 'Contatti – Easy Work';
    const description =
      "Contatta Easy Work: scopri le sedi di Marcianise, Napoli e Salerno, i recapiti telefonici ed email, oppure scrivici tramite il modulo di contatto.";

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.easyworkagency.com/contatti' });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/contatti');
  }
}
