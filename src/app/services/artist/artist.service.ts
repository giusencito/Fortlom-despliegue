import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Artist} from "../../models/artist";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

basePath = 'https://fortlom-backend.herokuapp.com/api/v1/artists';
basePath2 = 'http://localhost:3000/Artist'

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

// Create Artist
create(item: any): Observable<Artist> {
  return this.http.post<Artist>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get Artist by id
getById(id: any): Observable<Artist> {
  return this.http.get<Artist>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All Artists
getAll(): Observable<Artist> {
  return this.http.get<Artist>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update Artist
update(id: any, item: any): Observable<Artist> {
  return this.http.put<Artist>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete Artist
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

}
