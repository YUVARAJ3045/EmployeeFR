import { Employee } from './../models/employee/employee.module';
import { EmployeesService } from './../services/employees.service';
import { CommonModule, NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { __param } from 'tslib';
import {FormGroup,FormControl,Validators, MaxLengthValidator} from '@angular/forms'


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

constructor(private route:ActivatedRoute, private employeesService:EmployeesService,private router:Router){}

employeeDetails:Employee ={
  idNumber:0,
  firstName:'',
  lastName:'',
  email:'',
  phoneNo:'',
  basicSalary:0,
  type:''
}
register=new FormGroup({
  idNumber:new FormControl(0,[Validators.required]),
  firstName:new FormControl('',[Validators.minLength(5)]),
  lastName:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.email]),
  phoneNo:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
  basicSalary:new FormControl(0,[Validators.required,Validators.min(10000)]),
  type:new FormControl('',[Validators.minLength(9),Validators.maxLength(9),Validators.required])
})

// ddflnadsni
ngOnInit():void
{
  this.route.paramMap.subscribe({
    next:(params)=>{
      const id =params.get('id');
      if (id) {
        this.employeesService.getEmployee(id).subscribe
        ({
          next:(response)=>{
            this.employeeDetails=response;
          }
        })

      }
    }
  })
}


updateEmployee(){
  this.employeesService.updateEmployee( this.employeeDetails)
  .subscribe({
    next:(employee)=>{
      this.router.navigate(['employee_list']);
      // this.router.navigate(['employeeDetails']);
    }
  })
}

deleteEmployee(idNumber:number){
  this.employeesService.deleteEmployee(idNumber)
  .subscribe({
    next: (response)=>{
      this.router.navigate(['employee_list']);
      console.log('Deleted');
    }
  })
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


