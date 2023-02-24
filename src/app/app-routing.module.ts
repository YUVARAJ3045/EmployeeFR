import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'employee_list',component:EmployeeListComponent},
  {path:'',component:HomeComponent},
  {path:'add_employee',component:AddEmployeeComponent},
  {path:'employee_list/edit_employee/:id',component:EditEmployeeComponent},
  {path:'employee_list/view_employee/:id',component:ViewEmployeeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
