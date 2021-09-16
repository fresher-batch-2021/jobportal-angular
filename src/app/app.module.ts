import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddjobsComponent } from './addjobs/addjobs.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyCandidatesComponent } from './company-candidates/company-candidates.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddjobsComponent,
    CrudComponent,
    DashboardComponent,
    ViewuserComponent,
    UserdetailsComponent,
    CompanyDetailsComponent,
    CompanyCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
