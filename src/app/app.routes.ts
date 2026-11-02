import { Routes } from '@angular/router';
import {DogList} from './Components/dog-list/dog-list';
import {DogDetail} from './Components/dog-detail/dog-detail';
import {DogByBreed} from './Components/dog-by-breed/dog-by-breed';

export const routes: Routes = [

  { path: '', redirectTo: '/dogs', pathMatch: 'full' },
  { path: 'dogs', component: DogList },
  { path: 'dogs/breed/:breed', component: DogByBreed },
  { path: 'dogs/:id', component: DogDetail },
  //{ path: 'favourites', component: Favourites },


];
