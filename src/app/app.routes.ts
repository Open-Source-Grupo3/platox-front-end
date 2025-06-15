import { Routes } from '@angular/router';

import { LoginComponent } from './public/pages/login/login.component';
import { HomeComponent } from './public/pages/home/home.component';
import {MapComponent} from './restaurant-locator/pages/map/map.component';
import {AppLayoutComponent} from './shared/layout/app-layout/app-layout.component';

const PageNotFoundComponent = () =>
  import('./public/pages/page-not-found/page-not-found.component')
    .then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'diner',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'map', component: MapComponent },
      /*{ path: 'favorites', component: FavoritesComponent },
      { path: 'profile', component: ProfileComponent }*/
    ]
  },
  {
    path: 'chef',
    component: AppLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'map', component: MapComponent },
      /*{ path: 'profile', component: ProfileComponent }*/
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
