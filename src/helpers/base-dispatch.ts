import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { PageState } from '../pages/page/reducer';
import { PageAction } from '../pages/page/action-creators';

export type BaseDispatch<S extends {}, A extends Action> = ThunkDispatch<
	S | PageState,
	undefined,
	A | PageAction
>;
