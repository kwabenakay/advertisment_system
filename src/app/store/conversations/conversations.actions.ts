import { createAction, props } from '@ngrx/store';
import { Conversation } from './../store.state';


const LOAD_CONVERSATION = '[CONVERSATIONS] load conversations';
const SET_CONVERSATION = '[CONVERSATIONS] set conversations';
const UPDATE_CONVERSATION = '[CONVERSATIONS] update conversations';

export const loadConversations = createAction(LOAD_CONVERSATION);
export const updateConversations = createAction(UPDATE_CONVERSATION, props<Conversation>());
export const setConversations = createAction(SET_CONVERSATION, props<{topConversations:Conversation[]}>());
