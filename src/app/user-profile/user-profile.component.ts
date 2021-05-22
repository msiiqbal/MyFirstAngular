import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profiles } from '../models/UserProfile';
import { ProfileSerService } from '../profile-ser.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 User:any;
  UserProfileSubscription: any;
  
  constructor(private ProSer: ProfileSerService, private ActivRoute: ActivatedRoute) { 
    

  }

  ngOnInit(): void {
    let ID = this.ActivRoute.snapshot.params.id;
    this.UserProfileSubscription = this.ProSer.GetUserData(ID).subscribe(
      data => {
        this.User = data;
        console.log(this.User)
      },
      err => {
        console.log("error occured in Profile component ", err);
      }
    )
  }


}
