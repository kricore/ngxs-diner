import { createPropertySelectors, createSelector } from '@ngxs/store';

import { OrdersMap, Table } from '../models';
import { KitchenViewModel } from '../models/kitchen.view-model';
import { OrderingViewModel } from '../models/order.view-model';
import { TablesState, TablesStateModel } from './tables.state';

export namespace TablesStateQueries {
  export const { items, orders } = createPropertySelectors<TablesStateModel>(TablesState);

  export const sortedTables = createSelector([items], (tables: Table[]) => {
    return [...tables].sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  export const getCountOfReservedTables = createSelector([orders], (orders: OrdersMap) => {
    return Object.entries(orders).filter(([_, value]) => !!value).length;
  });

  export const getViewModel = createSelector(
    [sortedTables, orders],
    (sortedTables: Table[], orders: OrdersMap): OrderingViewModel => {
      const tablesViewModels = sortedTables.map(table => {
        const order = orders[table.name];
        const isOpen = !!order;
        return { table, order, isOpen };
      });
      return {
        tableOrders: tablesViewModels,
      };
    }
  );

  export const getAllOrderedItemsCountMap = createSelector(
    [orders],
    (orders: OrdersMap): Record<string, number> => {
      const orderChoices = Object.keys(orders).flatMap(key => orders[key].choices);
      const itemCounts = orderChoices.reduce<Record<string, number>>((acc, order) => {
        const currentCount = acc[order] || 0;
        acc[order] = currentCount + 1;
        return acc;
      }, {});
      return itemCounts;
    }
  );

  export const getKitchenViewModel = createSelector(
    [getAllOrderedItemsCountMap],
    (itemCountMap: Record<string, number>): KitchenViewModel => {
      const productionSheet = Object.keys(itemCountMap).map(key => ({
        item: key,
        count: itemCountMap[key],
      }));

      return { productionSheet };
    }
  );
}
