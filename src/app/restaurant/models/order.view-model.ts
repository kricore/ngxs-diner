import { Order, Table } from '.';
export interface OrderingViewModel {
  tableOrders: TableOrderViewModel[];
}

export interface TableOrderViewModel {
  table: Table;
  order: Order | null;
  isOpen: boolean;
}
