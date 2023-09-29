import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Store } from '@ngxs/store';

import { NgIf } from '@angular/common';
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
  imports: [MatLegacyCardModule, NgIf, MatIconModule, MatLegacyButtonModule],
})
export class TableCardComponent {
  @Input() tableOrder: TableOrderViewModel = null;

  private store = inject(Store);

  async reserveTable(): Promise<void> {
    await this.store.dispatch(new ReserveTable(this.tableOrder.table.name)).toPromise();
    await this.captureOrder();
  }

  async captureOrder(): Promise<void> {
    await this.store.dispatch(new EditTableOrder(this.tableOrder.table.name)).toPromise();
  }

  cancelTableReservation(): void {
    this.store.dispatch(new CancelReservation(this.tableOrder.table.name));
  }
}
