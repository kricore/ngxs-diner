import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { JsonPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { TableReservationViewModel } from '../../models/reservation.view-model';
import { CancelReservation, EditTableReservation, ReserveTable } from '../../state/actions';

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

  async reserveTable(): Promise<void> {
    await this._store.dispatch(new ReserveTable(this.tableReservation.table.name)).toPromise();
    await this.captureOrder();
  }

  async captureOrder(): Promise<void> {
    await this._store.dispatch(new EditTableReservation(this.tableReservation.table.name)).toPromise();
  }

  cancelTableReservation(): void {
    this._store.dispatch(new CancelReservation(this.tableReservation.table.name));
  }
}
