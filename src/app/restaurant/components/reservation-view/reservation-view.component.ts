import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
  MatLegacyDialogModule,
} from '@angular/material/legacy-dialog';
import { Observable, of } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { Recipe } from 'src/app/recipes/models/recipe-data';

export interface TableViewDialogData {
  tableName: string;
}

@Component({
  selector: 'app-reservation-view',
  templateUrl: './reservation-view.component.html',
  styleUrls: ['./reservation-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyDialogModule, NgIf, MatLegacyTableModule, MatLegacyButtonModule, MatIconModule, AsyncPipe],
})
export class ReservationViewComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  constructor(
    private matDialogRef: MatDialogRef<TableViewDialogData>,
    @Inject(MAT_DIALOG_DATA) public data: TableViewDialogData
  ) {}

  ngOnInit(): void {
    this.recipes$ = of([]);
  }

  addChoice(recipeName: string): void {}

  removeChoice(recipeName: string): void {}
}
