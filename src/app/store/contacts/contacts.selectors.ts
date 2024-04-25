import { createSelector } from '@ngrx/store';
import { StoreSate } from '../store.state';

export const getContacts = createSelector(
  (state: StoreSate) => state,
  (state) => state.contacts
);

