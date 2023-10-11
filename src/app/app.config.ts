import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { RecipeModule } from './recipes/recipes.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { routes } from './routes';
import { NgxsModule } from '@ngxs/store';
import { TablesState } from './restaurant/state/tables.state';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, NgxsModule.forRoot([]), RestaurantModule, RecipeModule),
    provideAnimations(),
    provideRouter(routes),
  ],
};
