import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export default createMuiTheme({
	palette: {
		primary: {
			main: '#1e88e5',
		},
		secondary: {
			main: '#ffffff',
		},
		error: red,
	},
});
