import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const getOverview = createSelector(
  (state: StoreSate) => state,
  (state) => state.overview
);
