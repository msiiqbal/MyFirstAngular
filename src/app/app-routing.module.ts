import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [

  {path:'HOME',component:HomeComponent},
  {path:'SIGNUP',component:LoginComponent},
  {path:'SIGNIN',component:SigninComponent},
  {path:'CONTACTUS',component:ContactusComponent},
  {path:'PRODUCTS',component:ProductsComponent},
  {path:'',redirectTo:'/SIGNIN',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
