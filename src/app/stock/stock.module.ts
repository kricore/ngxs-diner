import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { NgxsModule } from '@ngxs/store';

import { StockRoutingModule } from './stock-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
    StockRoutingModule,
    NgxsModule.forFeature([]),
  ],
})
export class StockModule {}
