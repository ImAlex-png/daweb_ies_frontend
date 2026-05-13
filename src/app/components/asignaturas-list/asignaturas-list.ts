import { Component, OnInit } from '@angular/core';
import { Asignatura } from '../../models/asignatura';
import { AsignaturaService } from '../../services/asignatura';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-asignaturas-list',
  imports: [RouterLink],
  templateUrl: './asignaturas-list.html',
  styleUrl: './asignaturas-list.css',
})
export class AsignaturasList implements OnInit{

  //Declaramos array normal
  asignaturas: Asignatura[] = [];

  //Injectamos el servicio a traves del CONSTRUCTOR 
  constructor( private service: AsignaturaService){};

  ngOnInit(): void {
    this.service.getAsignaturas().subscribe({
      next: (data ) => {
        //Guardamos datos en array
        this.asignaturas = data
      },
      error: (err) => {
        console.error("Error al cargar la lista", err);
      }
    })
  }


}
