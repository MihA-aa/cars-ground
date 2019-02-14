import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ImmutableStore } from './../store/root-reducer';
import { PageAction } from '../pages/page/action-creators';

export type BaseDispatch<A extends Action> = ThunkDispatch<
	ImmutableStore,
	undefined,
	A | PageAction
>;
