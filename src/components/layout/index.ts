import { connect } from 'react-redux';

import { StoreState } from '../../store/root-reducer';
import { LoaderProps } from '../loader';
import { Layout as LayoutComponent } from './component';

export interface HeaderProps extends LoaderProps {}

const mapStateToProps = ({ page }: StoreState): HeaderProps => ({
	isLoading: page.contentIsLoading,
});

export const Layout = connect<LoaderProps, null, null, StoreState>(mapStateToProps)(
	LayoutComponent,
);
