import React from 'react';

interface ErrorBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
	state: ErrorBoundaryState = {
		hasError: false,
	};

	componentDidCatch(error: Error | null, info: any) {
		this.setState({
			hasError: true,
		});

		console.error(error, info);
	}

	render = () =>
		this.state.hasError ? (
			<div>
				<h2>Something was wrong...</h2>
			</div>
		) : (
			this.props.children
		);
}
