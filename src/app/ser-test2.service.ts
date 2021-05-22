import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestData2 } from './models/Test2.model';

@Injectable({
  providedIn: 'root'
})
export class SerTest2Service {

  constructor(private HC:HttpClient) { }


  GetTestData1():Observable<TestData2[]>{
    return this.HC.get<TestData2[]>('https://jsonplaceholder.typicode.com/users')
  }


  SendUserData(ind:number):Observable<TestData2>{
    return this.HC.get<TestData2>('https://jsonplaceholder.typicode.com/users/'+ind)
  }

}

