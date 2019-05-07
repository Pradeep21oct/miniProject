import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { LeaveHistory } from '../domain/leaveHistory';


@Injectable({
  providedIn: 'root'
})
export class ApplyLeaveService {
  serverUrl:string='http://localhost:8080/applyLeave/'
  constructor(private http:HttpClient) { }

  
  getLeaveHistory(empId:number):Observable<LeaveHistory[]>{
    return this.http.get<LeaveHistory[]>(this.serverUrl+empId).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError)
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
