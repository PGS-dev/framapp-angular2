// import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

export const ProductsAppRoutes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:id', component: HomeComponent },
  { path: '**', component: HomeComponent }
];
