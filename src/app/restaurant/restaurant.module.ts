import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
  ],
})
export class RestaurantModule {}
