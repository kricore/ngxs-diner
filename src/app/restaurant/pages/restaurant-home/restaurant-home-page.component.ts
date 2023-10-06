import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { TablesViewComponent } from '../../components/tables-view/tables-view.component';
import { ReservationViewModel } from '../../models/reservation.view-model';
import { TablesApiService } from '../../services/tables-api.service';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, TablesViewComponent, AsyncPipe],
})
export class RestaurantHomePageComponent {
  viewModel$: Observable<ReservationViewModel> = inject(TablesApiService)
    .loadTables()
    .pipe(
      map(tables => ({
        tableReservations: tables.map(table => ({
          table,
          isOpen: false,
        })),
      }))
    );
}
