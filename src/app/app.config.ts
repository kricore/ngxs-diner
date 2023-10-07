import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RecipeModule } from './recipes/recipes.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, RestaurantModule, RecipeModule),
    provideAnimations(),
    provideRouter(routes),
  ],
};
