import { createPropertySelectors, createSelector } from '@ngxs/store';

import { Table } from '../models';
import { OrderingViewModel } from '../models/order.view-model';
import { TablesState, TablesStateModel } from './tables.state';

export namespace TablesStateQueries {
  export const { items } = createPropertySelectors<TablesStateModel>(TablesState);

  export const sortedTables = createSelector([items], (tables: Table[]) => {
    return [...tables].sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  export const getViewModel = createSelector(
    [sortedTables],
    (sortedTables: Table[]): OrderingViewModel => {
      const tablesViewModels = sortedTables.map(table => {
        const isOpen = false;
        return { table, isOpen };
      });
      return {
        tableOrders: tablesViewModels,
      };
    }
  );
}
