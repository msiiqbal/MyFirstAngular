import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestData2 } from './models/Test2.model';

@Injectable({
  providedIn: 'root'
})
export class SerTest2Service {

  constructor(private HC:HttpClient) { }


  GetTestData1():Observable<any>{
    return this.HC.get<any>('https://jsonplaceholder.typicode.com/users')
  }

}

