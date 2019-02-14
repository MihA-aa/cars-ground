import { connect } from 'react-redux';

import { ImmutableStore } from '../../store/root-reducer';
import { LoaderProps } from '../loader';
import { Layout as LayoutComponent } from './component';

export interface HeaderProps extends LoaderProps {}

const mapStateToProps = (store: ImmutableStore): HeaderProps => ({
	isLoading: store.getIn(['page', 'contentIsLoading'])!,
});

export const Layout = connect<LoaderProps, null, null, ImmutableStore>(mapStateToProps)(
	LayoutComponent,
);
