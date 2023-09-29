import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { Recipe } from '../models';
import { RecipesApiService } from '../services/recipes-api.service';
import { LoadRecipes } from './actions';

export interface RecipesStateModel {
  items: Recipe[];
}

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    items: [],
  },
})
@Injectable()
export class RecipesState implements NgxsOnInit {
  constructor(private api: RecipesApiService) {}

  @Selector()
  static recipes(state: RecipesStateModel): Recipe[] {
    return state.items;
  }

  ngxsOnInit(ctx?: StateContext<any>): void {
    ctx.dispatch(new LoadRecipes());
  }

  @Action(LoadRecipes)
  protected async loadRecipes(ctx: StateContext<RecipesStateModel>, action: LoadRecipes): Promise<void> {
    const data = await this.api.loadRecipes().toPromise();
    ctx.patchState({ items: data.recipe });
  }
}
