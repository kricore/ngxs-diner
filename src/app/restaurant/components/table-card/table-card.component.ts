import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { JsonPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { TableOrderViewModel } from '../../models/order.view-model';

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

  reserveTable() {}

  captureOrder() {}

  cancelTableReservation(): void {}
}
