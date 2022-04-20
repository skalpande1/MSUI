import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  //Form Backing Object
  employee : Employee = new Employee(0,'',0,'','','');
  message : string = '';
  //DI
  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
  }

  createEmployee() {
    this.service.saveEmployee(this.employee)
    .subscribe(data=>{
      this.message = data;
      this.employee = new Employee(0,'',0,'','','');
    },error=>{
      console.log(error);
      this.message = 'Unable to save! Contact Admin';
    });
  }


}
