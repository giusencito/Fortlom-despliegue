import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Usuario} from "../../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

basePath = 'https://fortlom-backend.herokuapp.com/api/v1/users';
basePath2 = 'http://localhost:3000/Usuario';

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

// Create Usuario
create(item: any): Observable<Usuario> {
  console.log(JSON.stringify(item))
  return this.http.post<Usuario>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get Usuario by id
getById(id: any): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All Usuarios
 getAll(): Observable<Usuario> {
  return this.http.get<Usuario>(this.basePath, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));
}

// Update Usuario
update(id: any, item: any): Observable<Usuario> {

  return this.http.put<Usuario>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));



}

// Delete Usuario
delete(id: any) {
  return this.http.delete(`${this.basePath2}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

}
