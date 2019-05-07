import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { AuthServiceService } from './auth-service.service';
@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
pageTitle:string='Login In';
errorMessage:string;
userName:string;
password:string;

  constructor(private authService:AuthServiceService,private router:Router) {
    

   }

  ngOnInit() {

  }

  doLogin(form:NgForm):void{

     
   //if(loginForm && loginForm.valid){
    // const userName=loginForm.form.value.username;
     //const password=loginForm.form.value.password;
     console.log(form);
     this.authService.doLogin(this.userName,this.password)
       this.router.navigate(['dashboard',this.userName]);
      console.log(this.userName);
  // }else{
    // this.errorMessage='Please Enter user name and password.';
   //}
  }

  doCancel(): void{
    this.router.navigateByUrl('/home');
  }
}
