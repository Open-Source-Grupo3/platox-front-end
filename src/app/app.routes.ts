import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {PostsPageComponent} from './posts/pages/posts-page/posts-page.component';
import {ProfilePageComponent} from './profile/pages/profile-page/profile-page.component';
import {PostInfoViewComponent} from './posts/pages/post-info-view/post-info-view.component';
import {LoginComponent} from './public/pages/login/login.component';


const PageNotFoundComponent = () =>
  import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home',  component: HomeComponent },
  { path: 'posts', component: PostsPageComponent },
  { path: 'posts/post-info/:id', component: PostInfoViewComponent},
  { path: 'profile', component: ProfilePageComponent },
  { path: '',      redirectTo: '/login', pathMatch: 'full' },
  { path: '**',    loadComponent: PageNotFoundComponent },

];
