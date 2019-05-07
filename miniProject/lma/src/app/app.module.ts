import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routerConfig';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule}  from '@angular/forms';
import { MyDetailsComponent } from './my-details/my-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import {UserDetailsService} from './my-details/user-details.service';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NewLeaveApplicationComponent } from './apply-leave/new-leave-application.component';
import { ApproveDenyComponent } from './manager-dashboard/approve-deny/approve-deny.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    MyDetailsComponent,
    ManagerDetailsComponent,
    ApplyLeaveComponent,
    ManagerDashboardComponent,
    NewLeaveApplicationComponent,
    ApproveDenyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
