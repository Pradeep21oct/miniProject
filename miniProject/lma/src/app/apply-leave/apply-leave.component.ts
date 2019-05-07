import { Component, OnInit } from '@angular/core';
import { LeaveHistory } from '../domain/leaveHistory';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerDetailsService } from '../manager-details/manager-details.service';
import { ApplyLeaveService } from './apply-leave.service';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  leavehistry:LeaveHistory[]=[];
  empId:number;
 
  constructor(private router:Router,private route: ActivatedRoute,private applyLeaveService:ApplyLeaveService) {
    this.empId = +this.route.snapshot.paramMap.get("username")
    this.applyLeaveService.getLeaveHistory(this.empId).subscribe(userll=>this.leavehistry=userll,error=>console.log(error));
    console.log(this.leavehistry);
   
   } 
   applyNewLeave(){
    this.router.navigate(['/applyLeave',this.empId])
   }
  ngOnInit() {
    
  }
  pageTitle="My Leave Applications!!"
}
