import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import { routes } from './app.routes';
import {DOG_CONFIG} from './shared/dog-config';
import {DogService} from './services/dog';
import {MockDogService} from './services/mock-dog-service';
import {HttpClient, provideHttpClient, withInterceptors} from '@angular/common/http';
import {loadingIntercepter} from './intercepters/loading-intercepter';
import {errorInterceptor} from './intercepters/error-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withInterceptors([loadingIntercepter, errorInterceptor])),
    {
      provide: DOG_CONFIG,
      useValue:{apiBaseUrl: 'https://dogapi.dog/api/v2', defaultBreed: 'Alaskan Malamute'}
    },
    {
      //Change useClass from MockDogService to DogService to return the original placeholder data
      provide: DogService, useClass: DogService
    },
  ]
};
