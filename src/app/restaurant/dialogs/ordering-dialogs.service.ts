import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { OrderViewComponent } from '../components/order-view/order-view.component';

@Injectable({
  providedIn: 'root',
})
export class OrderingDialogsService {
  constructor(private dialog: MatDialog) {}

  openTableOrder(tableName: string): void {
    const dialogRef = this.dialog.open(OrderViewComponent, {
      // width: '350px',
      data: { tableName },
    });
  }
}
