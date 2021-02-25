import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { DepartmentComponent } from './department/department.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DepartmentComponent,
    AuthComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [HttpClientModule,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
