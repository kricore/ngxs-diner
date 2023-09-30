import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RestaurantModule } from './restaurant/restaurant.module';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(BrowserModule, RestaurantModule), provideAnimations(), provideRouter(routes)],
};
