import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../models/matricula';
import { MatriculaService } from '../../services/matricula';

@Component({
  selector: 'app-matricula-aprobada-list',
  imports: [],
  templateUrl: './matricula-aprobada-list.html',
  styleUrl: './matricula-aprobada-list.css',
})
export class MatriculaAprobadaList implements OnInit{

  //Creamos lista vacia de matriculas
  matriculasAprobadas: Matricula[] = [];

  //Injectamos con el constructor
  constructor( private service: MatriculaService){};

  ngOnInit(): void {
    this.service.getMatriculas().subscribe({
      //Data es el array de todas las matriuclas del servidor
      next: (data) => {
        //Se hace dentro del subscribe porque es asincrono ( despues del subscribe es cuando tengo la data ( los datos ) ).
        this.matriculasAprobadas = data.filter(num => num.notaMedia > 8);
      },
      error: (err) => {
        console.error("Error al cargar la lista", err);
      }
    })
  }


}
