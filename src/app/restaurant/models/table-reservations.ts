export interface Reservation {
  tableName: string;
  choices: string[];
}

export interface TableReservation {
  [tableName: string]: Reservation | null;
}
