import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import {AppComponent} from './components/app/app.component';
import {CategoriesComponent, NoContent} from './shared/';
import {AppRoutes} from './app.routes';
import {KeysPipe} from './pipes/keys.pipe';
import {HttpService} from "./services/http.service";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ListComponent} from './components/list/list.component';
import {ProductList} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {HeaderComponent} from './components/header/header.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {NavService} from "./services/nav.service";
import {ProductService} from "./services/product.service";
import {UtilsService} from "./services/utils.service";
import {AuthService} from "./services/auth.service";
import {SignInComponent} from './components/sign-in/sign-in.component';
import {CategoriesAdminComponent} from './components/categories-admin/categories-admin.component';
import {ProductAdminComponent} from './components/product-admin/product-admin.component';
import {TableComponent} from './components/table/table.component';
import {CategoriesService} from "./services/categories.service";
import {CategoriesAdminAddComponent} from './components/categories-admin-add/categories-admin-add.component';
import {ProductAdminAddComponent} from './components/product-admin-add/product-admin-add.component';

import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {CategoriesAdminEditComponent} from './components/categories-admin-edit/categories-admin-edit.component';
import {AccessService} from "./services/access.service";
import {AuthGuard} from "./services/auth-guard.service";

const myFirebaseConfig = {
  apiKey: 'AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU',
  authDomain: 'https://project-5613440220430148247.firebaseapp.com',
  databaseURL: 'https://project-5613440220430148247.firebaseio.com',
  storageBucket: 'project-5613440220430148247.appspot.com',
  messagingSenderId: '122242095723'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

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
    TableComponent,
    ProductEditComponent,
    CategoriesAdminAddComponent,
    ProductAdminAddComponent,
    CategoriesAdminEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [
    HttpService,
    NavService,
    AuthService,
    ProductService,
    UtilsService,
    CategoriesService,
    AccessService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
