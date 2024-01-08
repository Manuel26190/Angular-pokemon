import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

import { routes } from './pokemon/app.routes'; 
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
