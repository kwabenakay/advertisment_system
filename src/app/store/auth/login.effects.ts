import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../shared/api-service/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as authAction from './login.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { AlertService } from '../../shared/alert-service/alert.service';
import { AuthService } from '../../authenticated/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../store.state';
import { Res } from '../../app.interface';

@Injectable()
export class LoginEffects {
  private apiServices: ApiService = inject(ApiService);
  private actions: Actions = inject(Actions);
  private alert = inject(AlertService);
  private authService = inject(AuthService);
  private router = inject(Router);

  public triggerLogin$ = createEffect(() =>
    this.actions.pipe(
      ofType(authAction.triggerLogin),
      exhaustMap((loginData) =>
        this.apiServices.login(loginData.login).pipe(
          catchError((error) => {
            this.alert.triggerAlert('error', 'Failed to login');
            return of(error);
          }),
          map((returnValue: Res<Login>) => {
            localStorage.setItem('user', JSON.stringify(returnValue.data));
            this.authService.setAuthenticated(true);
            return authAction.setLogin({ login: returnValue.data });
          })
        )
      )
    )
  );

  public triggerRegister$ = createEffect(() =>
    this.actions.pipe(
      ofType(authAction.triggerRegister),
      exhaustMap((registrationData) =>
        this.apiServices.register(registrationData.register).pipe(
          map(() => {
            this.alert.triggerAlert('succes', 'User created successfully.');
            this.router.navigateByUrl('/login');
          }),
          catchError((error) => {
            this.alert.triggerAlert(
              'error',
              error.status === 400
                ? 'Email already exist'
                : 'Failed to create user'
            );
            return of(error);
          })
        )
      )
    )
  );
}
