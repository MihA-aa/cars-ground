import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { UserAuthState, userAuthReducer } from './../pages/login/reducer';

export interface StoreState {
	userAuth: UserAuthState;
}

export default combineReducers({ userAuth: userAuthReducer, form: formReducer });
