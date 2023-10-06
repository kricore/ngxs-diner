import { createPropertySelectors, createSelector } from '@ngxs/store';

import { Table, TableReservation } from '../models';
import { ReservationViewModel } from '../models/reservation.view-model';
import { TablesState, TablesStateModel } from './tables.state';

export namespace TablesStateQueries {
  export const { items, reservations } = createPropertySelectors<TablesStateModel>(TablesState);

  export const sortedTables = createSelector([items], (tables: Table[]) => {
    return [...tables].sort((a, b) => (a.name > b.name ? 1 : -1));
  });

  export const getCountOfReservedTables = createSelector([reservations], (reservations: TableReservation) => {
    return Object.entries(reservations).filter(([_, value]) => !!value).length;
  });

  export const getViewModel = createSelector(
    [sortedTables, reservations],
    (sortedTables: Table[], reservations: TableReservation): ReservationViewModel => {
      const tablesViewModels = sortedTables.map(table => {
        const reservation = reservations[table.name];
        const isOpen = !!reservation;
        return { table, reservation, isOpen };
      });
      return {
        tableReservations: tablesViewModels,
      };
    }
  );

  export const getAllOrderedItemsCountMap = createSelector(
    [reservations],
    (reservations: TableReservation): Record<string, number> => {
      const orderChoices = Object.keys(reservations).flatMap(key => reservations[key].choices);
      const itemCounts = orderChoices.reduce<Record<string, number>>((acc, order) => {
        const currentCount = acc[order] || 0;
        acc[order] = currentCount + 1;
        return acc;
      }, {});
      return itemCounts;
    }
  );
}
