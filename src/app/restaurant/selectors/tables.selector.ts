import { Selector, createPropertySelectors, createSelector } from '@ngxs/store';
import { TablesState, TablesStateModel } from '../state/tables.state';
import { Table } from '../models';

export const { items: getAllTables } = createPropertySelectors<TablesStateModel>(TablesState);

export const getAllReservations = createSelector([getAllTables], tables => {
  return {
    tableReservations: tables.map((table: Table) => ({
      table,
      isOpen: false,
    })),
  };
});
