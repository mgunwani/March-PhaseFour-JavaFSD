import { UserService } from './models/user.service';
import { applicationRoutes } from './app-routing.module';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { UsersComponent } from './users/users.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    CustomerContactComponent,
    EmployeeContactComponent,
    UsersComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(applicationRoutes)
  ],
  providers: [UserService],
  bootstrap: [MainComponent]
})
export class AppModule { }
