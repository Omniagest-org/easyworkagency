import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-crea-il-tuo-cv',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, FadeInOnScrollDirective],
  templateUrl: './crea-il-tuo-cv.html',
  styleUrl: './crea-il-tuo-cv.scss',
})
export class CreaIlTuoCv {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);
  private readonly toastr = inject(ToastrService);

  protected form: FormGroup;
  protected loading = false;
  protected success = false;
  protected error: string | null = null;
  protected selectedFile: File | null = null;

  constructor() {
    const pageTitle = 'Crea il tuo CV – Easy Work';
    const description = 'Inviaci la tua autocandidatura e carica il tuo CV per entrare in contatto con Easy Work.';
    const canonicalUrl = 'https://www.easyworkagency.com/manda-il-tuo-cv';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl(canonicalUrl);

    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      cognome: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.maxLength(50)]],
      data_nascita: [''],
      luogo_nascita: ['', [Validators.maxLength(100)]],
      sesso: [''],
      domicilio: [''],
      codice_fiscale: ['', [Validators.maxLength(16)]],
      titolo_studio: ['', [Validators.maxLength(255)]],
      profilo_professionale: ['', [Validators.maxLength(255)]],
      esperienze_lavorative: [''],
      note: [''],
      privacy: [false, [Validators.requiredTrue]],
    });
  }

  protected onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  protected onSubmit(): void {
    if (this.form.invalid || this.loading) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = null;
    this.success = false;

    const formData = new FormData();
    Object.keys(this.form.value).forEach(key => {
      if (key !== 'privacy' && this.form.value[key]) {
        formData.append(key, this.form.value[key]);
      }
    });

    if (this.selectedFile) {
      formData.append('allegati[]', this.selectedFile);
    }

    // Aggiungiamo il token CSRF se richiesto dal backend nel body (alternativo all'header)
    formData.append('csrf_token', environment.autocandidatureApiToken);

    const headers = new HttpHeaders({
      'X-Csrf-Token': environment.autocandidatureApiToken
    });

    const url = `https://${environment.backendHost}${environment.backendUrl}`;

    this.http.post(url, formData, { headers }).subscribe({
      next: (response: any) => {
        if (response.success) {
          this.success = true;
          this.form.reset();
          this.selectedFile = null;
          this.toastr.success('I tuoi dati sono stati inviati correttamente.', 'Candidatura inviata');
        } else {
          this.error = response.error || 'Si è verificato un errore durante l\'invio.';
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Submit error:', err);
        this.error = 'Errore di connessione con il server. Riprova più tardi.';
        this.loading = false;
      }
    });
  }
}
