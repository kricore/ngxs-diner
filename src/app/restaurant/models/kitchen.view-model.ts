export interface KitchenViewModel {
  productionSheet: ReservationCount[];
}

export interface ReservationCount {
  recipe: string;
  count: number;
}
