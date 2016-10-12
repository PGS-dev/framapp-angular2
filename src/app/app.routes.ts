import {Routes, RouterModule} from '@angular/router';
import {Home} from './views/home';
import {NoContent} from './views/no-content';

export const AppRoutes: Routes = [
  {path: '', component: Home},
  {path: 'home', component: Home},
  {path: '**', component: NoContent},
];
