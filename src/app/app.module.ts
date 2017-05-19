import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import {ErrorService} from './shared/ErrorService';
import {NavigationModule} from './navigation/navigation.module';
import {NavigationComponent} from './navigation/navigation.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesService} from './components/categories/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CategoriesComponent,
    NavigationComponent
  ],
  imports: [
    // NavigationModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
