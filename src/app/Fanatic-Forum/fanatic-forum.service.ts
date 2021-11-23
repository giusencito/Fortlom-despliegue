import { Forum } from './Fanatic-Forummodel';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import { FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms'
@Injectable({
  providedIn: 'root'
})
export class FanaticForumService {
  // Students Endpoint
  basePath = 'https://fortlom-backend.herokuapp.com/api/v1/forums';
  basePath2="https://fortlom-backend.herokuapp.com/api/v1/user"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }









  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  // Create Student
  create(item: any,id:number): Observable<Forum> {
    return this.http.post<Forum>(`${this.basePath2}/${id}/forums`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get Student by id
  getById(id: any): Observable<Forum> {
    return this.http.get<Forum>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Get All Students
  getAll(): Observable<Forum> {
    return this.http.get<Forum>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Update Student
  update(id: any, item: any): Observable<Forum> {
    return this.http.put<Forum>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  // Delete Student
  delete(id: any) {
    return this.http.delete(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }




}































