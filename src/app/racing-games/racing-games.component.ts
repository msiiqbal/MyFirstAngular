import { Component, OnInit } from '@angular/core';

import {Products} from'../models/product.model'

import {RacingGamesDataService} from '../racing-games-data.service'

@Component({
  selector: 'app-racing-games',
  templateUrl: './racing-games.component.html',
  styleUrls: ['./racing-games.component.css']
})
export class RacingGamesComponent implements OnInit {

  RacingGamesData: Products[]=[];
  constructor(private RacingObject:RacingGamesDataService) { }

  ngOnInit(): void {
    this.RacingGamesData=this.RacingObject.GetRacingGamesData();
  }

}
