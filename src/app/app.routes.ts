import {Routes} from '@angular/router';
import {NoContent} from './components/no-content';
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductList} from "./components/product-list/product-list.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";

export const AppRoutes: Routes = [
  {path: '', component: ProductList},
  {path: 'products', component: ProductList},
  {path: 'products/category/:categoryId', component: ProductList},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '**', component: NoContent},
];
