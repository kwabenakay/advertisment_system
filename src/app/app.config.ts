import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { countReducers } from './store/counter/counter.reducer';
import { conversationReducers } from './store/conversations/conversations.reudcers';
import { provideEffects } from '@ngrx/effects';
import { ConversationEffects } from './store/conversations/conversations.effects';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { contactReducers } from './store/contacts/contacts.reducers';
import { ContactsEffect } from './store/contacts/contacts.effects';
import { operatorsReducers } from './store/operators/operators.reducers';
import { OperatorEffects } from './store/operators/operators.effect';
import { NgxPaginationModule } from 'ngx-pagination';
import { overviewReducers } from './store/overview/overview.reducers';
import { OverviewEffect } from './store/overview/overview.effects';
import { chatReducer } from './store/chats/chats.reducers';
import { ChatsEffects } from './store/chats/chats.effects';
import { messageReducer } from './store/messages/messages.reducers';
import { MessagesEffect } from './store/messages/messages.effects';
import { LoginEffects } from './store/auth/login.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom([NgxPaginationModule]),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideStore(),
    provideState({ name: 'count', reducer: countReducers }),
    provideState({ name: 'conversations', reducer: conversationReducers }),
    provideState({ name: 'contacts', reducer: contactReducers }),
    provideState({ name: 'operators', reducer: operatorsReducers }),
    provideState({ name: 'overview', reducer: overviewReducers }),
    provideState({ name: 'chats', reducer: chatReducer }),
    provideState({ name: 'messages', reducer: messageReducer }),
    provideEffects(ConversationEffects),
    provideEffects(ContactsEffect),
    provideEffects(OperatorEffects),
    provideEffects(OverviewEffect),
    provideEffects(ChatsEffects),
    provideEffects(MessagesEffect),
    provideEffects(LoginEffects),
  ],
};
