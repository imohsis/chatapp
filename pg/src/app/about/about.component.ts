import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name:string ='';

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      this.name = params['name'];
    })
  }

}



//steps  inside the about component.ts
// 1, First import the Activated route
// 2, Then  create a variable name 
// 3, inject the router  usind dependency injection(private router: ActivatedRoute)
// 4, since this is a promise you need to subcribe inside the ngOnInit   method
// 5, 