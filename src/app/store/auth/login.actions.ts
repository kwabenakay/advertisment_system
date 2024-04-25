import { createAction, props } from '@ngrx/store';
import { LoginData, RegisterData } from '../../app';

const LOAD_LOGIN = '[LOGIN] load login';
const SET_LOGIN = '[LOGIN] set login';
const LOGOUT = '[LOGOUT]  logout';
const REGISTER = '[REGISTER]  register';

export const triggerLogin = createAction(
  LOAD_LOGIN,
  props<{ login: LoginData }>()
);
export const triggerRegister = createAction(
  REGISTER,
  props<{ register: RegisterData }>()
);
export const setLogin = createAction(SET_LOGIN, props<{ login: any }>());
export const logout = createAction(LOGOUT);
