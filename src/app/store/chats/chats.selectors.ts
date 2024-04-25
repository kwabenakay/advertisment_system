import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const getChats = createSelector(
  (state: StoreSate) => state,
  (state) => state.chats
);
