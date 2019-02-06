import { ThunkDispatch } from 'redux-thunk';
import { ListingAction } from './actions/action-creators';

export interface ListingState {
	items: ItemData[];
	isLoaded: boolean;
}

export type ListingDispatch = ThunkDispatch<ListingState, undefined, ListingAction>;

export type ListingProps = ListingStateToProps & ListingDispatchToProps;

export interface ListingStateToProps {
	items: ItemData[];
	isLoaded: boolean;
}

export interface ListingDispatchToProps {
	loadAds: () => Promise<void>;
}

export interface ItemData {
	id: number;
	title: string;
	avatar: string;
	description?: string;
	content: string;
	starsCount: number;
	viewsCount: number;
	commentsCount: number;
	photo: string;
}
