import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../domain/userDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerDetailsService } from './manager-details.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
user:UserDetails
empId:number;

constructor(private router:Router,private route: ActivatedRoute,private managerDetailsService:ManagerDetailsService) {
  this.empId = +this.route.snapshot.paramMap.get("username")
 
 } 

  ngOnInit() {
    this.managerDetailsService.getManagerDeatils(this.empId).subscribe(user=>this.user=user,error=>console.log(error));
    console.log(this.user);
  }
  pageTitle="Manager Details.!!"
}
