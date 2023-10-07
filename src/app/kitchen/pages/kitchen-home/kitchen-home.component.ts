import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { ReservationsListComponent } from '../../components/reservations-list/reservations-list.component';

@Component({
  selector: 'app-kitchen-home',
  standalone: true,
  imports: [CommonModule, ReservationsListComponent, AsyncPipe],
  templateUrl: './kitchen-home.component.html',
  styleUrls: ['./kitchen-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenHomeComponent {
  viewModel$ = of({
    productionSheet: [],
  });
}
