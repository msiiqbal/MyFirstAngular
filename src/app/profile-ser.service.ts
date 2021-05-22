import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profiles } from './models/UserProfile';

@Injectable({
  providedIn: 'root'
})
export class ProfileSerService {

  constructor(private ProSer:HttpClient) { }

  GetUserProfiles():Observable<Profiles[]>{

    return this.ProSer.get<Profiles[]>('http://localhost:3000/profiles')
  }

  GetUserData(ID:number){
    return this.ProSer.get<Profiles>('http://localhost:3000/profiles/'+ID)

  }
}
