import { Routes } from '@angular/router';
import { AlumnoList } from './components/alumno-list/alumno-list';
import { AlumnoDetail } from './components/alumno-detail/alumno-detail';
import { Landinpage } from './components/landinpage/landinpage';
import { ProfesorList } from './components/profesor-list/profesor-list';
import { ProfesorDetails } from './components/profesor-details/profesor-details';
import { AsignaturasDetail } from './components/asignaturas-detail/asignaturas-detail';
import { AsignaturasList } from './components/asignaturas-list/asignaturas-list';
import { MatriculaList } from './components/matricula-list/matricula-list';
import { MatriculaDetail } from './components/matricula-detail/matricula-detail';
import { MatriculaAprobadaList } from './components/matricula-aprobada-list/matricula-aprobada-list';
import { AlumnoIdAsignaturaList } from './components/alumno-id-asignatura-list/alumno-id-asignatura-list';

export const routes: Routes = [
    { path: "alumno", component: AlumnoList},
    { path: "alumno/:id", component: AlumnoDetail},
    { path: "", component: Landinpage},
    { path: "profesores", component: ProfesorList},
    { path:"profesores/:id", component: ProfesorDetails},
    { path:"asignaturas/:id", component: AsignaturasDetail},
    { path:"asignaturas", component: AsignaturasList},
    { path:"matriculas", component: MatriculaList },
    { path: "matriculas/:id", component: MatriculaDetail},
    { path: "matriculasAprobadas", component: MatriculaAprobadaList},
    { path: "asignaturas/:id/alumnos", component: AlumnoIdAsignaturaList }
];

