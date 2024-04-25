import { createReducer, on } from '@ngrx/store';
import { initialMessages } from './messages.state';
import * as messageActions from './messages.actions';

export const messageReducer = createReducer(
  initialMessages,
  on(messageActions.setMessages, (_, messages) => ({
    ...messages.messages,
  }))
);
