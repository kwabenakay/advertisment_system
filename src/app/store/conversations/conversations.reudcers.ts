import { createReducer, on } from '@ngrx/store';
import { initialConversation } from './conversations.state';
import * as conversationAction from './conversations.actions';

export const conversationReducers = createReducer(
  initialConversation,
  (on(conversationAction.updateConversations, (state) => state),
  on(conversationAction.setConversations, (state, { ...topConversations }) => [
    ...state,
    ...topConversations.topConversations,
  ]))
);
