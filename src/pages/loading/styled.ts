import { Spin as ASpin, Layout as ALayout } from 'antd';
import styled from 'styled-components';

const Spin = styled(ASpin)`
	&& {
		margin: auto;
		padding-bottom: 250px;
	}
`;

const Layout = styled(ALayout)`
	&& {
		position: fixed;
		width: 100%;
		height: 100%;
	}
`;

export const Styled = {
	Spin,
	Layout,
};
