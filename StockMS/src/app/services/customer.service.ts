import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerComponent } from '../components/customer/customer.component';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

 //define customer controller URI
 customerUri = `${environment.baseUri}/customer`;

 //DI for http
 constructor(private http:HttpClient) { }

 // HTTP calls for Backend
 getAllCustomers() : Observable<Customer[]> {
   return this.http.get<Customer[]>(`${this.customerUri}/all`);
 }

 createCustomer(customer: Customer) : Observable<any> {
  return this.http.post(`${this.customerUri}/create`,customer,{
    responseType : 'text'
  })
}
}
