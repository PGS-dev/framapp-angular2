import {Routes, RouterModule} from '@angular/router';
import {Home} from './views/home';
import {NoContent} from './views/no-content';
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductList} from "./components/product-list/product-list.component";

export const AppRoutes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: 'products', component: ProductList},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: '**', component: NoContent},
];
