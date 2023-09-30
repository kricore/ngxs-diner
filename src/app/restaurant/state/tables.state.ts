import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';

import { tap } from 'rxjs/operators';
import { Table } from '../models';
import { TablesApiService } from '../services/tables-api.service';
import { LoadTables } from './actions';
export interface TablesStateModel {
  items: Table[];
}

@State<TablesStateModel>({
  name: 'tables',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TablesState implements NgxsOnInit {
  constructor(private api: TablesApiService) {}

  ngxsOnInit(ctx?: StateContext<TablesStateModel>): void {
    ctx.dispatch(new LoadTables());
  }

  @Action(LoadTables)
  protected async loadTables(ctx: StateContext<TablesStateModel>, action: LoadTables) {
    return this.api.loadTables().pipe(tap(data => ctx.patchState({ items: data })));
  }
}
