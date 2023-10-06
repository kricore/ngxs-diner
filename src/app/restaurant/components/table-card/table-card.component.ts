import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { JsonPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { TableReservationViewModel } from '../../models/reservation.view-model';
import { CancelReservation, ReserveTable } from '../../state/actions';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyCardModule, NgIf, MatIconModule, MatLegacyButtonModule, JsonPipe],
})
export class TableCardComponent {
  @Input() tableReservation: TableReservationViewModel = null;

  private _store = inject(Store);

  async reserveTable() {
    this._store.dispatch(new ReserveTable(this.tableReservation.table.name));
  }

  captureOrder() {
    console.log('does nothing yet');
  }

  cancelTableReservation(): void {
    this._store.dispatch(new CancelReservation(this.tableReservation.table.name));
  }
}
