import { Component, Input, OnInit } from '@angular/core';
import { ProfesorService } from '../../services/profesor';
import { Profesor } from '../../models/profesor';

@Component({
  selector: 'app-profesor-details',
  imports: [],
  templateUrl: './profesor-details.html',
  styleUrl: './profesor-details.css',
})
export class ProfesorDetails implements OnInit{

  //Definimos el input que vamos a recibir
  @Input() private id!: number;

  //Guardamos el profesor ( aunque se nulo al principio )
  profesor: Profesor | undefined;

  //Injectamos por constructor
  constructor(private service: ProfesorService ){}

  ngOnInit(): void {
    if(this.id){
      this.service.getProfesor(this.id).subscribe({
        next: (res) => {
          this.profesor = res;
        },
        error: (err) => {
          console.error("Error al obtener el alumno", err);
        }
      })
    }
  }


}
