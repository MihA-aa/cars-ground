import { ItemData } from './../listing/interfaces';

export interface AdViewStateToProps {
	data: ItemData;
}

export interface ViewState {
	data?: ItemData;
}

export type AdViewProps = AdViewStateToProps;
