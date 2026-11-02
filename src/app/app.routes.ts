import { Routes } from '@angular/router';
import {DogList} from './Components/dog-list/dog-list';
import {DogDetail} from './Components/dog-detail/dog-detail';
import {DogByBreed} from './Components/dog-by-breed/dog-by-breed';
import {DogForm} from './Components/dog-form/dog-form';
import {PageNotFound} from './Components/page-not-found/page-not-found';
import {authGuard} from './services/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogList },
  { path: 'dogs/breed/:breed', component: DogByBreed },
  { path: 'dogs/:id', component: DogDetail },
  { path: 'add', component: DogForm },
  { path: 'edit/:id', component: DogForm, canActivate:[authGuard] },
  //{ path: 'favourites', component: Favourites },


  { path: '**', component: PageNotFound },


];
