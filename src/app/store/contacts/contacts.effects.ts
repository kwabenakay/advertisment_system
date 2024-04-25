import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from '../../services/api/api.service';
import { exhaustMap, map } from 'rxjs';
import * as contactsAction from './contacts.actions';

@Injectable()
export class ContactsEffect {
  private api = inject(ApiService);
  private actions = inject(Actions);
  loadContact$ = createEffect(() =>
    this.actions.pipe(
      ofType(contactsAction.loadContacts),
      exhaustMap(() =>
        this.api
          .geContacts()
          .pipe(
            map((returnData) =>
              contactsAction.addContacts({ contacts: returnData })
            )
          )
      )
    )
  );
}
