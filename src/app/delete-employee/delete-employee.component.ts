import { ActivatedRoute } from '@angular/router';
import { Employee } from './../models/employee/employee.module';
import { EmployeesService } from './../services/employees.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent {
  constructor(private employeeService: EmployeesService,private route:ActivatedRoute) { }

  deleteEmployee(idNumber: number) {
    this.employeeService.deleteEmployeedetail(idNumber).subscribe({
      next:(response) => {
      console.log('Employee deleted successfully', response);
      // Do something else here if needed
    }
  });
}

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
        this.employeeService.getEmployee(id).subscribe
        ({
          next:(response)=>{
            this.employeeDetails=response;
          }
        })

      }
    }
  })
}

}
