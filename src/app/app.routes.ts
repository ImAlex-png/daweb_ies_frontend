import { Routes } from '@angular/router';
import { AlumnoList } from './components/alumno-list/alumno-list';
import { AlumnoDetail } from './components/alumno-detail/alumno-detail';
import { Landinpage } from './components/landinpage/landinpage';
import { ProfesorList } from './components/profesor-list/profesor-list';
import { ProfesorDetails } from './components/profesor-details/profesor-details';

export const routes: Routes = [
    { path: "alumno", component: AlumnoList},
    { path: "alumno/:id", component: AlumnoDetail},
    { path: "", component: Landinpage},
    { path: "profesores", component: ProfesorList},
    { path:"profesores/:id", component: ProfesorDetails}
];
