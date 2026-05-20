import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../models/matricula';
import { environment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class MatriculaService {

  private url = `${environment.apiUrl}/matricula`; //Url del backend

  constructor(
    private http: HttpClient
  ){};

  //Creamos las funciones de todas las matriculas y por ID de cada una

  //Todas las matriculas
  getMatriculas(): Observable<Matricula[]> {
    return this.http.get<Matricula[]>(this.url);
  }

  //Asignatura por ID
  getMatricula(id: number ): Observable<Matricula>{
    return this.http.get<Matricula>(`${this.url}/${id}`);
  }
  
}
