import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import {AppComponent} from './components/app/app.component';
import {Categories, NoContent} from './shared/';
import {AppRoutes} from './app.routes';
import {KeysPipe} from './pipes/keys.pipe';
import {HttpService} from "./services/http.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ListComponent } from './components/list/list.component';
import { ProductList } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import {NavService} from "./services/nav.service";
import {ProductService} from "./services/product.service";
import {UtilsService} from "./services/utils.service";
import {AuthService} from "./services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    Categories,
    NoContent,
    KeysPipe,
    ListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductList,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [
    HttpService,
    NavService,
    AuthService,
    ProductService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
