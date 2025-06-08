import { Routes } from '@angular/router';

import { LoginComponent } from './public/pages/login/login.component';
import { HomeComponent } from './public/pages/home/home.component';
import {MapComponent} from './restaurant-locator/pages/map/map.component';

const PageNotFoundComponent = () =>
  import('./public/pages/page-not-found/page-not-found.component')
    .then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },/*
  { path: 'favorites', component: FavoritesComponent },
  { path: 'profile', component: ProfileComponent },*/
  { path: 'restaurant-locator', component: MapComponent },

  // Redirección raíz
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // Página no encontrada
  { path: '**', loadComponent: PageNotFoundComponent }
];
