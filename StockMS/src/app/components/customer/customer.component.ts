import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // to store data
  customers: Customer[] = [];

  //DI
  constructor(private service: CustomerService) {}

  //on loading component
  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.service.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
      },
      error : (error) => {
        console.log(error);
      }
    });
  }

}
