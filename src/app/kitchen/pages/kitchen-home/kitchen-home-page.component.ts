import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { TablesStateQueries } from 'src/app/restaurant/state/tables.queries';
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
  private _store = inject(Store);
  viewModel$: Observable<KitchenViewModel> = this._store.select(TablesStateQueries.getKitchenViewModel);
}
