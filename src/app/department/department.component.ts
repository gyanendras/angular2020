import { Component, OnInit } from '@angular/core';
import { DepartmentService } from './department.service';
import {Department} from './department';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';;

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  depts: Department[];
  sdeptId:number=0;
  constructor(private route : ActivatedRoute,private deptService: DepartmentService) {
    this.depts = [];
   }
   
 
   

  ngOnInit(): void {
    console.log("sdepts is "+ this.depts);

    this.deptService.getDepartments().subscribe(depts => {
      this.depts = depts;
    },
     (error) => {
      console.log(error);
      });

      this.route.queryParams.subscribe(params => {
        this.sdeptId = params['sdeptId'];
      });
  }

}
