import {InjectionToken} from '@angular/core';
export interface DogConfig{
  apiBaseUrl:string;
  defaultBreed: string;
}

export const DOG_CONFIG = new InjectionToken<DogConfig>('dog.config');

