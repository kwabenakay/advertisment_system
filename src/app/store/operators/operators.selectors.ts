import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const selectAllOperators = createSelector(
  (state: StoreSate) => state,
  (state) => state.operators
);
