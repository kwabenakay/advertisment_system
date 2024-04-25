import { createReducer, on } from '@ngrx/store';
import { initialChats } from './chats.state';
import * as chatsActions from './chats.actions';

export const chatReducer = createReducer(
  initialChats,
  on(chatsActions.setChats, (state, { ...chats }) => [...chats.chats])
);
