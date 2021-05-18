import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

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
  ChangeStatus(){
    this.Status=!this.Status;
  }

}
