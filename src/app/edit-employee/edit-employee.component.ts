import { Employee } from './../models/employee/employee.module';
import { EmployeesService } from './../services/employees.service';
import { CommonModule, NgIfContext } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { __param } from 'tslib';
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

options = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' }
];

}


