import { createAction, props } from '@ngrx/store';
import { Overview } from '../store.state';

const LOAD_OVERVIEW = '[OVERVIEW] load overview';
const SET_OVERVIEW = '[OVERVIEW] set overview';

export const setOverview = createAction(SET_OVERVIEW, props<{overview:Overview}>());
export const loadOverview = createAction(LOAD_OVERVIEW);
