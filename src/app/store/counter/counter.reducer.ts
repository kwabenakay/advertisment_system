import { createReducer, on } from '@ngrx/store';
import { decrease, increase, reset } from './counter.actions';
import { initialState } from './counter.state';

export const countReducers = createReducer(
  initialState,
  on(increase, (state) => {
    return { ...state, count: state.count + 1 };
  }),
  on(decrease, (state) => {
    return { ...state, count: state.count - 1 };
  }),
  on(reset, (state) => {
    return { ...state, count: 0 };
  })
);
