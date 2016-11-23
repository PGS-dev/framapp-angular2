// import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductPageComponent } from './components/admin/product-page/product-page.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { CategoriesListComponent } from './components/admin/categories-list/categories-list.component';

export const AppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoryPageComponent },
  { path: 'categories/:id', component: CategoryPageComponent },
  { path: 'products', component: ProductPageComponent},
  { path: 'products/:id', component: ProductPageComponent },
  { path: 'products/', component: ProductPageComponent },
  { path: 'admin', component: CategoriesListComponent },
  { path: '**', component: HomeComponent }
];



