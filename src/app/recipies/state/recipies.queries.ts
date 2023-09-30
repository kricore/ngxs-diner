import { createPropertySelectors } from '@ngxs/store';

import { RecipesState, RecipesStateModel } from './recipes.state';

export namespace RecipesStateQueries {
  export const { items: recipes } = createPropertySelectors<RecipesStateModel>(RecipesState);
}
