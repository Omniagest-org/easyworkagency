import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly offices = [
    'Via SS 335 - Centro Derù snc - 81025 Marcianise (CE)',
    'Viale della Costituzione (c/o il Centro Direzionale di Napoli), Isola A/3, scala B, piano I, interno 107 - Napoli (NA)',
    'Via Irno 11, 84135 Salerno (SA)',
  ];

  protected readonly linkColumns = [
    {
      title: 'Per i cittadini',
      links: [
        { label: 'Invia la tua autocandidatura', path: '/manda-il-tuo-cv' },
        { label: 'Crea il tuo CV', path: '/manda-il-tuo-cv' },
        { label: 'Bilancio delle competenze', path: '/bilancio-delle-competenze' },
      ],
    },
    {
      title: 'Per le aziende',
      links: [
        { label: 'Ricerca e selezione del personale', path: '/ricerca-e-selezione-del-personale' },
        { label: 'Formazione dipendenti', path: '/formazione-dipendenti' },
        { label: 'Progettazione e bandi', path: '/progettazione-e-bandi' },
      ],
    },
    {
      title: 'Politiche attive',
      links: [
        { label: 'PAR GOL', path: '/par-gol' },
        { label: 'Tirocinio extracurricolare', path: '/tirocinio-extracurricolare' },
        { label: 'Apprendistato professionalizzante', path: '/apprendistato-professionalizzante' },
      ],
    },
  ];
}
