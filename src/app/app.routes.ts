import {Routes} from '@angular/router';
import {NoContent} from './components/no-content';
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductList} from "./components/product-list/product-list.component";
import {SignInComponent} from "./components/sign-in/sign-in.component";
import {CategoriesAdminComponent} from "./components/categories-admin/categories-admin.component";
import {ProductAdminComponent} from "./components/product-admin/product-admin.component";
import {ProductEditComponent} from "./components/product-edit/product-edit.component";
import {CategoriesAdminAddComponent} from "./components/categories-admin-add/categories-admin-add.component";
import {ProductAdminAddComponent} from "./components/product-admin-add/product-admin-add.component";
import {AuthGuard} from "./services/auth-guard.service";

export const AppRoutes: Routes = [
  {path: '', component: ProductList},
  {path: 'products', component: ProductList},
  {path: 'products/category/:categoryId', component: ProductList},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'categoriesAdmin', component: CategoriesAdminComponent, canActivate: [AuthGuard]},
  {path: 'categoriesAdmin/add', component: CategoriesAdminAddComponent, canActivate: [AuthGuard]},
  {path: 'productsAdmin', component: ProductAdminComponent, canActivate: [AuthGuard]},
  {path: 'productsAdmin/add', component: ProductAdminAddComponent, canActivate: [AuthGuard]},
  {path: 'products/:productId/edit', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoContent},
];
