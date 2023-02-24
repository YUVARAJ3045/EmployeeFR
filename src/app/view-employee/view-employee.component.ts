import { Employee } from './../models/employee/employee.module';
import { Component } from '@angular/core';
import { EmployeesService } from './../services/employees.service';
import { __param } from 'tslib';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

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
    });
    this.salcalc();
  }
tp='Permanent';
netSal=0;
salcalc(){
  console.log('WOrking')
  if(this.employeeDetails.type.toLowerCase()===this.tp.toLowerCase()){
    this.netSal=this.employeeDetails.basicSalary+this.employeeDetails.basicSalary*0.3
    console.log(this.netSal)
  }
  else{
    this.netSal=(this.employeeDetails.basicSalary)+this.employeeDetails.basicSalary*0.1
    console.log(this.netSal)
  }
}
  
}


