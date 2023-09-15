import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgxsModule } from '@ngxs/store';

import { KitchenRoutingModule } from './kitchen-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
    KitchenRoutingModule,
    NgxsModule.forFeature([]),
  ],
})
export class KitchenModule {}
