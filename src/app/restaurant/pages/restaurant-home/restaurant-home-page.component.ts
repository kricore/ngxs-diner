import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { TablesViewComponent } from '../../components/tables-view/tables-view.component';
import { ReservationViewModel } from '../../models/reservation.view-model';
import { TablesApiService } from '../../services/tables-api.service';
import { TablesState } from '../../state/tables.state';
import { Store } from '@ngxs/store';
import { Table } from '../../models';
import { getAllReservations, getAllTables } from '../../selectors/tables.selector';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, TablesViewComponent, AsyncPipe],
})
export class RestaurantHomePageComponent {
  viewModel$ = this.store.select(getAllReservations);

  constructor(private store: Store) {}
}
