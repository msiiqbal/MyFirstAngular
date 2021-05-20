import { Component, OnDestroy, OnInit } from '@angular/core';

import {Products} from'../models/product.model'

import {RacingGamesDataService} from '../racing-games-data.service'

@Component({
  selector: 'app-racing-games',
  templateUrl: './racing-games.component.html',
  styleUrls: ['./racing-games.component.css']
})
export class RacingGamesComponent implements OnInit,OnDestroy {

  RacingSubscription:any;

  RacingGamesData: Products[]=[];
  constructor(private RacingObject:RacingGamesDataService) { }

  ngOnInit(): void {
  this.RacingSubscription= this.RacingObject.GetRacingGamesData().subscribe(
    data=>{
      this.RacingGamesData=data;
    },
    err=>{
      console.log("erroe is "+err)
    }
  );
  }

  ngOnDestroy(){
    this.RacingSubscription.unsubscribe();
  }

}
