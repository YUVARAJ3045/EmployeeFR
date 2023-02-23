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
}


// { id:1,
  //   FirstName:'Yuvaraj',
  //   LastName:'S',
  //   Email:'yuvaraj@gmail.com',
  //   PhoneNo:'8610435825',
  //   BasicSalary:20000,
  //   Type:'Permanent'},
  //   {        
  //   id:2,
  //   FirstName:'Sujith',
  //   LastName:'N M',
  //   Email:'sujith@gmail.com',
  //   PhoneNo:'9894735825',
  //   BasicSalary:10000,
  //   Type:'Temporary'},
  //   { 
  //   id:3,
  //   FirstName:'Shamna',
  //   LastName:'P',
  //   Email:'shamna@gmail.com',
  //   PhoneNo:'9486563619',
  //   BasicSalary:10000,
  //   Type:'Permanent'},