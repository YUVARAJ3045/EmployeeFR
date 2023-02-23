import { Employee } from './../models/employee/employee.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl='https://localhost:7084'
  constructor(private http:HttpClient) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/employee');

  }
  addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
    return  this.http.post<Employee>(this.baseApiUrl+'/api/employee',addEmployeeRequest);
    
  }

  getEmployee(IdNumber:string):Observable<Employee>{
   return this.http.get<Employee>(this.baseApiUrl+'/api/employee/'+IdNumber);
  }
  updateEmployee( updateEmployeeRequest:Employee):
  Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/employee/',updateEmployeeRequest);
  }
  deleteEmployee(idNumber:number):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/employee/'+idNumber);
  }

}
