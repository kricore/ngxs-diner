import { Table } from '.';
export interface ReservationViewModel {
  tableReservations: TableReservationViewModel[];
}

export interface TableReservationViewModel {
  table: Table;
  isOpen: boolean;
}
