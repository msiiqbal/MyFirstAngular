import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profiles } from '../models/UserProfile';
import { ProfileSerService } from '../profile-ser.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {


  UsersProfiles:Profiles[]=[];

  constructor(private PrSer:ProfileSerService,private RouTer:Router) { }

  ngOnInit(): void {

    this.PrSer.GetUserProfiles().subscribe(
      Data =>{
        this.UsersProfiles=Data
        console.log(this.UsersProfiles)
      },
      err =>{
        console.log("error  occered in profile component ",err);
      }
    )
  }
  OnIdClick(ID:number){
    this.RouTer.navigateByUrl('profiles/'+(ID))
  }

}
