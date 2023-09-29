import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { TablesQueries } from 'src/app/restaurant/state/tables.queries';
import { KitchenViewModel } from '../../../restaurant/models/kitchen.view-model';
import { OrdersListComponent } from '../../components/orders-list/orders-list.component';

@Component({
  templateUrl: './kitchen-home-page.component.html',
  styleUrls: ['./kitchen-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, OrdersListComponent, AsyncPipe],
})
export class KitchenHomePageComponent {
  @Select(TablesQueries.getKitchenViewModel) viewModel$: Observable<KitchenViewModel>;
}
