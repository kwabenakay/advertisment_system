import { createReducer, on } from '@ngrx/store';
import {  initialContacts } from './contacts.state';
import * as constactsActions from './contacts.actions';

export const contactReducers = createReducer(
  initialContacts,
  on(constactsActions.addContacts, (state, { ...contact }) => [
    ...contact.contacts,
    ...state,
  ]),

  on(constactsActions.deleteContacts, (state, { ...contactIds }) => {
    if (contactIds.contactIds.length === 1) {
      return state.filter((_, index) => index !== contactIds.contactIds[0]);
    } else {
      for (const id of contactIds.contactIds) {
        state.filter((_, index) => index !== id);
      }
    }
    return [...state];
  }),

  on(constactsActions.editContact, (state, { ...contact }) => {
    state[contact.contactId] = contact.newContact;
    return [...state];
  })
);
