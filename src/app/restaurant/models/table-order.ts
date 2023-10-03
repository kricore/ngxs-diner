export interface Order {
  tableName: string;
  choices: string[];
}

export interface OrdersMap {
  [tableName: string]: Order | null;
}
