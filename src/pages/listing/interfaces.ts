import { BaseDispatch } from './../../helpers/base-dispatch';
import { ListingAction } from './actions/action-creators';
import { Ad } from '../../data-interfaces/interfaces/ad';

export interface ListingState {
	items: Ad[];
	isLoaded: boolean;
	total: number;
}

export type ListingDispatch = BaseDispatch<ListingAction>;

export type ListingProps = ListingStateToProps & ListingDispatchToProps;

export interface ListingStateToProps {
	items: Ad[];
	isLoaded: boolean;
	total: number;
}

export interface ListingDispatchToProps {
	loadAds: (page: number, pageSize: number | undefined) => void;
	reset: () => void;
	loadTotal: () => void;
}

export interface ItemData {
	id: number;
	title: string;
	avatar: string;
	description?: string;
	content: string;
	stars: number;
	views: number;
	comments: number;
	photo: string;
}
