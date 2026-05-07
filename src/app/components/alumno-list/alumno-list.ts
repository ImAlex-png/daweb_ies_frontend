import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlumnoService } from '../../services/alumno';

@Component({
  selector: 'app-alumno-list',
  imports: [AsyncPipe], // Solo necesitamos el AsyncPipe
  templateUrl: './alumno-list.html',
  styleUrl: './alumno-list.css',
})
export class AlumnoList {

  alumnos$ = inject(AlumnoService).getAlumnos();

}
