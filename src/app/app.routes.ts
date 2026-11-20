import { Routes } from '@angular/router';
import {DogList} from './Components/dog-list/dog-list';
import {authGuard} from './services/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogList },

  { path: 'dogs/breed/:breed', loadComponent: () => import('./Components/dog-by-breed/dog-by-breed').then(m => m.DogByBreed), },
  { path: 'dogs/:id', loadComponent: () => import('./Components/dog-detail/dog-detail').then(m => m.DogDetail), },
  { path: 'add', loadComponent: ()=> import('./Components/dog-form/dog-form').then(m=> m.DogForm) },
  { path: 'edit/:id', loadComponent: () =>
      import('./Components/dog-form/dog-form').then(m => m.DogForm), canActivate:[authGuard] },
  //{ path: 'favourites', component: Favourites },


  { path: '**', loadComponent: () =>
      import('./Components/page-not-found/page-not-found').then(m => m.PageNotFound) },


];
