import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

 //declare variables
 customer : Customer = new Customer(0,'','','','','','','','');
 message : any ;
 errorMessages : any;
 //DI
 constructor(private service: CustomerService) { }

 ngOnInit(): void {

 }
 //on submit
 createCustomer() {
   this.service.createCustomer(this.customer).subscribe({
     next: (data) => {
       this.message = data;
       //clear form data on success
       this.customer = new Customer(0,'','','','','','','','');
       this.errorMessages = {};
     },
     error : (error) => {
      this.errorMessages = JSON.parse(error.error);//text->JSON
        console.log(this.errorMessages);
        this.message = "";
     }
   });
 }

}
