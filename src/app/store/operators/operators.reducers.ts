import { createReducer, on } from '@ngrx/store';
import { initialOperators } from './operators.state';
import * as operatorsAction from './operators.actions';

export const operatorsReducers = createReducer(
  initialOperators,
  on(operatorsAction.addOperators, (state, { ...operators }) => [
    ...state,
    ...operators.operators,
  ])
);
