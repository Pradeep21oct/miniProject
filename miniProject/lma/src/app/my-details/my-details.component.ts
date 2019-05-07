import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from './user-details.service';
import { UserDetails } from '../domain/userDetail';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
   templateUrl: './my-details.component.html'
  
})
export class MyDetailsComponent implements OnInit {
   user: UserDetails;
   empId:number;
  constructor(private router:Router,private route: ActivatedRoute,private userDetailsService:UserDetailsService) {
    this.empId = +this.route.snapshot.paramMap.get("username")
   
   }
 
  ngOnInit() {
    this.userDetailsService.getUserDetails(this.empId).subscribe(user=>this.user=user)
    console.log(this.user);
  }
  pageTitle="My Details!!"

  
}
