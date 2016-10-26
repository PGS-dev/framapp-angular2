import {Routes} from '@angular/router';
import {NoContentComponent} from './components/no-content';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {CategoriesAdminComponent} from './components/categories-admin/categories-admin.component';
import {ProductAdminComponent} from './components/product-admin/product-admin.component';
import {ProductAdminEditComponent} from './components/product-admin-edit/product-admin-edit.component';
import {CategoriesAdminAddComponent} from './components/categories-admin-add/categories-admin-add.component';
import {ProductAdminAddComponent} from './components/product-admin-add/product-admin-add.component';
import {AuthGuard} from './services/auth-guard.service';
import {CategoriesAdminEditComponent} from './components/categories-admin-edit/categories-admin-edit.component';

export const AppRoutes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'categoriesAdmin', component: CategoriesAdminComponent, canActivate: [AuthGuard]},
  {path: 'categoriesAdmin/add', component: CategoriesAdminAddComponent, canActivate: [AuthGuard]},
  {path: 'categoriesAdmin/:categoryId/edit', component: CategoriesAdminEditComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductListComponent},
  {path: 'products/category/:categoryId', component: ProductListComponent},
  {path: 'products/:productId', component: ProductDetailsComponent},
  {path: 'productsAdmin', component: ProductAdminComponent, canActivate: [AuthGuard]},
  {path: 'productsAdmin/add', component: ProductAdminAddComponent, canActivate: [AuthGuard], data: {isNew: true}},
  {path: 'productsAdmin/:productId/edit', component: ProductAdminEditComponent, canActivate: [AuthGuard], data: {isNew: false}},
  {path: '**', component: NoContentComponent}
];
