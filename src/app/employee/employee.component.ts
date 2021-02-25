import { Component, OnInit, NgModule } from '@angular/core';
import {Employee} from './Employee'
import{EmployeeService} from './employee.service'
import { from } from 'rxjs';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [
    EmployeeService,HttpClientModule,HttpClient
  ],
  exportAs:'app-employee'
})
export class EmployeeComponent implements OnInit {
 emp:Employee;
 emps!: Employee[];
  constructor(private route : ActivatedRoute, private empService: EmployeeService) {
    this.emp = new Employee(25,"Ramesh","Khatri","Ram Kh",33.55);
     }
   
  ngOnInit(): void {
    console.log("emp is" + this.emp.id);
    this.empService.getEmployees().subscribe(emps => {
      this.emps = emps;
    },
     (error) => {
      console.log(error);
      });

      this.route.queryParams.subscribe(params => {
        this.emp = params['emp'];
      });
  }
  
  
}
