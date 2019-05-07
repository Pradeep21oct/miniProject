import { Component } from '@angular/core';
import { AuthServiceService } from './login/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lmp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Leave Management Application';
constructor(private router:Router,private authService:AuthServiceService){};
  isLoggedIn():boolean{
    console.log("Hello"+this.authService.isLoggedIn());
      return this.authService.isLoggedIn();
      
  }

  getUser():string{
    if(this.authService.currentUser){
      return this.authService.currentUser.userName;
    }
    return '';
  }
  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/home');
  }
}
