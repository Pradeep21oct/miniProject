import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
username:string;
  constructor(private router:Router,private route: ActivatedRoute) { 
    this.username = this.route.snapshot.paramMap.get("username")
    console.log("User name"+this.username)
  }

  ngOnInit() {
  }

  pageTitle=" Enployee Dashboard"

  getDetails(){
    this.router.navigate(['/empDetails',this.username])
   }

   getManagerDetails(){
    this.router.navigate(['/mgrDetails',this.username])
   }

   
  leaveHistory(){
    this.router.navigate(['/leaveHistory',this.username])
   }

   
   getManagerDashboard(){
    this.router.navigate(['/mgrDashboard',this.username])
   }
}
