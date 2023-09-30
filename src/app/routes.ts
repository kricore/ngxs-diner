import { Routes } from '@angular/router';
import { RestaurantHomePageComponent } from './restaurant/pages/restaurant-home/restaurant-home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full',
  },
  { path: 'restaurant', component: RestaurantHomePageComponent },
];
