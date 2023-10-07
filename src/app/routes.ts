import { Routes } from '@angular/router';
import { KitchenHomeComponent } from './kitchen/pages/kitchen-home/kitchen-home.component';
import { RestaurantHomePageComponent } from './restaurant/pages/restaurant-home/restaurant-home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full',
  },
  { path: 'restaurant', component: RestaurantHomePageComponent },
  { path: 'kitchen', component: KitchenHomeComponent },
];
