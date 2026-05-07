import { Component, computed, inject, input, signal } from '@angular/core';
import { AlumnoService } from '../../services/alumno';
import { Alumno } from '../../models/alumno';

@Component({
  selector: 'app-alumno-detail',
  imports: [],
  templateUrl: './alumno-detail.html',
  styleUrl: './alumno-detail.css',
})
export class AlumnoDetail {

  //Injectamos lo que necesitemos ( Ruta para el id del AlumnoService )
  private service = inject(AlumnoService);

  //Convertimos el parametro "id" en una Signal reactiva
  id = input.required<number>();

  //2. Creamos una señal vacia para guardar al alumno
  alumno = signal<Alumno | null>(null);

  //Al cargar, pedimos los datos y los guardamos en la señal
  ngOnInit() {
    this.service.getAlumno(this.id()).subscribe(res => {this.alumno.set(res);});
  }
}
