import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { }

  private messages:string[]=[];
  isDispalyed=false;

  getMessage():string[]{
  return  this.messages;
  }

  addMessage(message:string):void{
    const currentDate=new Date();
    const newMessage=[...this.messages];
    newMessage.unshift(message+"at"+currentDate.toLocaleDateString());
    this.messages=newMessage;
  }
}
