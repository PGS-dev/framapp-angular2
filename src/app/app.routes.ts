import {Routes, RouterModule} from '@angular/router';
import {Home} from './views/home';
// import {WorkBoard} from './components/work-board';
// import {About} from './about';
import {NoContent} from './views/no-content';

// import {DataResolver} from './app.resolver';


export const AppRoutes: Routes = [
  {path: '', component: Home},
  // {path: 'home', component: Home},
  {path: '**', component: NoContent},
];
