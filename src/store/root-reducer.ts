import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { AthorizationProps } from '../helpers/hocs/authorization';

const initialState: AthorizationProps = {
	isAuthorized: true,
};

export const authorizeReducer = (state = initialState, action: any) => {
	return state;
};

export default combineReducers({ authorize: authorizeReducer, form: formReducer });
