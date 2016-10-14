import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {Categories, Home, NoContent} from './shared/';

import {AppRoutes} from './app.routes';
import { KeysPipe } from './pipes/keys.pipe';
import {HttpService} from "./services/http.service";

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { ListComponent } from './components/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    Categories,
    Home,
    NoContent,
    KeysPipe,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
