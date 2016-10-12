import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { Categories } from './shared/';

import {AppRoutes} from './app.routes';
import {Home} from "./views/home/home.component";
import {NoContent} from "./views/no-content/no-content";

@NgModule({
  declarations: [
    AppComponent,
    Categories,
    Home,
    NoContent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
