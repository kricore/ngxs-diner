export interface KitchenViewModel {
  productionSheet: OrderCount[];
}

export interface OrderCount {
  item: string;
  count: number;
}
