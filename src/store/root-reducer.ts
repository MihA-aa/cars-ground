import { combineReducers } from 'redux';
import { AthorizationProps } from '../hocs/authorization';

const initialState: AthorizationProps = {
    isAuthorized: true
}

export const authorizeReducer = (state = initialState, action: any) => {
    return state
}

export default combineReducers({ authorize: authorizeReducer });