import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeaveHistory } from 'src/app/domain/leaveHistory';
import { ApplyDenyService } from '../apply-deny.service';

@Component({
  selector: 'app-approve-deny',
  templateUrl: './approve-deny.component.html',
  styleUrls: ['./approve-deny.component.css']
})
export class ApproveDenyComponent implements OnInit {
  pageTitle="Approve Deny the Leave !!"
  leaveDetails:LeaveHistory;
  updatedLeaveDetails:LeaveHistory;

  empId:number;

  ngOnInit() {
    this.applyDenyService.getLeaveData(this.route.snapshot.params["leaveId"])
                        .subscribe((data:LeaveHistory)=>this.leaveDetails=data,error=>alert(error));
  }
  constructor(private router:Router,private route: ActivatedRoute,private applyDenyService:ApplyDenyService) {
    this.empId = +this.route.snapshot.paramMap.get("username")
     this.leaveDetails=new LeaveHistory;
   } 
  
   approve(id:number){
     this.updatedLeaveDetails=new LeaveHistory;
     this.updatedLeaveDetails=this.leaveDetails;
     this.updatedLeaveDetails.leaveId=id;
     this.applyDenyService.approveLeave(this.updatedLeaveDetails)
                          .subscribe(ld=>{
                            if(ld==null) {alert('Employee leave already Apprved');}
                            else{
                              this.leaveDetails=ld;
                              alert('Leave was '+ld.leaveStatus);
                            }
                          },
                          error=>alert(error)
                        //  ()=>{this.router.navigateByUrl("/mgrDashboard/"+this.leaveDetails.empId)}
                         );
   }

   deny(id:number){
    this.updatedLeaveDetails=new LeaveHistory;
    this.updatedLeaveDetails=this.leaveDetails;
    this.updatedLeaveDetails.leaveId=id;
    this.applyDenyService.denyLeave(this.updatedLeaveDetails)
                         .subscribe(ld=>{
                           if(ld==null) {alert('Employee leave already  denied');}
                           else{
                             this.leaveDetails=ld;
                             alert('Leave was '+ld.leaveStatus);
                           }
                         },
                         error=>alert(error),
                         ()=>{this.router.navigateByUrl("/mgrDashboard/"+this.leaveDetails.empId)}
                        );
  }

  cencle(){
    this.router.navigate(['/mgrDashboard',this.leaveDetails.empId])
  }
}
