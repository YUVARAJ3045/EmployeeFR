import { EmployeesService } from './../services/employees.service';
import { Employee } from './../models/employee/employee.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employee:Employee[]=[];
  constructor(private employeeServices:EmployeesService){}

  ngOnInit(): void{
  this.employeeServices.getAllEmployees()
  .subscribe({
    next:(employee) => {
      this.employee= employee;
      console.log(employee);
    },
    error:(response)=>{ 
      console.log(response);
    }

  })
}
salary=0;


}


// { idNumber:1,
//   firstName:'Yuvaraj',
//   lastName:'S',
//   email:'yuvaraj@gmail.com',
//   phoneNo:'8610435825',
//   basicSalary:20000,
//   type:'Permanent'},
//   {        
//   idNumber:2,
//   firstName:'Sujith',
//   lastName:'N M',
//   email:'sujith@gmail.com',
//   phoneNo:'9894735825',
//   basicSalary:10000,
//   type:'Temporary'},
//   { 
//   idNumber:3,
//   firstName:'Shamna',
//   lastName:'P',
//   email:'shamna@gmail.com',
//   phoneNo:'9486563619',
//   basicSalary:10000,
//   type:'Permanent'}