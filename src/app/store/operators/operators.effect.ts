import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../shared/api-service/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as operatorsActions from './operators.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class OperatorEffects {
  private apiService = inject(ApiService);
  private actions = inject(Actions);

  loadOperators$ = createEffect(() =>
    this.actions.pipe(
      ofType(operatorsActions.loadOperators),
      exhaustMap(() =>
        this.apiService
          .getOperators()
          .pipe(
            map((retrunValue) =>
              operatorsActions.addOperators({ operators: retrunValue })
            )
          )
      )
    )
  );
}
