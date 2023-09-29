import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { TablesViewComponent } from '../../components/tables-view/tables-view.component';
import { OrderingViewModel } from '../../models/order.view-model';
import { TablesQueries } from '../../state/tables.queries';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, TablesViewComponent, AsyncPipe],
})
export class RestaurantHomePageComponent {
  @Select(TablesQueries.getViewModel) viewModel$: Observable<OrderingViewModel>;
}
