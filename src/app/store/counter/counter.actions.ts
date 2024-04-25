import { createAction } from '@ngrx/store';
const INCREASE= '[counter] increase'
const DECREASE= '[counter] decrease'
const RESET= '[counter] reset'
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const reset = createAction(RESET);
