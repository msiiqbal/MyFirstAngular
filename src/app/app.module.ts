import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ActionGamesComponent } from './action-games/action-games.component';
import { RacingGamesComponent } from './racing-games/racing-games.component';
import { SportsGamesComponent } from './sports-games/sports-games.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    HomeComponent,
    LoginComponent,
    ContactusComponent,
    SigninComponent,
    ActionGamesComponent,
    RacingGamesComponent,
    SportsGamesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
