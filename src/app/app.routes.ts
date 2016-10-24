// import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ProductPageComponent } from './components/product-page/product-page.component';


export const AppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: HomeComponent },
  { path: 'categories/:id', component: HomeComponent },
  { path: 'products', component: ProductPageComponent},
  { path: 'products/:id', component: ProductPageComponent },
  { path: '**', component: HomeComponent }
];



