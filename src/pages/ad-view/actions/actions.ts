import { ViewDispatch } from './../interfaces';
import { getAd, isOwner, removeCar } from '../../../fake-server/fake-server';
import { adFetched, setIsOwner, setRemoving } from './action-creators';
import { contentLoading, contentLoaded } from '../../page/action-creators';
import { StoreState } from '../../../store/root-reducer';
import { message } from 'antd';
import { SubmissionError } from 'redux-form';

export const loadAd = (adId: number, notFoundCallback: () => void) => async (
	dispatch: ViewDispatch,
	getState: () => StoreState,
) => {
	isNaN(adId) && notFoundCallback();
	dispatch(contentLoading());
	const result = await getAd(adId);
	if (result) {
		const state = getState();
		if (state.userAuth.userId) {
			const isOwnerResult = await isOwner(adId, state.userAuth.userId);
			dispatch(setIsOwner(isOwnerResult));
		}
		dispatch(adFetched(result));
	} else {
		notFoundCallback();
	}
	dispatch(contentLoaded());
};

export const remove = (carId: number, successCallback: () => void) => async (
	dispatch: ViewDispatch,
) => {
	dispatch(setRemoving(true));
	const result = await removeCar(carId);
	if (result.errors) {
		message.error(result.errors.error);
		throw new SubmissionError(result.errors);
	} else {
		message.success('Ad was successfully removed');
		successCallback();
	}
	dispatch(setRemoving(false));
};
