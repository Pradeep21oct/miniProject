import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, } from '@angular/common/http';
import { Leave } from '../domain/leave';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewLeaveApplicationService {
  serverUrls:string='http://localhost:8080/applyLeave/'
  constructor(private http :HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
     'Cache-Control': 'no-cache'
      })
  };
 
  applyLeave(empId:number, leave:Leave): Observable<any>{
    console.log("service   ************"+JSON.stringify(leave));
   return this.http.post<string>(this.serverUrls,leave,this.httpOptions)
    .pipe(catchError(this.handleError));

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
