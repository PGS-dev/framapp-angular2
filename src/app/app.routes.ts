import {Routes} from '@angular/router';
import {NoContent} from './components/no-content';
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductList} from "./components/product-list/product-list.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {CategoriesAdminComponent} from "./components/categories-admin/categories-admin.component";
import {ProductAdminComponent} from "./components/product-admin/product-admin.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";

export const AppRoutes: Routes = [
  {path: '', component: ProductList},
  {path: 'products', component: ProductList},
  {path: 'products/category/:categoryId', component: ProductList},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'categoriesAdmin', component: CategoriesAdminComponent},
  {path: 'productsAdmin', component: ProductAdminComponent},
  {path: 'products/:productId/edit', component: ProductEditComponent},
  {path: '**', component: NoContent},
];
