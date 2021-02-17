import { Component, OnInit } from '@angular/core';
import {Employee} from './Employee'
import{EmployeeService} from './employee.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 emp:Employee;
 emps!: Employee[];
  constructor(private empService: EmployeeService) {
    this.emp = new Employee(25,"Ramesh","Khatri","Ram Kh",33.55);
   }
   
   

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(emps => {
      this.emps = emps;
    },
     (error) => {
      console.log(error);
      });
  }

}
