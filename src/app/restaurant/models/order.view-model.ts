import { Table } from '.';
export interface OrderingViewModel {
  tableOrders: TableOrderViewModel[];
}

export interface TableOrderViewModel {
  table: Table;
  isOpen: boolean;
}
