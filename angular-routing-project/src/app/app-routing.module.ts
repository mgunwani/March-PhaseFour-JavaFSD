import { UserDetailComponent } from './user-detail/user-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeesComponent } from './employees/employees.component';
import { UsersComponent } from './users/users.component';
import { CustomerContactComponent } from './customer-contact/customer-contact.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { Component } from '@angular/core';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const applicationRoutes: Routes = [
    // { path: '', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'users', component: UsersComponent },
    { path: 'user-detail/:id', component: UserDetailComponent },
    { path: 'employees', component: EmployeesComponent },
    { path: 'employee-detail', component: EmployeeDetailComponent },
    {
        path: 'contact', component: ContactComponent, children: [
            { path: '', redirectTo: 'customer-contact', pathMatch: 'full' },
            { path: 'employee-contact', component: EmployeeContactComponent },
            { path: 'customer-contact', component: CustomerContactComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]