// import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AdminProductPageComponent } from './components/admin/admin-product-page/admin-product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { AdminCategoriesListComponent } from './components/admin/admin-categories-list/admin-categories-list.component';

export const AppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryPageComponent },
  { path: 'categories/:id', component: CategoryPageComponent },
  { path: 'products', component: AdminProductPageComponent},
  { path: 'products/:id', component: AdminProductPageComponent },
  { path: 'products/', component: AdminProductPageComponent },
  { path: 'admin', component: AdminCategoriesListComponent },
  { path: '**', component: HomeComponent }
];



