import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { JsonPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { TableOrderViewModel } from '../../models/order.view-model';
import { CancelReservation, EditTableOrder, ReserveTable } from '../../state/actions';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyCardModule, NgIf, MatIconModule, MatLegacyButtonModule, JsonPipe],
})
export class TableCardComponent {
  @Input() tableOrder: TableOrderViewModel = null;

  private _store = inject(Store);

  async reserveTable(): Promise<void> {
    await this._store.dispatch(new ReserveTable(this.tableOrder.table.name)).toPromise();
    await this.captureOrder();
  }

  async captureOrder(): Promise<void> {
    await this._store.dispatch(new EditTableOrder(this.tableOrder.table.name)).toPromise();
  }

  cancelTableReservation(): void {
    this._store.dispatch(new CancelReservation(this.tableOrder.table.name));
  }
}
