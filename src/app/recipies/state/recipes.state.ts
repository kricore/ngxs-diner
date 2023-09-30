import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, State, StateContext } from '@ngxs/store';

import { tap } from 'rxjs/operators';
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

  ngxsOnInit(ctx?: StateContext<any>): void {
    ctx.dispatch(new LoadRecipes());
  }

  @Action(LoadRecipes)
  protected loadRecipes(ctx: StateContext<RecipesStateModel>, action: LoadRecipes) {
    return this.api.loadRecipes().pipe(
      tap(data => {
        ctx.patchState({ items: data.recipe });
      })
    );
  }
}
