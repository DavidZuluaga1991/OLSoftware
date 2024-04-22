import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { LoadingInterceptor } from '@interceptors';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideToastr(),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(withFetch(), withInterceptors([LoadingInterceptor])), provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
