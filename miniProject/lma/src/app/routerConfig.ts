import{ Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { NewLeaveApplicationComponent } from './apply-leave/new-leave-application.component';
import { ApproveDenyComponent } from './manager-dashboard/approve-deny/approve-deny.component';

export  const appRoutes:Routes=[
    {path:'home', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard/:username',component:DashboardComponent},
    { path: 'empDetails/:username', component: MyDetailsComponent },
    { path: 'mgrDetails/:username', component: ManagerDetailsComponent},
    {path:'leaveHistory/:username',component:ApplyLeaveComponent},
    {path:'mgrDashboard/:username',component:ManagerDashboardComponent},
    {path:'applyLeave/:username',component:NewLeaveApplicationComponent},
    {path:'approve-deny/:leaveId' ,component:ApproveDenyComponent},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', redirectTo:'home', pathMatch:'full'}
];