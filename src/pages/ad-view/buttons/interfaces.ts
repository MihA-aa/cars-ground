import { RootProps } from '../interfaces';

export type ButtonsProps = ButtonsOwnProps & ButtonsStateToProps & ButtonsDispatchToProps;

export type ButtonsOwnProps = OwnProps & RootProps;

export interface OwnProps {
	carId: number;
}

export interface ButtonsStateToProps {
	removing: boolean;
}

export interface ButtonsDispatchToProps {
	remove: () => Promise<void>;
	edit: () => void;
}
