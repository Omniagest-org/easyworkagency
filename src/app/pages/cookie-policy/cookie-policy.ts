import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../shared/services/seo';

@Component({
  selector: 'app-cookie-policy',
  imports: [RouterLink],
  templateUrl: './cookie-policy.html',
  styleUrl: './cookie-policy.scss',
})
export class CookiePolicy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  constructor() {
    const pageTitle = 'Cookie Policy – Easy Work';
    const description = 'Informativa sui cookie di Easy Work Srl.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'noindex, follow' });

    this.seo.setCanonicalUrl('https://www.easyworkagency.com/cookie-policy');
  }
}
