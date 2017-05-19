import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriesService} from '../components/categories/categories.service';
import {CategoriesComponent} from '../components/categories/categories.component';
import {NavigationComponent} from './navigation.component';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {routes} from '../app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
  ],
  declarations: [
  ],
  providers: []
})
export class NavigationModule { }
