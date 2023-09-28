import { Routes } from '@angular/router';
import { KitchenHomePageComponent } from './kitchen/pages/kitchen-home/kitchen-home-page.component';
import { RestaurantHomePageComponent } from './restaurant/pages/restaurant-home/restaurant-home-page.component';
import { StockHomePageComponent } from './stock/pages/stock-home/stock-home-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/restaurant',
    pathMatch: 'full',
  },
  { path: 'restaurant', component: RestaurantHomePageComponent },
  { path: 'kitchen', component: KitchenHomePageComponent },
  { path: 'stock', component: StockHomePageComponent },
];
