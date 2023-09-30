import { ChangeDetectionStrategy, Component, Inject, OnInit, inject } from '@angular/core';
import {
  MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA,
  MatLegacyDialogRef as MatDialogRef,
  MatLegacyDialogModule,
} from '@angular/material/legacy-dialog';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AsyncPipe, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTableModule } from '@angular/material/legacy-table';
import { Recipe } from 'src/app/recipies/models';
import { RecipesStateQueries } from 'src/app/recipies/state/recipies.queries';
export interface TableViewDialogData {
  tableName: string;
}

@Component({
  selector: 'app-table-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatLegacyDialogModule, NgIf, MatLegacyTableModule, MatLegacyButtonModule, MatIconModule, AsyncPipe],
})
export class OrderViewComponent implements OnInit {
  recipes$: Observable<Recipe[]>;

  private _store = inject(Store);

  constructor(
    private matDialogRef: MatDialogRef<TableViewDialogData>,
    @Inject(MAT_DIALOG_DATA) public data: TableViewDialogData
  ) {}

  ngOnInit(): void {
    this.recipes$ = this._store.select(RecipesStateQueries.recipes);
  }

  addChoice(recipeName: string): void {
    console.log('does nothing');
  }

  removeChoice(recipeName: string): void {
    console.log('does nothing');
  }
}
