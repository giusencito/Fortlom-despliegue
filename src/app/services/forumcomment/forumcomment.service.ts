import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Forumcomment} from "../../models/forumcomment";

@Injectable({
  providedIn: 'root'
})
export class ForumcommentService {

basePath = 'http://localhost:3000/ForumComment';
basepathcomentsforforoum='http://localhost:3000/Forum'

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

// Create ForumComment
create(item: any): Observable<Forumcomment> {
  return this.http.post<Forumcomment>(this.basePath, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get ForumComment by id
getById(id: any): Observable<Forumcomment> {
  return this.http.get<Forumcomment>(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Get All ForumComments
getAll(): Observable<Forumcomment> {
  return this.http.get<Forumcomment>(this.basePath, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Update ForumComment
update(id: any, item: any): Observable<Forumcomment> {
  return this.http.put<Forumcomment>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}

// Delete ForumComment
delete(id: any) {
  return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
}


getallcommentsperforum(id:number){

  return this.http.get<Forumcomment>(`${this.basepathcomentsforforoum}/${id}/ForumComment`, this.httpOptions)
  .pipe(
    retry(2),
    catchError(this.handleError));


}










}
