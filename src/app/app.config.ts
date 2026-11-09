import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {DOG_CONFIG} from './shared/dog-config';
import {DogService} from './services/dog';
import {MockDogService} from './services/mock-dog-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: DOG_CONFIG,
      useValue:{apiBaseUrl: 'https://dogapi.dog/', defaultBreed: ''}
    },
    {
      //Change useClass from MockDogService to DogService to return the original placeholder data
      provide: DogService, useClass: DogService
    }
  ]
};
