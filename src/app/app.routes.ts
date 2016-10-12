import { Routes, RouterModule } from '@angular/router';
import { Home } from './views/home';
import { About } from './views/about';
import { NoContent } from './views/no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: NoContent },
];
