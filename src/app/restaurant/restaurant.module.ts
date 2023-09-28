import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { Actions, NgxsModule, ofActionDispatched } from '@ngxs/store';

import { OrderingDialogsService } from './dialogs/ordering-dialogs.service';
import { EditTableOrder } from './state/actions';
import { OrdersState } from './state/orders.state';
import { TablesState } from './state/tables.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
    NgxsModule.forFeature([OrdersState, TablesState]),
  ],
})
export class RestaurantModule {
  constructor(private actions: Actions, dialog: OrderingDialogsService) {
    this.actions.pipe(ofActionDispatched(EditTableOrder)).subscribe((action: EditTableOrder) => {
      dialog.openTableOrder(action.tableName);
    });
  }
}
