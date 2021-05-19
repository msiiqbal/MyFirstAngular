import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionGamesComponent } from './action-games/action-games.component';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RacingGamesComponent } from './racing-games/racing-games.component';
import { SigninComponent } from './signin/signin.component';
import { SportsGamesComponent } from './sports-games/sports-games.component';

const routes: Routes = [

  {path:'HOME',component:HomeComponent},
  {path:'SIGNUP',component:LoginComponent},
  {path:'SIGNIN',component:SigninComponent},
  {path:'CONTACTUS',component:ContactusComponent},
  {path:'PRODUCTS',component:ProductsComponent,children:[
    {path:'ACTION',component:ActionGamesComponent},
    {path:'RACING',component:RacingGamesComponent},
    {path:'SPORTS',component:SportsGamesComponent},
    {path:'',redirectTo:'/PRODUCTS/ACTION',pathMatch:'full'}
  ]},
  {path:'',redirectTo:'/SIGNIN',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
