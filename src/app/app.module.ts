import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {myFirebaseConfig, myFirebaseAuthConfig} from './cfg/firebase.config';
import {AppRoutes} from './app.routes';
import * as services from './services/';
import {Components} from './components/';

@NgModule({
  declarations: [
    Components.layout.AppComponent,
    Components.layout.HeaderComponent,
    Components.layout.ModalComponent,
    Components.layout.NoContentComponent,
    Components.misc.ListComponent,
    Components.misc.TableComponent,
    Components.categories.CategoriesListComponent,
    Components.categories.CategoriesAdminComponent,
    Components.categories.CategoriesAdminAddComponent,
    Components.categories.CategoriesAdminEditComponent,
    Components.products.ProductListComponent,
    Components.products.ProductDetailsComponent,
    Components.products.ProductAdminComponent,
    Components.products.ProductAdminAddComponent,
    Components.products.ProductAdminEditComponent,
    Components.products.FilterProductsComponent,
    Components.signIn.SignInComponent
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
    services.FirebaseService,
    services.NavService,
    services.AuthService,
    services.ProductService,
    services.CategoriesService,
    services.AuthGuard
  ],
  bootstrap: [Components.layout.AppComponent]
})
export class AppModule {}
