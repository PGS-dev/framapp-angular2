import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import {AppComponent} from './components/app/app.component';
import {CategoriesComponent, NoContent} from './shared/';
import {AppRoutes} from './app.routes';
import {KeysPipe} from './pipes/keys.pipe';
import {HttpService} from "./services/http.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ListComponent } from './components/list/list.component';
import { ProductList } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HeaderComponent } from './components/header/header.component';
import {NavService} from "./services/nav.service";
import {ProductService} from "./services/product.service";
import {UtilsService} from "./services/utils.service";
import {AuthService} from "./services/auth.service";
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CategoriesAdminComponent } from './components/categories-admin/categories-admin.component';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { TableComponent } from './components/table/table.component';
import {CategoriesService} from "./services/categories.service";

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    NoContent,
    KeysPipe,
    ListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductList,
    SignInComponent,
    CategoriesAdminComponent,
    ProductAdminComponent,
    TableComponent
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
    UtilsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
