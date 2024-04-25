import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api/api.service';
import * as messagesAction from './messages.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class MessagesEffect {
  private actions = inject(Actions);
  private apiService = inject(ApiService);

  loadMeassages$ = createEffect(() =>
    this.actions.pipe(
      ofType(messagesAction.loadMessages),
      exhaustMap((action) =>
        this.apiService
          .getMessages(action.id)
          .pipe(
            map((returnValue) =>
              messagesAction.setMessages({ messages: returnValue[0] })
            )
          )
      )
    )
  );
}
