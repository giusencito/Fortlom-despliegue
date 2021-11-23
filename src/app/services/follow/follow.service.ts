import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Follow} from "../../models/follow";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

basePath = 'https://fortlom-backend.herokuapp.com/api/v1/follows';
basePatn2='https://fortlom-backend.herokuapp.com/api/v1/fanatics';

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
create(fanaticid:number,artistid:number,item: any): Observable<Follow> {
  return this.http.post<Follow>(`${this.basePatn2}/${fanaticid}/artists/${artistid}/follows`, JSON.stringify(item), this.httpOptions)
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
  return this.http.put<Follow>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
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
