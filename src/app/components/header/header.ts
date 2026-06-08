import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true,
})
export class Header {
  protected readonly menuOpen = signal(false);
  protected readonly openDropdown = signal<string | null>(null);

  protected readonly navLinks = [
    { label: 'Chi siamo', path: '/chi-siamo' },
    {
      label: 'Servizi per le aziende',
      children: [
        { label: 'Formazione dipendenti', path: '/formazione-dipendenti' },
        {
          label: 'Corsi per la sicurezza sul lavoro',
          path: '/corsi-per-la-sicurezza-sul-lavoro',
        },
        { label: 'Contratto di apprendistato', path: '/contratto-di-apprendistato' },
        {
          label: 'Ricerca e Selezione del Personale',
          path: '/ricerca-e-selezione-del-personale',
        },
        { label: 'Progettazione e Bandi', path: '/progettazione-e-bandi' },
        { label: 'Tirocinio Extracurricolare', path: '/tirocinio-extracurricolare-aziende' },
      ],
    },
    {
      label: 'Servizi per i cittadini',
      children: [
        { label: 'Manda il tuo CV', path: '/manda-il-tuo-cv' },
        {
          label: 'Servizio di Orientamento Professionale',
          path: '/servizio-di-orientamento-professonale',
        },
        { label: 'Bilancio delle Competenze', path: '/bilancio-delle-competenze' },
      ],
    },
    {
      label: 'Politiche Attive',
      children: [
        {
          label: 'Tirocinio Extracurricolare',
          path: '/tirocinio-extracurricolare',
        },
        {
          label: 'Apprendistato Professionalizzante',
          path: '/apprendistato-professionalizzante',
        },
      ],
    },
    { label: 'Finanza agevolata', path: '/finanza-agevolata' },
    { label: 'Par GOL', path: '/par-gol' },
    { label: 'Contatti', path: '/contatti' },
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.openDropdown.set(null);
  }

  protected toggleDropdown(label: string): void {
    this.openDropdown.update((current) => (current === label ? null : label));
  }
}
