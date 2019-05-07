import { Injectable } from '@angular/core';
import {User} from './user'
import { MessageServiceService } from '../message/message-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  currentUser: User;
  redirectUrl:string;
   islogin:boolean=false;
  constructor(private messageService:MessageServiceService) { }
  isLoggedIn():boolean{
    console.log("serviec "+this.islogin);
    return this.islogin;

  }
  doLogin(userName:string,password:string):boolean{
   return this.islogin=true;
 // this.messageService.addMessage(`User: ${this.currentUser.userName} logged in`);
  }

  logOut():void{
    this.currentUser=null;
    this.islogin=false;
  }
}
