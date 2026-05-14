import { Component, OnInit } from '@angular/core';
import { Matricula } from '../../models/matricula';
import { MatriculaService } from '../../services/matricula';
import { ActivatedRoute, RouterLink } from "@angular/router";

@Component({
  selector: 'app-matricula-detail',
  imports: [RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css',
})
export class MatriculaDetail implements OnInit {

  id!: number;
  matricula?: Matricula;

  constructor(
    private service: MatriculaService,
    private route: ActivatedRoute
  ) { };

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']); 
      //Le asignamos el id del parámetro a la variable id
      //y buscamos si es un número válido

      if (this.id) {
        this.service.getMatricula(this.id).subscribe({
          next: (res) => {
            this.matricula = res;
          },
          error: (err) => {
            console.error("Error al obtener la matricula", err);
          }
        });
      }
    });
  }
}
