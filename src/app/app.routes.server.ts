import { RenderMode, ServerRoute } from '@angular/ssr';
import { PAR_GOL_COURSES } from './pages/corso-par-gol/corso-par-gol.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'corso-par-gol/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return PAR_GOL_COURSES.map((course) => ({ slug: course.slug }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
