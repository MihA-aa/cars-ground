import { RouteComponentProps } from 'react-router-dom';

import { BaseDispatch } from './../../helpers/base-dispatch';
import { ViewAction } from './actions/action-creators';
import { Ad } from '../../data-interfaces/interfaces/ad';
import { UserData } from '../../fake-server/interfaces';
import { Car } from '../../data-interfaces/interfaces/car';
import { StrictImmutableList } from '../../helpers/strict-immutable';

export type ViewDispatch = BaseDispatch<ViewAction>;

export interface AdViewStateToProps {
	data: Ad;
	isOwner: boolean;
}

export interface AdViewDispatchToProps {
	loadAd: () => Promise<void>;
}

export interface ViewState {
	data: ImmutableAd;
	isOwner: boolean;
	removing: boolean;
	commenting: boolean;
}

interface RouteParams {
	id: string;
}

interface ImmutableAd {
	user: UserData;
	adId: number;
	car: Car;
	meta: ImmutableMetaData;
}

export interface ImmutableMetaData {
	avatar: string;
	stars: number;
	views: number;
	comments: StrictImmutableList<Comment>;
}

export type RootProps = RouteComponentProps<RouteParams>;

export type AdViewProps = AdViewStateToProps & AdViewDispatchToProps & RootProps;
