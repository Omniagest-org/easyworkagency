import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';

interface SecurityCourse {
  title: string;
  audience?: string;
  topics?: string[];
  duration: string;
  certificate?: string;
}

@Component({
  selector: 'app-corsi-sicurezza-lavoro',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './corsi-sicurezza-lavoro.html',
  styleUrl: './corsi-sicurezza-lavoro.scss',
})
export class CorsiSicurezzaLavoro {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly expandedCourse = signal<string | null>(null);

  protected toggleCourse(courseTitle: string): void {
    this.expandedCourse.update((current) => (current === courseTitle ? null : courseTitle));
  }

  protected readonly highlights = [
    'Formazione generale e specifica',
    'Corsi di aggiornamento RLS, RSPP, Preposti',
    'Corsi per rischio basso, medio, alto',
  ];

  protected readonly reasons = [
    'Esperienza comprovata in ambito sicurezza',
    'Docenti qualificati e sempre aggiornati',
    'Materiale didattico incluso',
    'Supporto amministrativo e scadenziario',
  ];

  protected readonly courses: SecurityCourse[] = [
    {
      title: 'Rappresentante dei Lavoratori per la Sicurezza – Aggiornamento (< 50 dip.)',
      audience: 'Rappresentanti dei lavoratori per la sicurezza in aziende con meno di 50 dipendenti',
      topics: [
        'Normativa e obblighi del RLS nelle piccole aziende',
        'Tecniche di individuazione e gestione dei rischi sul lavoro',
        'Strategie per migliorare la comunicazione tra lavoratori e datore di lavoro',
      ],
      duration: "4 ore online con verifica dell'apprendimento",
    },
    {
      title: 'Responsabile del Servizio di Prevenzione e Protezione (RSPP) – Rischio Alto – Aggiornamento',
      audience: 'Datore di lavoro, titolare di aziende con rischio alto, che assume le funzioni di RSPP',
      topics: [
        'Aggiornamento sulle normative vigenti',
        'Gestione avanzata dei rischi per aziende a rischio alto',
        'Strategie di prevenzione e protezione',
        'Procedure di emergenza e gestione delle crisi',
        'Ruolo e responsabilità del RSPP nelle aziende con elevati fattori di rischio',
      ],
      duration: "14 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Responsabile del Servizio di Prevenzione e Protezione (RSPP) – Rischio Medio',
      audience: 'Datore di lavoro, titolare di aziende con rischio medio, che assume le funzioni di RSPP',
      topics: [
        'Principi generali di sicurezza (D.Lgs n.81/2008, obblighi del datore di lavoro, concetti di prevenzione e protezione)',
        'Valutazione e gestione dei rischi (analisi rischi specifici, misure di prevenzione, strategie di gestione)',
        'Procedure di emergenza e sicurezza operativa (pianificazione emergenze, misure di protezione, cultura della sicurezza)',
      ],
      duration: "32 ore (8 ore online + 24 ore in presenza) con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Responsabile del Servizio di Prevenzione e Protezione (RSPP) – Rischio Medio – Aggiornamento',
      audience: 'Datore di lavoro, titolare di aziende con rischio medio, che assume le funzioni di RSPP',
      topics: [
        'Principi generali di sicurezza (normativa D.Lgs n.81/2008)',
        'Valutazione e gestione dei rischi',
        'Procedure di emergenza e sicurezza operativa',
      ],
      duration: "10 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Responsabile del Servizio di Prevenzione e Protezione (RSPP) – Rischio Basso – Aggiornamento',
      duration: "6 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Responsabile del Servizio di Prevenzione e Protezione (RSPP) – Rischio Basso',
      topics: [
        'Normativa sulla sicurezza e D.Lgs. 81/08',
        'Valutazione dei rischi nei settori a rischio basso',
        'Organizzazione della sicurezza e sistemi di prevenzione e protezione',
        'Gestione delle emergenze',
      ],
      duration: "16 ore (8 ore online + 8 ore in presenza) con verifica dell'apprendimento",
      certificate: 'Valido 5 anni per aziende a rischio basso',
    },
    {
      title: 'Formazione e Informazione sul Lavoro – Rischio Alto – Aggiornamento',
      duration: "6 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Formazione e Informazione sul Lavoro – Rischio Medio – Aggiornamento',
      duration: "6 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Formazione e Informazione sul Lavoro – Parte Generale e Specifica',
      topics: [
        'Normativa sulla sicurezza',
        'Diritti e doveri del lavoratore e del datore di lavoro',
        'Rischi generali e strategie di prevenzione',
        'Dispositivi di protezione personali e collettivi',
      ],
      duration: "4 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
    {
      title: 'Formazione e Informazione sul Lavoro – Rischio Basso – Aggiornamento',
      audience: 'Lavoratori impiegati in settori classificati a rischio basso',
      topics: [
        'Parte generale (sicurezza, diritti, doveri, normativa, principi di prevenzione)',
        'Parte specifica (rischi correlati alle mansioni, strategie di prevenzione, procedure)',
      ],
      duration: "6 ore online con verifica dell'apprendimento",
      certificate: 'Valido 5 anni',
    },
  ];

  constructor() {
    const pageTitle = 'Corsi per la sicurezza sul lavoro – Easy Work';
    const description =
      'I corsi Easy Work sulla sicurezza sul lavoro rispondono agli obblighi del D.Lgs. 81/08: formazione generale e specifica, aggiornamenti RLS, RSPP e Preposti per ogni livello di rischio.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://www.easyworkagency.com/corsi-per-la-sicurezza-sul-lavoro',
    });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/corsi-per-la-sicurezza-sul-lavoro');
  }
}
