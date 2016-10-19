import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarListComponent } from './components/sidebar-list/sidebar-list.component';



export const firebaseConfig = {
  apiKey: "AIzaSyBKP4cOP508h0JLKmjFvzJooO0MqV8l4fU",
  authDomain: "project-5613440220430148247.firebaseapp.com",
  databaseURL: "https://project-5613440220430148247.firebaseio.com",
  storageBucket: "project-5613440220430148247.appspot.com",
  messagingSenderId: "122242095723"
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
