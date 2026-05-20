import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesor } from '../models/profesor';
import { environment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  private url = `${environment.apiUrl}/profesor`;

  constructor(
    private http: HttpClient
  ){};

  //Creamos la funcion para el  endpoint de profesor por ID
  getProfesor(id: number): Observable<Profesor>{
    return this.http.get<Profesor>(`${this.url}/${id}`);
  }

  //Endpoint de profesores enteros
  getProfesores(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(this.url);
  }
}
