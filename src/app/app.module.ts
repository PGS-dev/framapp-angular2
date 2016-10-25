import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'
import {AppComponent} from './components/app/app.component';
import {CategoriesComponent, NoContent} from './shared/';
import {AppRoutes} from './app.routes';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ListComponent} from './components/list/list.component';
import {TableComponent} from './components/table/table.component';
import {CategoriesAdminComponent} from './components/categories-admin/categories-admin.component';
import {CategoriesAdminAddComponent} from './components/categories-admin-add/categories-admin-add.component';
import {CategoriesAdminEditComponent} from './components/categories-admin-edit/categories-admin-edit.component';
import {CategoriesService} from './services/categories.service';
import {ProductList} from './components/product-list/product-list.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductAdminComponent} from './components/product-admin/product-admin.component';
import {ProductAdminAddComponent} from './components/product-admin-add/product-admin-add.component';
import {ProductAdminEditComponent} from './components/product-admin-edit/product-admin-edit.component';
import {ProductService} from './services/product.service';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {HeaderComponent} from './components/header/header.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {NavService} from './services/nav.service';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './services/auth-guard.service';
import {ModalComponent} from './components/modal/modal.component';
import {FirebaseService} from './services/firebase.service';

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
    ListComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductList,
    SignInComponent,
    CategoriesAdminComponent,
    ProductAdminComponent,
    TableComponent,
    ProductAdminEditComponent,
    CategoriesAdminAddComponent,
    ProductAdminAddComponent,
    CategoriesAdminEditComponent,
    ModalComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [
    FirebaseService,
    NavService,
    AuthService,
    ProductService,
    CategoriesService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
