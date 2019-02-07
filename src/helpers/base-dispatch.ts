import { StoreState } from './../store/root-reducer';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { PageAction } from '../pages/page/action-creators';

export type BaseDispatch<A extends Action> = ThunkDispatch<StoreState, undefined, A | PageAction>;
