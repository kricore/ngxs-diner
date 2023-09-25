import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { OrdersQueries } from 'src/app/restaurant/queries/orders.queries';

@Component({
  selector: 'app-reserved-tables',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="reserved-tables">{{ reservedTables$ | async }}</div> `,
  styles: [
    `
      :host {
        background-color: white;
        color: black;
        border-radius: 50%;
        width: 25px;
        height: 25px;
        line-height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservedTablesComponent {
  @Select(OrdersQueries.getCountOfReservedTables) reservedTables$: Observable<number>;
}
