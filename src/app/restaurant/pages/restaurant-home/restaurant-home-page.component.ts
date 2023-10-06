import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { TablesViewComponent } from '../../components/tables-view/tables-view.component';
import { ReservationViewModel } from '../../models/reservation.view-model';
import { TablesStateQueries } from '../../state/tables.queries';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, TablesViewComponent, AsyncPipe],
})
export class RestaurantHomePageComponent {
  private _store = inject(Store);

  viewModel$: Observable<ReservationViewModel> = this._store.select(TablesStateQueries.getViewModel);
}
