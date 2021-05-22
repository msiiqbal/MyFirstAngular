import { Injectable } from '@angular/core';

import {Products} from './models/product.model'

import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RacingGamesDataService {

  constructor(private HC:HttpClient) { }



  GetRacingGamesData():Observable<Products[]>{
    return this.HC.get<Products[]>('http://localhost:3000/racinggames');
  }
}
