import {Routes} from '@angular/router';

import {LoginComponent} from './public/pages/login/login.component';
import {HomeComponent} from './public/pages/home/home.component';
import {MapComponent} from './restaurant-locator/pages/map/map.component';
import {AppLayoutComponent} from './shared/layout/app-layout/app-layout.component';
import {ProfilePageComponent} from './profile/pages/profile-page/profile-page.component';
import {RestaurantListComponent} from './restaurant/pages/restaurant-list/restaurant-list.component';
import {RestaurantCreateAndEditComponent} from './restaurant/components/restaurant-create-and-edit/restaurant-create-and-edit.component';
import {RestaurantDetailsComponent} from './restaurant/components/restaurant-details/restaurant-details.component';
import {
  ExploreRestaurantListComponent
} from './explore/components/explore-restaurant-list/explore-restaurant-list.component';
import {
  ExploreRestaurantDetailsComponent
} from './explore/components/explore-restaurant-details/explore-restaurant-details.component';
import {FavoriteListComponent} from './favorites/components/favorite-list/favorite-list.component';

const PageNotFoundComponent = () =>
  import('./public/pages/page-not-found/page-not-found.component')
    .then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: 'diner',
    component: AppLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'map', component: MapComponent},
      {path: 'favorites', component: FavoriteListComponent },
      {path: 'profile', component: ProfilePageComponent},
      {path: 'restaurants', component: ExploreRestaurantListComponent },
      {path: 'restaurants/:id', component: ExploreRestaurantDetailsComponent }
    ]
  },
  {
    path: 'chef',
    component: AppLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'map', component: MapComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'restaurants', component: RestaurantListComponent},
      {path: 'restaurants/create', component: RestaurantCreateAndEditComponent},
      {path: 'restaurants/:id', component: RestaurantDetailsComponent},
      {path: 'restaurants/:id/edit', component: RestaurantCreateAndEditComponent}
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: '**', loadComponent: PageNotFoundComponent}
];
