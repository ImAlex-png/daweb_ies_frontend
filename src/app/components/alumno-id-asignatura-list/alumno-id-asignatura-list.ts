import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from '../../models/asignatura';
import { Matricula } from '../../models/matricula';
import { AsignaturaService } from '../../services/asignatura';
import { MatriculaService } from '../../services/matricula';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alumno-id-asignatura-list',
  imports: [RouterLink],
  templateUrl: './alumno-id-asignatura-list.html',
  styleUrl: './alumno-id-asignatura-list.css',
})
export class AlumnoIdAsignaturaList implements OnInit {

  //Definimos el input
  @Input() id!: number;


  //Guardamos la asignatura y las matriculas filtradas
  asignatura: Asignatura | undefined;

  matriculasFiltradas: Matricula[] = [];

  //Injectamos el servicio con el constructor
  constructor(
    private asignaturaService: AsignaturaService,
    private matriculaService: MatriculaService
  ) {}

  ngOnInit(): void {
    if (this.id) {
      
      // Obtener los detalles de la asignatura
      this.asignaturaService.getAsignatura(this.id).subscribe({
        next: (res) => {
          this.asignatura = res;
        },
        error: (err) => {
          console.error("Error al obtener la asignatura", err);
        }
      });

      // Obtener todas las matriculas y filtrar por el ID de la asignatura
      this.matriculaService.getMatriculas().subscribe({
        next: (data) => {
          this.matriculasFiltradas = data.filter(m => m.asignatura && m.asignatura.id === Number(this.id));
        },
        error: (err) => {
          console.error("Error al obtener las matriculas", err);
        }
      });
    }
  }
}

