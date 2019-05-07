export class LeaveHistory{
     leaveId: number;
     noOfDays: number;
     startDate: Date;
    endDate: Date;
    leaveStatus?:string;
    appliedOn?:Date;
    managerComments?:string;
    empId:number;
     reason:string;
     leaveType: string;
    name:string;
    balanceLeave:number;
    acceptance:string;
  
constructor(){
     this.empId=0;
     this.noOfDays=0;
     this.startDate=null;
     this.endDate=null;;
     this.balanceLeave=0;
     this.leaveStatus='';
     this.appliedOn=null;;
     this.managerComments='';
     this.reason='';
     this.leaveType='';
     this.name='';
     this.acceptance='';
}
}