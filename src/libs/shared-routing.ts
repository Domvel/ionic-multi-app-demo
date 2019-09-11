import { Routes } from '@angular/router';

import { AboutPage } from './pages/about/about.page';

export const sharedRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'about', component: AboutPage },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];
