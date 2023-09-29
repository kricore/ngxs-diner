import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { Actions, NgxsModule, ofActionDispatched } from '@ngxs/store';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { OrderingDialogsService } from './dialogs/ordering-dialogs.service';
import { EditTableOrder } from './state/actions';
import { TablesState } from './state/tables.state';
@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
    NgxsModule.forFeature([TablesState]),
  ],
})
export class RestaurantModule {
  constructor(private actions: Actions, dialog: OrderingDialogsService) {
    this.actions
      .pipe(ofActionDispatched(EditTableOrder))
      .pipe(takeUntilDestroyed())
      .subscribe((action: EditTableOrder) => {
        dialog.openTableOrder(action.tableName);
      });
  }
}
