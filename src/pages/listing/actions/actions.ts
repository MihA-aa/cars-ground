import { ListingDispatch } from '../interfaces';
import { adsFetched, setTotal, reset } from './action-creators';
import { getAds, getAdsCount } from '../../../fake-server/fake-server';

export const loadAds = (page: number, pageSize: number | undefined) => async (
	dispatch: ListingDispatch,
) => {
	dispatch(reset());
	const result = await getAds(page, pageSize);
	dispatch(adsFetched(result));
};

export const loadTotal = () => async (dispatch: ListingDispatch) => {
	const result = await getAdsCount();
	dispatch(setTotal(result));
};
