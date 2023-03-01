import { Router } from '@angular/router';
import { EmployeesService } from './../services/employees.service';
import { Employee } from './../models/employee/employee.module';
import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators, MaxLengthValidator} from '@angular/forms'

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

  register=new FormGroup({
    idNumber:new FormControl(0,[Validators.required]),
    firstName:new FormControl('',[Validators.minLength(5)]),
    lastName:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.pattern('[a-z0-9]+@cirruslabs.io'),Validators.required]),
    phoneNo:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    basicSalary:new FormControl(0,[Validators.required,Validators.min(10000)]),
    type:new FormControl('',[Validators.minLength(9),Validators.maxLength(9),Validators.required])
  })
 

  constructor(private employeesService:EmployeesService,private router:Router){}

  addEmployee(){
    this.employeesService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next:(employee)=>
{
  this.router.navigate(['employee_list']);
}    });
  }


 get vidNumber(){
    return this.register.get("idNumber");
  }
  get vfirstName(){
    return this.register.get("firstName");
  }
  get vlastName(){
    return this.register.get("lastName");
  }
  get vemail(){
    return this.register.get("email");
  }
  get vphoneNo(){
    return this.register.get("phoneNo");
  }
  get vbasicSalary(){
    return this.register.get("basicSalary");
  }
  get vtype(){
    return this.register.get("type");
  }


  
}
