import { Directive, ElementRef, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFadeInOnScroll]',
  host: {
    class: 'fade-in-on-scroll',
  },
})
export class FadeInOnScrollDirective {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) {
        return;
      }

      const element = this.elementRef.nativeElement;

      if (!('IntersectionObserver' in window)) {
        element.classList.add('is-visible');
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              element.classList.add('is-visible');
              observer.unobserve(element);
            }
          }
        },
        { threshold: 0.15 },
      );

      observer.observe(element);
    });
  }
}
