import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asignatura } from '../models/asignatura';
import { environment } from '../../enviroments/enviroment.prod';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  
  private url = `${environment.apiUrl}/asignatura`; //Url del backend

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
