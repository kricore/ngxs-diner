import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { TableReservationViewModel } from '../../models/reservation.view-model';
import { TableCardComponent } from '../table-card/table-card.component';

@Component({
  selector: 'app-tables-view',
  templateUrl: './tables-view.component.html',
  styleUrls: ['./tables-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatGridListModule, NgFor, TableCardComponent],
})
export class TablesViewComponent {
  @Input() tableReservations: TableReservationViewModel[] = [];
}
