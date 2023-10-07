import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { ReservationViewComponent } from '../components/reservation-view/reservation-view.component';

@Injectable({
  providedIn: 'root',
})
export class ReservationDialogService {
  constructor(private dialog: MatDialog) {}

  openTableOrder(tableName: string): void {
    const dialogRef = this.dialog.open(ReservationViewComponent, {
      // width: '350px',
      data: { tableName },
    });
  }
}
