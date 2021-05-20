import { Component, OnDestroy, OnInit } from '@angular/core';

import { Products } from '../models/product.model'

import { SportsGamesDataService } from '../sports-games-data.service'

@Component({
  selector: 'app-sports-games',
  templateUrl: './sports-games.component.html',
  styleUrls: ['./sports-games.component.css']
})
export class SportsGamesComponent implements OnInit,OnDestroy {

  SportsSubscription:any;

  SportsGamesData: Products[] = [];
  constructor(private SportsObject: SportsGamesDataService) { }

  ngOnInit(): void {
    this.SportsSubscription = this.SportsObject.GetSportsGamesData().subscribe(
     data=>{
       this.SportsGamesData=data
     },
     err=>{
       console.log("error is "+err);
     }
   );
 
  }

  ngOnDestroy(){
    this.SportsSubscription.unsubscribe();
  }
}
