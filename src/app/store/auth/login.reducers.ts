import { createReducer, on } from '@ngrx/store';
import * as loginActions from './login.actions';
import { initialLoginData } from './login.state';

export const chatReducer = createReducer(
  initialLoginData,
  on(loginActions.setLogin, (_, loginData) => {

    return loginData.login;
  }),
  on(loginActions.logout, (state) => {
    return state;
  })
);
