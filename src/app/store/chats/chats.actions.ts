import { createAction, props } from '@ngrx/store';

const LOAD_CHATS = '[CHATS] load chats';
const SET_CHATS = '[CHATS] set chats';

export const loadChats = createAction(LOAD_CHATS);
export const setChats = createAction(SET_CHATS, props<{ chats: any[] }>());
