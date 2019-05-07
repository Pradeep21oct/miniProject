export class Leave{
    constructor(
        public startDate:Date=new Date(),
        public endDate:Date=new Date(),
        public noOfDays:number=0,
        public leaveType:string='',
        public reason:string='',
        public empId:string=''
       ){}
       
}