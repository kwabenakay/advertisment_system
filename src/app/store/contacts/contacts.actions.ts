import { createAction, props } from '@ngrx/store';
import { Contact } from '../store.state';

const LOAD_CONTACTS = '[CONTACT] load contacts';
const LOAD_ERROR = '[CONTACT] load error';
const ADD_CONTACT = '[CONTACT] add contact';
const EDIT_CONTACT = '[CONTACT] edit contact';
const DELETE_CONTACT = '[CONTACT] delete contact';

export const loadContacts = createAction(LOAD_CONTACTS);
export const loadError = createAction(LOAD_ERROR);

export const addContacts = createAction(
  ADD_CONTACT,
  props<{ contacts: Contact[] }>()
);

export const editContact = createAction(
  EDIT_CONTACT,
  props<{ contactId: number; newContact: Contact }>()
);

export const deleteContacts = createAction(
  DELETE_CONTACT,
  props<{ contactIds: number[] }>()
);
