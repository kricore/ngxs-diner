import { Selector } from '@ngxs/store';

import { OrdersMap, Table } from '../models';
import { KitchenViewModel } from '../models/kitchen.view-model';
import { OrderingViewModel } from '../models/order.view-model';
import { TablesState } from './tables.state';

export class TablesQueries {
  @Selector([TablesState.tables, TablesState.orders])
  static getViewModel(sortedTables: Table[], orders: OrdersMap): OrderingViewModel {
    const tablesViewModels = sortedTables.map(table => {
      const order = orders[table.name];
      const isOpen = !!order;
      return { table, order, isOpen };
    });
    return {
      tableOrders: tablesViewModels,
    };
  }

  @Selector([TablesState.orders])
  static getCountOfReservedTables(orders: OrdersMap): number {
    return Object.entries(orders).filter(([_, value]) => !!value).length;
  }

  @Selector([TablesState.orders])
  static getAllOrderedItemsCountMap(orders: OrdersMap): Record<string, number> {
    const orderChoices = Object.keys(orders).flatMap(key => orders[key].choices);
    const itemCounts = orderChoices.reduce<Record<string, number>>((acc, order) => {
      const currentCount = acc[order] || 0;
      acc[order] = currentCount + 1;
      return acc;
    }, {});
    return itemCounts;
  }

  @Selector([TablesQueries.getAllOrderedItemsCountMap])
  static getKitchenViewModel(itemCountMap: Record<string, number>): KitchenViewModel {
    const productionSheet = Object.keys(itemCountMap).map(key => ({
      item: key,
      count: itemCountMap[key],
    }));

    return { productionSheet };
  }
}
