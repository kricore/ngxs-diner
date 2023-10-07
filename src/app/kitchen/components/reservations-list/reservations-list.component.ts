import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { ReservationCount } from 'src/app/restaurant/models/kitchen.view-model';

@Component({
  selector: 'app-reservations-list',
  standalone: true,
  imports: [MatLegacyTableModule, CommonModule],

  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationsListComponent {
  @Input() reservations: ReservationCount[];
}
