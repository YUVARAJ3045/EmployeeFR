import { Router } from '@angular/router';
import { EmployeesService } from './../services/employees.service';
import { Employee } from './../models/employee/employee.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  addEmployeeRequest: Employee={
    idNumber:0,
    firstName:'',
    lastName:'',
    email:'',
    phoneNo:'',
    basicSalary:0,
    type:''
  };
  

  constructor(private employeesService:EmployeesService,private router:Router){}

  addEmployee(){
    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>
{
  this.router.navigate(['employee_list']);
}    });
  }
}
