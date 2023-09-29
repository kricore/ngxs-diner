import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { NgIf } from '@angular/common';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { OrderCount } from '../../../restaurant/models/kitchen.view-model';

export interface OrdersListDialogData {
  tableName: string;
}

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyTableModule, NgIf],
})
export class OrdersListComponent {
  @Input() orders: OrderCount[];
}
