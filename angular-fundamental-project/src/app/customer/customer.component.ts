import { Customer } from './../models/customer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  title: string = "Customer Management System";

  custObj: any = {
    custCode: 1001,
    custName: 'King Kochhar',
    custAmount: 12000
  };

  customerObj: Customer = {
    CustomerCode: 1001,
    CustomerName: "Gautam",
    CustomerAmount: 20000
  }

}
