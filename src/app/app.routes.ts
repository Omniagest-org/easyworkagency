import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ChiSiamo } from './pages/chi-siamo/chi-siamo';
import { Contatti } from './pages/contatti/contatti';
import { FormazioneDipendenti } from './pages/formazione-dipendenti/formazione-dipendenti';
import { CorsiSicurezzaLavoro } from './pages/corsi-sicurezza-lavoro/corsi-sicurezza-lavoro';
import { ContrattoApprendistato } from './pages/contratto-apprendistato/contratto-apprendistato';
import { RicercaSelezionePersonale } from './pages/ricerca-selezione-personale/ricerca-selezione-personale';
import { ProgettazioneBandi } from './pages/progettazione-bandi/progettazione-bandi';
import { TirocinioExtracurricolareAziende } from './pages/tirocinio-extracurricolare-aziende/tirocinio-extracurricolare-aziende';
import { ServizioOrientamentoProfessionale } from './pages/servizio-orientamento-professionale/servizio-orientamento-professionale';
import { BilancioCompetenze } from './pages/bilancio-competenze/bilancio-competenze';
import { TirocinioExtracurricolare } from './pages/tirocinio-extracurricolare/tirocinio-extracurricolare';
import { ApprendistatoProfessionalizzante } from './pages/apprendistato-professionalizzante/apprendistato-professionalizzante';
import { FinanzaAgevolata } from './pages/finanza-agevolata/finanza-agevolata';
import { ParGol } from './pages/par-gol/par-gol';
import { CorsoParGol } from './pages/corso-par-gol/corso-par-gol';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { CookiePolicy } from './pages/cookie-policy/cookie-policy';
import { CreaIlTuoCv } from './pages/crea-il-tuo-cv/crea-il-tuo-cv';

export const routes: Routes = [
  { path: '', component: Home, title: 'Easy Work – Agenzia per il lavoro' },
  { path: 'chi-siamo', component: ChiSiamo, title: 'Chi Siamo – Easy Work' },
  { path: 'contatti', component: Contatti, title: 'Contatti – Easy Work' },
  {
    path: 'formazione-dipendenti',
    component: FormazioneDipendenti,
    title: 'Formazione Dipendenti – Easy Work',
  },
  {
    path: 'corsi-per-la-sicurezza-sul-lavoro',
    component: CorsiSicurezzaLavoro,
    title: 'Corsi per la sicurezza sul lavoro – Easy Work',
  },
  {
    path: 'contratto-di-apprendistato',
    component: ContrattoApprendistato,
    title: 'Contratto di apprendistato – Easy Work',
  },
  {
    path: 'ricerca-e-selezione-del-personale',
    component: RicercaSelezionePersonale,
    title: 'Ricerca e Selezione del Personale – Easy Work',
  },
  {
    path: 'progettazione-e-bandi',
    component: ProgettazioneBandi,
    title: 'Progettazione e Bandi – Easy Work',
  },
  {
    path: 'tirocinio-extracurricolare-aziende',
    component: TirocinioExtracurricolareAziende,
    title: 'Tirocinio Extracurricolare (Aziende) – Easy Work',
  },
  {
    path: 'servizio-di-orientamento-professonale',
    component: ServizioOrientamentoProfessionale,
    title: 'Servizio di Orientamento Professionale – Easy Work',
  },
  {
    path: 'bilancio-delle-competenze',
    component: BilancioCompetenze,
    title: 'Bilancio delle Competenze – Easy Work',
  },
  {
    path: 'tirocinio-extracurricolare',
    component: TirocinioExtracurricolare,
    title: 'Tirocinio Extracurricolare – Easy Work',
  },
  {
    path: 'apprendistato-professionalizzante',
    component: ApprendistatoProfessionalizzante,
    title: 'Apprendistato Professionalizzante – Easy Work',
  },
  {
    path: 'finanza-agevolata',
    component: FinanzaAgevolata,
    title: 'Finanza Agevolata – Easy Work',
  },
  {
    path: 'par-gol',
    component: ParGol,
    title: 'PAR GOL – Easy Work',
  },
  {
    path: 'corso-par-gol/:slug',
    component: CorsoParGol,
    title: 'Corso PAR GOL – Easy Work',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
    title: 'Privacy Policy – Easy Work',
  },
  {
    path: 'cookie-policy',
    component: CookiePolicy,
    title: 'Cookie Policy – Easy Work',
  },
  {
    path: 'manda-il-tuo-cv',
    component: CreaIlTuoCv,
    title: 'Manda il tuo CV – Easy Work',
  },
];
