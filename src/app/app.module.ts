import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { TestowyComponent } from './testowy/testowy.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarListComponent,
    TestowyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
