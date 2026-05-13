import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatriculaService } from '../../services/matricula';
import { Matricula } from '../../models/matricula';

@Component({
  selector: 'app-matricula-list',
  imports: [RouterLink],
  templateUrl: './matricula-list.html',
  styleUrl: './matricula-list.css',
})
export class MatriculaList implements OnInit{

  //Declaramos el array
  matriculas: Matricula[] = [];

  //Injectamos con el constructor
  constructor( private service: MatriculaService){};

  ngOnInit(): void {
    this.service.getMatriculas().subscribe({
      next: (data) => {
        this.matriculas = data
      }, 
      error: (err) => {
        console.error("Error al cargar la lista", err);
      }
    })
  }

}
