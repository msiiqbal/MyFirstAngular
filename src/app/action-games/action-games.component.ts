import { Component, OnInit } from '@angular/core';
import {Products} from '../models/product.model'

import {ActionGamesDataService} from '../action-games-data.service'

@Component({
  selector: 'app-action-games',
  templateUrl: './action-games.component.html',
  styleUrls: ['./action-games.component.css']
})
export class ActionGamesComponent implements OnInit {

  ActionGamesData:Products[]=[];
  constructor(private ActionOject:ActionGamesDataService) { }

  ngOnInit(): void {
    this.ActionGamesData=this.ActionOject.GetActionGamesData();
  }

}
