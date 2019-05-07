import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, FormControl, NgForm} from '@angular/forms';
import { Leave } from '../domain/leave';
import { Router, ActivatedRoute } from '@angular/router';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { NewLeaveApplicationService } from './new-leave-application.service';

@Component({
  selector: 'app-new-leave-application',
  templateUrl: './new-leave-application.component.html',
  styleUrls: ['./new-leave-application.component.css']
})
export class NewLeaveApplicationComponent implements OnInit {
  submitted = false;
  leaveForm: FormGroup;
  username:number;
  leave: Leave;
  leaveTypes:string[]=['CL','PL','SK']
  constructor(private router:Router,private route: ActivatedRoute, private leaveservice:NewLeaveApplicationService) {
    this.username = +this.route.snapshot.paramMap.get("username");
    //this.data.
   }
  model=new Leave(null, null,0,'CL','','');
   
  ngOnInit() {
   // this.model.startDate=new Date();
  }
onSubmit(leaveForm:NgForm){
  this.submitted = true;
  console.log(leaveForm.form);
  this.leave=leaveForm.form.value;
  this.leave.empId=this.route.snapshot.paramMap.get("username");
  console.log(leaveForm.form.get("startDate").value>leaveForm.form.get("endDate").value);
  console.log(JSON.stringify(leaveForm.value));
  this.leaveservice.applyLeave(this.username,this.leave)
  .subscribe(userll=>{
    this.leave=userll;
  
  //
  },error=>console.log(error));
  
  this.router.navigateByUrl('/leaveHistory/'+this.username);
  //this.router.navigate(['/leaveHistory',this.username])
}

applyFun(){
  
  
}
private delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
   //console.log(this.leaveForm.get('startDate'));
onCancel(){
  this.router.navigate(['/leaveHistory',this.username])
 
}
calDate(leaveForm:NgForm){
  console.log(leaveForm.form.get("startDate").value>leaveForm.form.get("endDate").value);
  var dt2 =new Date(leaveForm.form.get("endDate").value);
  var dt1=new Date(leaveForm.form.get("startDate").value);
  this.model.noOfDays= Math.floor((Date.UTC(dt2.getFullYear(), 
  dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(),
   dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  //this.model.noOfDays=10;
  console.log(leaveForm.form.value);
  console.log(JSON.stringify(leaveForm.form.value));
}
}
