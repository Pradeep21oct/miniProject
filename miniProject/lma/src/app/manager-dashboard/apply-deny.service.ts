
import { LeaveHistory } from '../domain/leaveHistory';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { UserDetails } from '../domain/userDetail';

@Injectable({
  providedIn: 'root'
})

 
export class ApplyDenyService {
  BASE_URL:string= 'http://localhost:8080';
   baseUrl:string=this.BASE_URL;
   getLeaveDetailsUrl:string=this.baseUrl+"/leave/details/";
   postApproveLeaveUrl:string=this.baseUrl+"/leave/approve/";
   postDenyLeaveUrl:string=this.baseUrl+"/leave/deny/";
   getPendingLeaveUrl:string=this.baseUrl+"/leave/pending/";

  constructor(private http:HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Cache-Control': 'no-cache'
      })
  };
getLeaveData(id:number):Observable<LeaveHistory>{
   return this.http.get<LeaveHistory>(this.getLeaveDetailsUrl+id) .pipe(
    tap(data=>console.log("console data=>"+JSON.stringify(data))),
    catchError(this.handleError)
  );
 }

 approveLeave( leave:LeaveHistory): Observable<any>{
  console.log("service   ************"+JSON.stringify(leave));
 return this.http.post<string>(this.postApproveLeaveUrl,leave,this.httpOptions)
  .pipe(catchError(this.handleError));

}


  denyLeave(leave:LeaveHistory){
  return this.http.post<LeaveHistory>(this.postDenyLeaveUrl,leave,this.httpOptions)
                  .pipe(catchError(this.handleError));
}

getAllPendingLeave(){
  return this.http.get<UserDetails[]>(this.getPendingLeaveUrl)
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
