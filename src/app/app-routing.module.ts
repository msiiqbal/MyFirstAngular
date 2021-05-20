import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionGamesComponent } from './action-games/action-games.component';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { RacingGamesComponent } from './racing-games/racing-games.component';
import { SigninComponent } from './signin/signin.component';
import { SportsGamesComponent } from './sports-games/sports-games.component';
import { TestDemo1Component } from './test-demo1/test-demo1.component';
import { TestDemo2Component } from './test-demo2/test-demo2.component';

const routes: Routes = [

  {path:'test1',component:TestDemo1Component},
  {path:'test2',component:TestDemo2Component},
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
  {path:'',redirectTo:'/SIGNIN',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
