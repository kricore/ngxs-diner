import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { insertItem, patch, removeItem } from '@ngxs/store/operators';

import { Order, OrdersMap } from '../models';
import { AddTableChoice, CancelReservation, RemoveTableChoice, ReserveTable } from './actions';

type OrdersStateModel = OrdersMap;

type LocalStateModel = OrdersStateModel;
type LocalStateContext = StateContext<OrdersStateModel>;

@State<OrdersStateModel>({
  name: 'orders',
  defaults: {},
})
@Injectable()
export class OrdersState {
  @Selector()
  static orders(state: LocalStateModel): OrdersStateModel {
    return state;
  }

  @Action(ReserveTable)
  protected reserveTable(ctx: LocalStateContext, action: ReserveTable): void {
    const { tableName } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: { tableName, choices: [], persons: null },
      })
    );
  }

  @Action(CancelReservation)
  protected cancelReservation(ctx: LocalStateContext, action: CancelReservation): void {
    const { tableName } = action;
    ctx.setState(
      patch<LocalStateModel>({ [tableName]: null })
    );
  }

  @Action(AddTableChoice)
  protected addTableChoice(ctx: StateContext<OrdersStateModel>, action: AddTableChoice): void {
    const { tableName, choice } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: patch<Order>({ choices: insertItem(choice) }),
      })
    );
  }

  @Action(RemoveTableChoice)
  protected removeTableChoice(ctx: LocalStateContext, action: RemoveTableChoice): void {
    const { tableName, choice } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: patch<Order>({ choices: removeItem(item => item === choice) }),
      })
    );
  }
}
