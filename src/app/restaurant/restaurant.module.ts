import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgxsModule } from '@ngxs/store';

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
export class RestaurantModule {}
