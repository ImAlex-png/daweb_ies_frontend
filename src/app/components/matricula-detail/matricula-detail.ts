import { Component, Input } from '@angular/core';
import { Matricula } from '../../models/matricula';
import { MatriculaService } from '../../services/matricula';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-matricula-detail',
  imports: [RouterLink],
  templateUrl: './matricula-detail.html',
  styleUrl: './matricula-detail.css',
})
export class MatriculaDetail {
@Input() private idMat!: number

matricula: Matricula | undefined;

constructor(private service: MatriculaService){};

ngOnInit(): void {
  if(this.idMat){
    this.service.getMatricula(this.idMat).subscribe({
      next: ( res ) => {
        this.matricula = res;
      },
      error: ( err ) => {
        console.error("Error al obtener la matricula")
      }
    })
  }
}
}
