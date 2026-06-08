import { Component, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FadeInOnScrollDirective } from '../../shared/directives/fade-in-on-scroll.directive';
import { SeoService } from '../../shared/services/seo';
import { PAR_GOL_COURSES, ParGolCourse } from './corso-par-gol.data';

@Component({
  selector: 'app-corso-par-gol',
  imports: [RouterLink, FadeInOnScrollDirective],
  templateUrl: './corso-par-gol.html',
  styleUrl: './corso-par-gol.scss',
})
export class CorsoParGol {
  private readonly route = inject(ActivatedRoute);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly seo = inject(SeoService);

  protected readonly course = toSignal(
    this.route.paramMap.pipe(
      map((params) => {
        const slug = params.get('slug') ?? '';
        return PAR_GOL_COURSES.find((c) => c.slug === slug) ?? null;
      }),
    ),
    { initialValue: null as ParGolCourse | null },
  );

  protected readonly showPartner = signal(false);

  protected togglePartner(): void {
    this.showPartner.update((value) => !value);
  }

  constructor() {
    this.route.paramMap
      .pipe(map((params) => PAR_GOL_COURSES.find((c) => c.slug === params.get('slug')) ?? null))
      .subscribe((course) => {
        this.showPartner.set(false);
        this.updateSeo(course);
      });
  }

  private updateSeo(course: ParGolCourse | null): void {
    const pageTitle = course ? `${course.title} – Corso PAR GOL – Easy Work` : 'Corso PAR GOL – Easy Work';
    const description = course
      ? `${course.title}: corso PAR GOL gratuito di ${course.duration}, livello EQF ${course.eqf}. ${course.description.slice(0, 140)}…`
      : 'Scopri i corsi PAR GOL gratuiti di Easy Work per il reinserimento nel mondo del lavoro.';

    this.title.setTitle(pageTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
    const canonicalUrl = `https://www.easyworkagency.com/corso-par-gol/${course?.slug ?? ''}`;
    this.meta.updateTag({ property: 'og:url', content: canonicalUrl });
    this.meta.updateTag({ property: 'og:image', content: '/logo_orizzontale.png' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });

    this.seo.setCanonicalUrl(canonicalUrl);
  }
}
