import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../shared/api-service/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as chatActions from './chats.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class ChatsEffects {
  private apiServices: ApiService = inject(ApiService);
  private actions: Actions = inject(Actions);

  public loadChats$ = createEffect(() =>
    this.actions.pipe(
      ofType(chatActions.loadChats),
      exhaustMap(() =>
        this.apiServices
          .geChats()
          .pipe(
            map((returnValue) => chatActions.setChats({ chats: returnValue }))
          )
      )
    )
  );
}
