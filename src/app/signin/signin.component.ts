import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Status:boolean=true;
   users:any=[];
  
  GetDataOfUser(ref:NgForm){
    let alpha=ref.value;
    this.users.push(alpha);
    
  ref.reset();
 
  }

  DeletAccordian(ind:number){
    this.users.splice(ind,1);
  }

}
