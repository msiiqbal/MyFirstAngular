import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerTest1Service {

  constructor(private HC: HttpClient) { }


  GetTestData1(): Observable<any> {
    return this.HC.get<any>('https://reqres.in/api/unknown')
  }

}
