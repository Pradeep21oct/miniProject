import { Injectable } from '@angular/core';
import { UserDetails } from '../domain/userDetail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManagerDetailsService {
  serverUrl:string='http://localhost:8080/mgrDetails/'
  constructor(private http:HttpClient) { }

  getManagerDeatils(empId:number):Observable<UserDetails>{
    return this.http.get<UserDetails>(this.serverUrl+empId).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError)
    );
  
  }

  private handleError(err: HttpErrorResponse) {
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
}
