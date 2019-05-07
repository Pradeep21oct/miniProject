import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserDetails } from '../domain/userDetail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ManagerDashboardService {

  constructor(private http:HttpClient) { }

  serverUrl:string='http://localhost:8080/mDashboard/'
  getLeaveDeatils(empId:number):Observable<UserDetails[]>{
    return this.http.get<UserDetails[]>(this.serverUrl+empId)
    .pipe(
          tap(data=>console.log("console data=>"+JSON.stringify(data))),
          catchError(this.handleError)
        );
  }

  private handleError(err: HttpErrorResponse) {
    
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
