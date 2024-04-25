import { createAction, props } from '@ngrx/store';
import { Operator } from '../store.state';

const LOAD_OPERATORS = '[OPERATORS] load operators';
const ADD_OPERATORS = '[OPERATORS] add operators';

export const loadOperators = createAction(LOAD_OPERATORS);
export const addOperators = createAction(
  ADD_OPERATORS,
  props<{ operators: Operator[] }>()
);
