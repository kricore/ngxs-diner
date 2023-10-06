import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { JsonPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { TableReservationViewModel } from '../../models/reservation.view-model';

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

  reserveTable() {}

  captureOrder() {}

  cancelTableReservation(): void {}
}
