import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyCandidatesComponent } from './company-candidates/company-candidates.component';
const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'viewuser',component:ViewuserComponent},
  {path:'company-details',component:CompanyDetailsComponent},
  {path:'company-candidates/:name',component:CompanyCandidatesComponent},
  {path:'',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
