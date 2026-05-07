import { Routes } from '@angular/router';
import { AlumnoList } from './components/alumno-list/alumno-list';
import { AlumnoDetail } from './components/alumno-detail/alumno-detail';

export const routes: Routes = [
    { path: "alumno", component: AlumnoList},
    { path: "alumno/:id", component: AlumnoDetail},
];
