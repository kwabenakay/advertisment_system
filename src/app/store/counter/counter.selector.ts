import { createSelector } from '@ngrx/store';

export const selectCount = createSelector(
  (state:{state:{count:number;name:string}}) => state.state,
  (state) => state.count
);
