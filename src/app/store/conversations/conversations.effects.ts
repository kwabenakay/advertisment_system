import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../shared/api-service/api.service';
import * as converstionsAction from './conversations.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class ConversationEffects {
  private actions: Actions = inject(Actions);
  private apiService: ApiService = inject(ApiService);

  loadConversations$ = createEffect(() =>
    this.actions.pipe(
      ofType(converstionsAction.loadConversations),
      exhaustMap(() =>
        this.apiService.getConversations().pipe(
          map((returnValue) =>
            converstionsAction.setConversations({
              topConversations: returnValue,
            })
          )
        )
      )
    )
  );
}
