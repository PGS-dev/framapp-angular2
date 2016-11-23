import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFire} from 'angularfire2';
import { RouterModule }   from '@angular/router';
import { AppRoutes } from "./app.routes";

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/admin/product-page/product-page.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { CategoriesListComponent } from './components/admin/categories-list/categories-list.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU',
  authDomain: 'project-5613440220430148247.firebaseapp.com',
  databaseURL: 'https://project-5613440220430148247.firebaseio.com',
  storageBucket: 'project-5613440220430148247.appspot.com',
  messagingSenderId: '122242095723'
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarListComponent,
    HeadbarComponent,
    HomeComponent,
    LoginBtnComponent,
    ProductPageComponent,
    ProductListComponent,
    CategoriesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
