import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  
  private url = "http://localhost:8081/asignatura"; //Url del backend

  constructor(
    private http: HttpClient
  ){};

  //Creamos las funciones de todas las asignaturas y la de por ID

  //Todas las asignaturas
  getAsignaturas(): Observable<Asignatura[]> {
    return this.http.get<Asignatura[]>(this.url)
  }

  //Asignatura por ID
  getAsignatura(id: number): Observable<Asignatura>{
    return this.http.get<Asignatura>(`${this.url}/${id}`);
  }
}
