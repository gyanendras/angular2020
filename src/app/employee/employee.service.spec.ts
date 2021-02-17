import { EmployeeService } from "src/app/employee/employee.service";
import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import {Employee} from './Employee'; 

import {ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';

let fixture: ComponentFixture<EmployeeComponent>;
let comp: EmployeeComponent;
let service:EmployeeService;

describe('EmployeeeService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClientModule,HttpHandler,HttpClient,EmployeeService]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(EmployeeComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(EmployeeService);
    });
  });

    let emplist: Employee[];

 
    it('#getObservableValue should return value from observable',
      (done: DoneFn) => {
      service.getEmployees().subscribe((emps: any) => {
        expect(emps).toBe(emplist);
        done();
      }, (error) => {
        console.log(error);
        } 
      
      );
    });


    it('should create EmployeeService', () => {
      expect(service).toBeTruthy();
    });
 
  });