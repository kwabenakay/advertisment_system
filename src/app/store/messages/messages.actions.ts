import { createAction, props } from '@ngrx/store';
import { Messages } from '../store.state';

const LOAD_MESSAGES = '[MESSAGES] load messages';
const SET_MESSAGES = '[MESSAGES] set messages';

export const loadMessages = createAction(LOAD_MESSAGES,props<{id:string}>());
export const setMessages = createAction(
  SET_MESSAGES,
  props<{ messages: Messages }>()
);
