import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { KitchenModule } from './kitchen/kitchen.module';
import { RecipeModule } from './recipies/recipes.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      NgxsModule.forRoot([], {
        developmentMode: !environment.production,
        selectorOptions: { injectContainerState: false, suppressErrors: false },
        executionStrategy: NoopNgxsExecutionStrategy,
      }),
      NgxsLoggerPluginModule.forRoot(),
      NgxsReduxDevtoolsPluginModule.forRoot(),
      RecipeModule,
      RestaurantModule,
      KitchenModule
    ),
    provideAnimations(),
    provideRouter(routes),
  ],
};
