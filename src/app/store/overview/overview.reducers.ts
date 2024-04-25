import { createReducer, on } from '@ngrx/store';
import { initalOverview } from './overview.state';
import { setOverview } from './overview.actions';

export const overviewReducers = createReducer(
  initalOverview,
  on(setOverview, (_, { ...overview }) => ({ ...overview.overview }))
);
