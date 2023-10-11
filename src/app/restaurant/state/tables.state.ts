import { Inject, Injectable, inject } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { Table } from '../models';
import { TablesApiService } from '../services/tables-api.service';
import { LoadTables } from '../actions/tables.actions';

export interface TablesStateModel {
  items: Table[];
}

@State<TablesStateModel>({
  name: 'table',
  defaults: {
    items: [
      {
        name: 'test',
        capacity: 1,
      },
    ],
  },
})
@Injectable()
export class TablesState implements NgxsOnInit {
  apiService = inject(TablesApiService);

  // @Selector()
  // static tables(tables: LocalStateModel): TablesStateModel {
  //   return tables;
  // }

  ngxsOnInit(ctx: StateContext<TablesStateModel>): void {
    ctx.dispatch(new LoadTables());
  }

  @Action(LoadTables)
  protected async loadTables(ctx: StateContext<TablesStateModel>) {
    const items = await this.apiService.loadTables().toPromise();
    ctx.patchState({ items });
  }
}
