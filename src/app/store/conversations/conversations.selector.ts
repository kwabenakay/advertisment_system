import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const selectAllConversations = createSelector(
  (state:StoreSate) => state,
  (state) => state.conversations
);
