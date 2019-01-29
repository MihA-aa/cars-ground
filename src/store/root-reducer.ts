import { combineReducers } from 'redux';
import { reducer as formReducer, FormStateMap } from 'redux-form';

import { UserAuthState, userAuthReducer } from '../pages/login/reducer';
import { adReducer, AdState } from '../pages/ad-edit/reducer';

export interface StoreState {
	form: FormStateMap;
	userAuth: UserAuthState;
	ad: AdState;
}

const store = {
	userAuth: userAuthReducer,
	form: formReducer,
	ad: adReducer,
};

export default combineReducers<StoreState>(store);
