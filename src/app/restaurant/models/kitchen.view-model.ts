export interface KitchenViewModel {
  productionSheet: ReservationCount[];
}

export interface ReservationCount {
  item: string;
  count: number;
}
