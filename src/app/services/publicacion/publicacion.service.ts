import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Publicacion} from "../../models/publicacion";

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

basePath = 'https://fortlom-backend.herokuapp.com/api/v1/publications';
basepath2= 'https://fortlom-backend.herokuapp.com/api/v1/artists';

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

constructor(private http: HttpClient) { }

handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    console.log(`An error occurred: ${error.error.message} `);
  }
  else {
    console.error(
      `Backend returned code ${error.status}, body was: ${error.error}`
    );
  }

  return throwError('Something happened with request, please try again later');
}

// Create Publicacion
create(item: any,id:number): Observable<Publicacion> {
  return this.http.post<Publicacion>(`${this.basepath2}/${id}/publications`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get Publicacion by id
getById(id: any): Observable<Publicacion> {
  return this.http.get<Publicacion>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All Publicaciones
getAll(): Observable<Publicacion> {
  return this.http.get<Publicacion>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update Publicacion
update(id: any, item: any): Observable<Publicacion> {
  return this.http.put<Publicacion>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete Publicacion
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

}
