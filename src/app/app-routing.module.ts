import { Routes} from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: '**', component: PageNotFoundComponent }
];
