import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../domain/userDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveHistory } from '../domain/leaveHistory';
import { ApplyDenyService } from './apply-deny.service';
import { ManagerDashboardService } from './manager-dashboard.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  pageTitle=" Manager Dashboard"
  leaveId:number;
  leaveData:UserDetails[];
  empId:number;
 
  constructor(private route: ActivatedRoute,private applydenyService:ManagerDashboardService,private router:Router) {
    this.empId = +this.route.snapshot.paramMap.get("username")
 
   }

  ngOnInit() {

    this.applydenyService.getLeaveDeatils(this.empId).subscribe((data:UserDetails[])=>{
      console.log(data);
      this.leaveData=data;    
    },
    error=>alert(error)
    );
  }


  onSelected(leave:LeaveHistory){
    console.log(leave);
    this.leaveId=null;
    this.leaveId=leave.leaveId;
  }
   
  approveDney(){
    let url = '/approve-deny/'+this.leaveId;
    if(this.leaveId){
        this.router.navigateByUrl(url);
    }else{
      window.alert("Please select a table row.")
    }
    }
   
}
