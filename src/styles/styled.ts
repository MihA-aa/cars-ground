import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Link = styled(RouterLink)`
	text-decoration: none;
	color: #fff;
	&:focus,
	&:hover,
	&:visited,
	&:link,
	&:active {
		color: #fff;
		text-decoration: none;
	}
`;

export const Styled = {
	Link,
};
