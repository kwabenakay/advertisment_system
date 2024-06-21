import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../shared/api-service/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as opteratorActions from './overview.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AlertService } from '../../shared/alert-service/alert.service';
@Injectable()
export class OverviewEffect {
  private apiService: ApiService = inject(ApiService);
  private actions = inject(Actions);
  private alert = inject(AlertService);

  loadOperators$ = createEffect(() =>
    this.actions.pipe(
      ofType(opteratorActions.loadOverview),
      exhaustMap(() =>
        this.apiService.getOverview().pipe(
          map((overview) => opteratorActions.setOverview({ overview })),
          catchError((error) => {
            this.alert.triggerAlert('error', 'Failed to load data');
            return of(error);
          })
        )
      )
    )
  );
}
