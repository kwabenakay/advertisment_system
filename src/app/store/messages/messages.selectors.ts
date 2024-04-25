import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const getMessages = createSelector(
  (state: StoreSate) => state,
  (state) => state.messages
);
