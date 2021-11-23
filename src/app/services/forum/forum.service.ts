import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Forum} from "../../models/forum";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

basePath = 'https://fortlom-backend.herokuapp.com/api/v1/forums';
basePath2="https://fortlom-backend.herokuapp.com/api/v1/user"
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

// Create Forum
create(item: any,id:number): Observable<Forum> {
  return this.http.post<Forum>(`${this.basePath2}/${id}/forums`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get Forum by id
getById(id: any): Observable<Forum> {
  return this.http.get<Forum>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All Forums
getAll(): Observable<Forum> {
  return this.http.get<Forum>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update Forum
update(id: any, item: any): Observable<Forum> {
  return this.http.put<Forum>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete Forum
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}








}
