import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseurl: string = 'http://localhost:8080/emp/';

  constructor(private http: HttpClient) {}

  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseurl}/all`);
  }
  getOneEmployee(id:number): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseurl}/find/${id}`);
  }
  updateEmployeeName(empName: string): Observable<any> {
    return this.http.put(`${this.baseurl}/modify`,{responseType: 'text'});
  }
  removeOneEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/remove/${id}`,{responseType: 'text'});
  }
  saveEmployee(employee : Employee): Observable<any> {
    return this.http.post(`${this.baseurl}/create`, employee, {responseType: 'text'});

  }
  updateOneEmployee(employee : Employee) {
    return this.http.get(`${this.baseurl}/update`, {responseType : 'text'});
  }
}
