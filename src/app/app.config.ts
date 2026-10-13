import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {DOG_CONFIG} from './shared/dog-config';
import {DogService} from './services/dog';
import {MockDogService} from './services/mock-dog-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: DOG_CONFIG,
      useValue:{apiBaseUrl: 'madeUpApi.example.com/api', defaultBreed: 'Unknown Breed'}
    },
    {
      provide: DogService, useClass: MockDogService
    }
  ]
};
