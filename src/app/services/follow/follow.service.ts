import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Follow} from "../../models/follow";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

basePath = 'http://localhost:3000/Follow';

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

// Create Follow
create(item: any): Observable<Follow> {
  return this.http.post<Follow>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get Follow by id
getById(id: any): Observable<Follow> {
  return this.http.get<Follow>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All Follows
getAll(): Observable<Follow> {
  return this.http.get<Follow>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update Follow
update(id: any, item: any): Observable<Follow> {
  return this.http.post<Follow>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete Follow
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

}
