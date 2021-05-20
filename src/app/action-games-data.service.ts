import { Injectable } from '@angular/core';

import {Products} from './models/product.model';

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionGamesDataService {

  constructor(private HC:HttpClient) { }

  GetActionGamesData():Observable<Products[]>{
    return this.HC.get<Products[]>('assets/ActionGames.json')
  }
}
