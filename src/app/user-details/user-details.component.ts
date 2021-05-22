import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestData2 } from '../models/Test2.model';
import { SerTest2Service } from '../ser-test2.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit ,OnDestroy{

  user:any;
  UserSubscription:any;
  constructor(private ActivRouter:ActivatedRoute,private Ser2:SerTest2Service) { }

  ngOnInit(): void {
    let ind=this.ActivRouter.snapshot.params.id;
   this.UserSubscription= this.Ser2.SendUserData(ind).subscribe(
      UserObjet =>{
        this.user=UserObjet
      },
      err=>{
        console.log('Erroen eccored ' ,err);
      }
    )
  }

  ngOnDestroy(){
    this.UserSubscription.unsubscribe();
  }
}
