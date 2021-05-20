import { Component, OnDestroy, OnInit } from '@angular/core';
import {Products} from '../models/product.model'

import {ActionGamesDataService} from '../action-games-data.service'


@Component({
  selector: 'app-action-games',
  templateUrl: './action-games.component.html',
  styleUrls: ['./action-games.component.css']
})
export class ActionGamesComponent implements OnInit,OnDestroy {

  ActionSubcription:any;

  ActionGamesData:Products[]=[];
  constructor(private ActionOject:ActionGamesDataService) { }

  ngOnInit(): void {
   this.ActionSubcription= this.ActionOject.GetActionGamesData().subscribe(
      data=>{
        this.ActionGamesData=data;
      },
      err=>{
        console.log("erroe is "+err)
      }
    );
  }

  ngOnDestroy(){
    this.ActionSubcription.unsubscribe();
  }
}
