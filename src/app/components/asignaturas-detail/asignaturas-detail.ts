import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from '../../models/asignatura';
import { AsignaturaService } from '../../services/asignatura';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asignaturas-detail',
  imports: [RouterLink],
  templateUrl: './asignaturas-detail.html',
  styleUrl: './asignaturas-detail.css',
})
export class AsignaturasDetail {

  //Definimos el input
 @Input() private id!: number;

 //Guardamos la asignatura aunque sea nulo al principio
 asignatura: Asignatura | undefined;

  //Injectamos el servicio con el constructor
  constructor(private service: AsignaturaService){}

  ngOnInit(): void {
    if(this.id){
      this.service.getAsignatura(this.id).subscribe({
        next: ( res )=> {
          this.asignatura = res;
        },
        error: (err) => {
          console.error("Error al obtener el alumno", err);
        }
      })
    }
  }
  
  

}
