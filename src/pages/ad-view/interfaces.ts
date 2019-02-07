import { BaseDispatch } from './../../helpers/base-dispatch';

import { ViewAction } from './actions/action-creators';
import { Ad } from '../../data-interfaces/interfaces/ad';
import { RouteComponentProps } from 'react-router-dom';

export type ViewDispatch = BaseDispatch<ViewAction>;

export interface AdViewStateToProps {
	data: Ad;
	isOwner: boolean;
}

export interface AdViewDispatchToProps {
	loadAd: () => Promise<void>;
}

export interface ViewState {
	data: Ad;
	isOwner: boolean;
	removing: boolean;
}

interface RouteParams {
	id: string;
}

export type RootProps = RouteComponentProps<RouteParams>;

export type AdViewProps = AdViewStateToProps & AdViewDispatchToProps & RootProps;
