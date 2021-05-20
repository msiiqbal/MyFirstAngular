import { Component, OnInit } from '@angular/core';

import { Products } from '../models/product.model'

import { SportsGamesDataService } from '../sports-games-data.service'

@Component({
  selector: 'app-sports-games',
  templateUrl: './sports-games.component.html',
  styleUrls: ['./sports-games.component.css']
})
export class SportsGamesComponent implements OnInit {

  SportsGamesData: Products[] = [];
  constructor(private SportsObject: SportsGamesDataService) { }

  ngOnInit(): void {
    this.SportsGamesData = this.SportsObject.GetSportsGamesData();
  }

}
