import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EmployeeModule { }
export interface Employee{
  idNumber:number;
  firstName:string;
  lastName:string;
  email:string;
  phoneNo:string;
  basicSalary:number;
  type:string;
}
// export interface addEmployee{
  
//   firstName:string;
//   lastName:string;
//   email:string;
//   phoneNo:string;
//   basicSalary:number;
//   type:string;
// }