import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Event_fanatic} from "../../models/event_fanatic";

@Injectable({
  providedIn: 'root'
})
export class Event_fanaticService {

basePath = 'http://localhost:3000/Event_Fanatic';

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

// Get EventFanatic by id
getById(id: any): Observable<Event_fanatic> {
  return this.http.get<Event_fanatic>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All EventFanatic
getAll(): Observable<Event_fanatic> {
  return this.http.get<Event_fanatic>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update EventFanatic
update(id: any, item: any): Observable<Event_fanatic> {
  return this.http.put<Event_fanatic>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete EventFanatic
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

}
