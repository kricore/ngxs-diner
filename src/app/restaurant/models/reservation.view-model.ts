import { Reservation, Table } from '.';
export interface ReservationViewModel {
  tableReservations: TableReservationViewModel[];
}

export interface TableReservationViewModel {
  table: Table;
  reservation: Reservation | null;
  isOpen: boolean;
}
