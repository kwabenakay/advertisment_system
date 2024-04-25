import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const getLoginData = createSelector(
  (state: StoreSate) => state,
  (state) => state.loginData
);
