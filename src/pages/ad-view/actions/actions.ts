import { ViewDispatch } from './../interfaces';
import {
	getAd,
	isOwner,
	removeCar,
	commentOn as commentOnCall,
} from '../../../fake-server/fake-server';
import { adFetched, setIsOwner, setRemoving, setCommenting, pushComment } from './action-creators';
import { contentLoading, contentLoaded } from '../../page/action-creators';
import { message } from 'antd';
import { SubmissionError } from 'redux-form';
import { StoreState } from '../../../store/root-reducer';

export const loadAd = (adId: number, notFoundCallback: () => void) => async (
	dispatch: ViewDispatch,
) => {
	isNaN(adId) && notFoundCallback();
	dispatch(contentLoading());
	const result = await getAd(adId);
	if (result) {
		const isOwnerResult = await isOwner(adId);
		dispatch(setIsOwner(isOwnerResult));
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

export const commentOn = (text: string) => async (
	dispatch: ViewDispatch,
	getState: () => StoreState,
) => {
	dispatch(setCommenting(true));
	const state = getState();
	const comment = {
		text,
		adId: state.view.data.adId,
		userId: state.userAuth.userId!,
		dateTime: new Date().toLocaleString(),
	};
	const result = await commentOnCall(comment);
	dispatch(pushComment(result));
	dispatch(setCommenting(false));
};
