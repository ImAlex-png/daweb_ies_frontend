import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'alumno',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'profesores',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'asignaturas',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'matriculas',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'matriculasAprobadas',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
