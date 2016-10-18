import {Routes, RouterModule} from '@angular/router';
import {Home} from './views/home';
import {NoContent} from './views/no-content';
import {ProductDetailsComponent} from "./components/product-details/product-details.component";

export const AppRoutes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: '**', component: NoContent},
];
